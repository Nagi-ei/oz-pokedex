import { createSlice } from '@reduxjs/toolkit';
import { fetchPokedex } from './thunk';

// const TOTAL_INDEX_NUMBER = 251;
const TOTAL_INDEX_NUMBER = 25;

export const pokeSlice = createSlice({
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
      [...state, action.payload.id].sort((a, b) => a - b),
    deletePokemon: (state, action) =>
      state.filter((i) => action.payload.id !== i),
  },
});
