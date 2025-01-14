// import React from 'react';
import { useNavigate } from 'react-router';
import FavBtn from './FavBtn';

export default function Card({ pokemon }) {
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(`/detail/${pokemon.index}`)}>
      <img src={pokemon.front} alt={`pokedex-id: ${pokemon.index}`} />
      <div>
        <span>{pokemon.name}</span>
        <FavBtn id={pokemon.index} />
      </div>
    </li>
  );
}
