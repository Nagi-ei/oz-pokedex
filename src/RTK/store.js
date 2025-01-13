import { configureStore } from '@reduxjs/toolkit';
import { favoriteSlice, pokeSlice } from './pokeSlice';

export const store = configureStore({
  reducer: {
    pokedex: pokeSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});
