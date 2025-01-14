import { createSlice } from '@reduxjs/toolkit';
import { fetchPokedex, fetchPokemon } from './thunk';

// const TOTAL_INDEX_NUMBER = 251;
const TOTAL_INDEX_NUMBER = 25;

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: {
    data: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokedex.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPokedex.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPokedex.rejected, (state) => {
      state.loading = false;
      state.error = 'Something went wrong!';
    });
  },
});

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addPokemon: (state, action) =>
      [...state, action.payload.index].sort((a, b) => a - b),
    deletePokemon: (state, action) =>
      state.filter((i) => action.payload.index !== i),
  },
});

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    data: {
      index: 0,
      name: '',
      type: '',
      category: '',
      description: '',
      front: '',
      back: '',
    },
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPokemon.rejected, (state) => {
      state.loading = false;
      state.error = 'Something went wrong!';
    });
  },
});
