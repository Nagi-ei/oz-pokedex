import React from 'react';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

export default function Main() {
  const pokedex = useSelector((state) => state.pokedex.data);

  return (
    <ul className='flex flex-wrap gap-4'>
      {pokedex.map((poke) => (
        <Card pokemon={poke} key={poke.index} />
      ))}
    </ul>
  );
}
