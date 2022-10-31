import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Character } from './domain';
import { CharacterFilters, getAllCharacters } from './api';
import { AppDispatch } from './store';

export type CharacterMap = {
  [id: number]: Character
}

export interface CharactersState {
  charactersIds: number[],
  charactersMap: CharacterMap,
  page: number,
  maxPage: number,
  errorMessage: string | null
}

const initialState: CharactersState = {
  charactersIds: [],
  charactersMap: {},
  page: 1,
  maxPage: 1,
  errorMessage: null
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.charactersIds = action.payload.map(character => character.id);

      const charactersMap: CharacterMap = {};
      action.payload.forEach(character => charactersMap[character.id] = character);
      state.charactersMap = charactersMap;
    },
    setCharactersMap: (state, action: PayloadAction<CharacterMap>) => {
      state.charactersMap = action.payload;
    },
    addCharacterToMap: (state, action: PayloadAction<Character>) => {
      const character = action.payload;
      state.charactersMap[character.id] = character;
    },
    appendCharacters: (state, action: PayloadAction<Character[]>) => {
      state.charactersIds = state.charactersIds.concat(action.payload.map(character => character.id));
      action.payload.forEach(character => state.charactersMap[character.id] = character);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    incrementPage: (state, action: PayloadAction<void>) => {
      state.page += 1;
    },
    setMaxPage: (state, action: PayloadAction<number>) => {
      state.maxPage = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string | null>) => {
      state.errorMessage = action.payload;
    }
  }
});

export const { setCharacters, addCharacterToMap, appendCharacters, setPage, incrementPage, setMaxPage, setErrorMessage } = charactersSlice.actions;

export const retrieveAllCharacters = (filters?: CharacterFilters) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setErrorMessage(null));

    const response = await getAllCharacters(filters);

    if (response === null) {
      dispatch(setErrorMessage('An error has occurred while contacting the API.'));
    }

    dispatch(setCharacters(response?.results ?? []));
    dispatch(setMaxPage(response?.info?.pages ?? 1));
    dispatch(setPage(1));
  } catch (error) {
    console.log(error);
  }
}

export const retrieveMoreCharacters = (filters?: CharacterFilters) => async (dispatch: AppDispatch, getState: any) => {
  const { characters: {  maxPage }} = getState();
  if (filters?.page && filters?.page > maxPage) {
    return;
  }

  dispatch(incrementPage());
  const response = await getAllCharacters(filters);
  dispatch(appendCharacters(response?.results ?? []));
}

export default charactersSlice.reducer;