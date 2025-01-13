import React from 'react';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

export default function Main() {
  const pokeIndex = useSelector((state) => state.pokedex);

  return (
    <ul>
      {pokeIndex.map((i) => (
        <Card id={i} key={i} />
      ))}
    </ul>
  );
}
