import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router';
import FavBtn from '../components/FavBtn';

export default function Detail() {
  const { id } = useParams();
  const { name, content } = useFetch(id);
  const [isFront, setIsFront] = useState(true);

  const handleFlip = () => {
    setIsFront((prev) => !prev);
  };

  return (
    <div>
      <div>
        <h2>{name}</h2>
        <FavBtn id={id} />
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
