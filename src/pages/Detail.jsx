import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon } from '../RTK/thunk';
import FavBtn from '../components/FavBtn';

export default function Detail() {
  const { id } = useParams();
  const [isFront, setIsFront] = useState(true);
  // const pokemon = useSelector((state) => state.pokemon.data);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPokemon(parseInt(id)));
  // }, []);

  // 강의 방식 비슷하게 (강의에선 셀렉터를 따로 만들어서)
  // 이렇게하면 이 페이지에서 새로고침하면 데이터가 나오지 않음
  // 렌더링할때 ? 다니까 나옴. 흠 왜지? -> undefined 상태로 렌더링하고나서 리렌더링된건가
  // 그럼 로딩 상태 추가하면 가능?
  // 아! 렌더링 먼저 삭 -> api 받아오기 성공 -> 다시 렌더링
  const pokedex = useSelector((state) => state.pokedex.data);
  const pokemon = pokedex.find((poke) => poke.index === parseInt(id));

  console.log('디테일 렌더링');

  const handleFlip = () => {
    setIsFront((prev) => !prev);
  };

  return (
    <div className='bg-white rounded-xl border p-12 h-3/4 flex flex-col justify-center items-center gap-4 shadow-2xl'>
      <div className='flex justify-between w-full border-b pb-4'>
        <h2 className='text-3xl font-bold'>
          {pokemon?.index}. {pokemon?.name}
        </h2>
        <FavBtn index={pokemon?.index} />
      </div>
      <div className='flex justify-between w-full'>
        <div>{pokemon?.category}</div>
        <div>속성 : {pokemon?.type}</div>
      </div>
      <p>{pokemon?.description}</p>
      {isFront ? (
        <img
          src={pokemon?.front}
          alt={`pokedex-id: ${pokemon?.index}`}
          className='w-72'
        />
      ) : (
        <img
          src={pokemon?.back}
          alt={`pokedex-id: ${pokemon?.index}`}
          className='w-72'
        />
      )}
      <button onClick={handleFlip}>뒤집기</button>
    </div>
  );
}
