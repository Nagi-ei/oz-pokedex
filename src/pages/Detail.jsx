import React, { useState } from 'react';
import { useParams } from 'react-router';
import FavBtn from '../components/FavBtn';
import { useSelector } from 'react-redux';

export default function Detail() {
  const { id } = useParams();
  const pokedex = useSelector((state) => state.pokedex);
  const pokemon = pokedex.data.find((poke) => poke.index === parseInt(id));
  console.log(pokedex.data);
  const [isFront, setIsFront] = useState(true);

  const handleFlip = () => {
    setIsFront((prev) => !prev);
  };

  return (
    <div className='bg-white rounded-xl border p-12 h-3/4 flex flex-col justify-center items-center gap-4 shadow-2xl'>
      <div className='flex justify-between w-full border-b pb-4'>
        <h2 className='text-3xl font-bold'>
          {pokemon.index}. {pokemon.name}
        </h2>
        <FavBtn id={pokemon.index} />
      </div>
      <div className='flex justify-between w-full'>
        <div>{pokemon.category}</div>
        <div>속성 : {pokemon.type}</div>
      </div>
      <p>{pokemon.description}</p>
      {isFront ? (
        <img
          src={pokemon.front}
          alt={`pokedex-id: ${pokemon.index}`}
          className='w-72'
        />
      ) : (
        <img
          src={pokemon.back}
          alt={`pokedex-id: ${pokemon.index}`}
          className='w-72'
        />
      )}
      <button onClick={handleFlip}>뒤집기</button>
    </div>
  );
}
