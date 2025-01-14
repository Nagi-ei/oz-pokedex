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
    <div>
      <div>
        <h2>{pokemon.name}</h2>
        <FavBtn id={pokemon.index} />
      </div>
      <p>{pokemon.description}</p>
      {isFront ? (
        <img src={pokemon.front} alt={`pokedex-id: ${pokemon.index}`} />
      ) : (
        <img src={pokemon.back} alt={`pokedex-id: ${pokemon.index}`} />
      )}
      <button onClick={handleFlip}>뒤집기</button>
    </div>
  );
}
