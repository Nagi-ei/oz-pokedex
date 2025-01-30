import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components/Card';

export default function Main() {
  const pokedex = useSelector((state) => state.pokedex);
  // console.log(pokedex);

  if (pokedex.loading) {
    return <div>loading...</div>;
  }

  return (
    <ul className='flex flex-wrap justify-center gap-4'>
      {pokedex.data.map((poke) => (
        <Card pokemon={poke} key={poke.index} />
      ))}
    </ul>
  );
}
