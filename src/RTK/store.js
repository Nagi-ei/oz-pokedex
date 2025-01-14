import { configureStore } from '@reduxjs/toolkit';
import { favoriteSlice, pokedexSlice, pokemonSlice } from './slice';

export const store = configureStore({
  reducer: {
    pokedex: pokedexSlice.reducer,
    favorite: favoriteSlice.reducer,
    pokemon: pokemonSlice.reducer,
  },
});
