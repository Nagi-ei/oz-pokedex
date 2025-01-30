import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components/Card';

export default function Favorite() {
  const fav = useSelector((state) => state.favorite);
  const pokedex = useSelector((state) => state.pokedex);
  const favDex = pokedex.data.filter((poke) => fav.includes(poke.index));

  if (pokedex.loading) {
    return <div>loading...</div>;
  }

  return (
    <ul className='flex flex-wrap gap-4'>
      {favDex.map((poke) => (
        <Card pokemon={poke} key={poke.index} />
      ))}
    </ul>
  );
}

// 굳이 Favorite 페이지가 필요한가
// 그냥 App.jsx에 showFavorite 상태 하나 줘서 true일때만 필터링하면 안되나 (토글)

// 그럼 그냥 처음부터 상태를 배열에 포켓몬 하나당 객체로 {id, 이름, 설명, fav 등등} 으로 만들어서 관리하면 안되나

// 새로고침해도 살아있으려면, favorite을 상태 말고 어딘가 저장해야함.
