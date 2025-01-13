import React from 'react';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

export default function Favorite() {
  const fav = useSelector((state) => state.favorite);

  return (
    <div>
      {fav.map((i) => (
        <Card id={i} key={i} />
      ))}
    </div>
  );
}

// 굳이 Favorite 페이지가 필요한가
// 그냥 App.jsx에 showFavorite 상태 하나 줘서 true일때만 필터링하면 안되나
// 아, 페이지 디테일에 갔다와도 살아있어야함!

// 그럼 그냥 처음부터 상태를 배열에 포켓몬 하나당 객체로 {id, 이름, 설명, fav 등등} 으로 만들어서 관리하면 안되나
