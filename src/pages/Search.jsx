import { getRegExp } from 'korean-regexp';
import React from 'react';
import { useSearchParams } from 'react-router';

export default function Search() {
  const [searchParams] = useSearchParams();
  const reg = getRegExp(searchParams.get('pokemons'));

  return (
    <ul>
      <Card id={11} />
      <Card id={63} />
    </ul>
  );
}
