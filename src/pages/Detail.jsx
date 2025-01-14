import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon } from '../RTK/thunk';
import FavBtn from '../components/FavBtn';

export default function Detail() {
  const { id } = useParams();
  const [isFront, setIsFront] = useState(true);
  const pokemon = useSelector((state) => state.pokemon.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon(parseInt(id)));
  }, []);

  const handleFlip = () => {
    setIsFront((prev) => !prev);
  };

  return (
    <div className='bg-white rounded-xl border p-12 h-3/4 flex flex-col justify-center items-center gap-4 shadow-2xl'>
      <div className='flex justify-between w-full border-b pb-4'>
        <h2 className='text-3xl font-bold'>
          {pokemon.index}. {pokemon.name}
        </h2>
        <FavBtn index={pokemon.index} />
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
