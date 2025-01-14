// import React from 'react';
import { useNavigate } from 'react-router';
import FavBtn from './FavBtn';

export default function Card({ pokemon }) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(`/detail/${pokemon.index}`)}
      className='border rounded-lg w-40 h-40 flex flex-col justify-center items-center p-7 bg-white cursor-pointer shadow-2xl hover:scale-110 transition-all duration-100 ease-in'
    >
      <img src={pokemon.front} alt={`pokedex-id: ${pokemon.index}`} />
      <div className='flex justify-between w-full'>
        <span>{pokemon.name}</span>
        <FavBtn id={pokemon.index} />
      </div>
    </li>
  );
}
