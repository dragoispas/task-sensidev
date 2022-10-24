import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Character } from './domain';
import { CharacterFilters, getAllCharacters } from './api';
import { AppDispatch } from './store';

export type CharacterMap = {
  [id: number]: Character
}

export interface CharactersState {
  characters: Character[],
  charactersMap: CharacterMap,
  page: number,
  maxPage: number
}

const initialState: CharactersState = {
  characters: [],
  charactersMap: {},
  page: 1,
  maxPage: 1
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;

      const charactersMap: CharacterMap = {};
      state.characters.forEach(character => charactersMap[character.id] = character);
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
      state.characters = state.characters.concat(action.payload);

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
  }
});

export const { setCharacters, addCharacterToMap, appendCharacters, setPage, incrementPage, setMaxPage } = charactersSlice.actions;

export const retrieveAllCharacters = (filters?: CharacterFilters) => async (dispatch: AppDispatch) => {
  try {
    const response = await getAllCharacters(filters);
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