import { configureStore } from '@reduxjs/toolkit';
import { favoriteSlice, pokeSlice } from './slice';

export const store = configureStore({
  reducer: {
    pokedex: pokeSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});
