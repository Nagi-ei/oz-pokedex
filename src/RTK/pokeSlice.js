import { createSlice } from '@reduxjs/toolkit';

const TOTAL_INDEX_NUMBER = 251;
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
    addPokemon: () => {},
    deletePokemon: () => {},
  },
});
