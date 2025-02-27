import React from 'react';
import { useSearchParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getRegExp } from 'korean-regexp';
import Card from '../components/Card';

export default function Search() {
  const [searchParams] = useSearchParams();
  const pokedex = useSelector((state) => state.pokedex);
  const reg = getRegExp(searchParams.get('pokemons'));

  if (pokedex.loading) {
    return <div>loading...</div>;
  }

  return (
    <ul className='flex flex-wrap gap-4'>
      {pokedex.data
        .filter((poke) => poke.name.match(reg))
        .map((match) => (
          <Card pokemon={match} key={match.index} />
        ))}
    </ul>
  );
}
