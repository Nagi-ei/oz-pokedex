import React from 'react';
import useFetch from '../hooks/useFetch';

export default function Detail({ id }) {
  const { name, content } = useFetch(id);

  return (
    <div>
      <div>
        <h2>{name}</h2>
        <button>🩶⭐️</button>
      </div>
      <p>{content}</p>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt=''
      />
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
        alt=''
      />
      <button>뒤집기</button>
    </div>
  );
}
