import { createSelector } from '@reduxjs/toolkit';

export const selectPokemonById = (id) =>
  createSelector(
    (state) => state.pokedex.data,
    (pokedex) => pokedex.find((pokemon) => pokemon.index === id)
  );
