import { createAsyncThunk } from '@reduxjs/toolkit';

const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/';
const URL_POKEMON_SPECIES = 'https://pokeapi.co/api/v2/pokemon-species/';

// 하나짜리 사용안해서 fetchPokedex에 넣어도 괜찮음
const fetchPoke = async (id) => {
  const fetchAPI = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  const [speciesData, pokemonData] = await Promise.all([
    fetchAPI(`${URL_POKEMON_SPECIES}${id}/`),
    fetchAPI(`${URL_POKEMON}${id}/`),
  ]);

  const pokeObj = {
    index: id,
    name: speciesData.names.find((t) => t.language.name === 'ko').name,
    description: speciesData.flavor_text_entries.find(
      (t) => t.language.name === 'ko'
    ).flavor_text,
    front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`,
    category: speciesData.genera.find((t) => t.language.name === 'ko').genus,
    type: pokemonData.types.map((t) => t.type.name).join(', '),
    // favorite: false,
  };

  return pokeObj;
};

export const fetchPokedex = createAsyncThunk(
  'pokedex/fetchPokemons',
  async (TOTAL_INDEX_NUMBER) => {
    const pokemonIds = Array.from(Array(TOTAL_INDEX_NUMBER), (_, i) => i + 1);
    const pokedex = await Promise.all(pokemonIds.map((id) => fetchPoke(id)));

    return pokedex;
  }
);

// 더 이상 사용 안함.
export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async (index) => {
    const pokemon = await fetchPoke(index);
    return pokemon;
  }
);
