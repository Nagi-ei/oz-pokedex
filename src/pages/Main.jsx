import React from 'react';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokedex } from '../RTK/thunk';

// const TOTAL_INDEX_NUMBER = 251;
const TOTAL_INDEX_NUMBER = 25;

export default function Main() {
  const pokedex = useSelector((state) => state.pokedex);
  const dispatch = useDispatch();
  console.log(pokedex.data);

  useEffect(() => {
    dispatch(fetchPokedex(TOTAL_INDEX_NUMBER));
  }, []);

  return (
    <ul className='flex flex-wrap gap-4'>
      {pokedex.data.map((poke) => (
        <Card pokemon={poke} key={poke.index} />
      ))}
    </ul>
  );
}
