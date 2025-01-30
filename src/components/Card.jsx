// import React from 'react';
import { useState, memo } from 'react';
import { useNavigate } from 'react-router';
import FavBtn from './FavBtn';

export const Card = memo(({ pokemon }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(`/detail/${pokemon.index}`)}
      className='flex flex-col items-center justify-center w-40 h-40 transition-all duration-100 ease-in bg-white border-b-4 border-r-4 border-black rounded-lg shadow-2xl cursor-pointer p-7 hover:scale-110'
    >
      {isLoading ? (
        <div className='flex items-center justify-center w-24 h-24'>
          로딩중...
        </div>
      ) : null}
      <img
        onLoad={() => setIsLoading(false)}
        src={pokemon.front}
        alt={`pokedex-id: ${pokemon.index}`}
      />
      <div className='flex justify-between w-full'>
        <span>{pokemon.name}</span>
        <FavBtn index={pokemon.index} />
      </div>
    </li>
  );
});
