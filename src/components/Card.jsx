// import React from 'react';
import useFetch from '../hooks/useFetch';

export default function Card({ id }) {
  const { name, content } = useFetch(id);
  return (
    <li>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt=''
      />
      <div>
        <span>{name}</span>
        <button>🩶⭐️</button>
        {/* <p>{content}</p> */}
      </div>
    </li>
  );
}
