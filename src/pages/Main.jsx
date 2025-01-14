import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

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
