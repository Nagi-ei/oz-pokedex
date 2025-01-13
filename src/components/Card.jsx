// import React from 'react';
import { useNavigate } from 'react-router';
import useFetch from '../hooks/useFetch';

export default function Card({ id }) {
  const { name } = useFetch(id);
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(`/detail/${id}`)}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt=''
      />
      <div>
        <span>{name}</span>
        <button>🩶⭐️</button>
      </div>
    </li>
  );
}
