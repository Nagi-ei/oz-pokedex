import { createSlice } from '@reduxjs/toolkit';

// const TOTAL_INDEX_NUMBER = 251;
const TOTAL_INDEX_NUMBER = 25;
const pokemonIds = Array.from(Array(TOTAL_INDEX_NUMBER), (_, i) => i + 1);

export const pokeSlice = createSlice({
  name: 'pokedex',
  initialState: pokemonIds,
  reducers: {},
});

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addPokemon: (state, action) =>
      [...state, action.payload.id].sort((a, b) => a - b),
    deletePokemon: (state, action) =>
      state.filter((i) => action.payload.id !== i),
  },
});
