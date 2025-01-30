import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon } from '../RTK/thunk';
import FavBtn from '../components/FavBtn';
import FlippingCard from '../components/FlippingCard';
import { selectPokemonById } from '../RTK/selector';

export default function Detail() {
  const { id } = useParams();
  // const pokemon = useSelector((state) => state.pokemon.data);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPokemon(parseInt(id)));
  // }, []);

  // 이렇게하면 이 페이지에서 새로고침하면 데이터가 나오지 않음
  // 렌더링할때 ? 다니까 나옴. 흠 왜지? -> undefined 상태로 렌더링하고나서 리렌더링된건가
  // 그럼 로딩 상태 추가하면 가능?
  // 아! 렌더링 먼저 삭 -> api 받아오기 성공 -> 다시 렌더링

  // 강의 방식 비슷하게 (강의에선 셀렉터를 따로 만들어서)
  // 하나 찾자고 몇백개를 다 가져와서 고르기는 비효율적임!
  // const pokedex = useSelector((state) => state.pokedex);
  // const pokemon = pokedex.data.find((poke) => poke.index === parseInt(id));

  const pokemon = useSelector(selectPokemonById(parseInt(id)));

  console.log('디테일 렌더링');

  // if (pokedex.loading) {
  //   return (
  //     <div className='flex flex-col items-center justify-center gap-4 p-12 bg-white border shadow-2xl rounded-xl h-3/4'>
  //       loading...
  //     </div>
  //   );
  // }

  return (
    <div className='flex flex-col items-center justify-center gap-4 p-12 bg-white border-b-8 border-r-8 border-black shadow-2xl rounded-xl h-3/4'>
      <div className='flex justify-between w-full pb-4 border-b'>
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
      <FlippingCard front={pokemon?.front} back={pokemon?.back} />
    </div>
  );
}
