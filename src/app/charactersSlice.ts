import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Character } from './domain';
import { CharacterFilters, getAllCharacters } from '../modules/generic/api';
import { AppDispatch } from './store';

export interface CharactersState {
  characters: Character[]
}

const initialState: CharactersState = {
  characters: []
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    }
  }
});

export const { setCharacters } = charactersSlice.actions;

export const retrieveAllCharacters = (filters?: CharacterFilters) => async (dispatch: AppDispatch) => {
  const response = await getAllCharacters(filters);
  dispatch(setCharacters(response.results));
}

export default charactersSlice.reducer;