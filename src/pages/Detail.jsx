import React from 'react';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';

export default function Detail({ id }) {
  const { name, content } = useFetch(id);
  const [isFront, setIsFront] = useState(true);

  const handleFlip = () => {
    setIsFront((prev) => !prev);
  };

  return (
    <div>
      <div>
        <h2>{name}</h2>
        <button>🩶⭐️</button>
      </div>
      <p>{content}</p>
      {isFront ? (
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt=''
        />
      ) : (
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
          alt=''
        />
      )}
      <button onClick={handleFlip}>뒤집기</button>
    </div>
  );
}
