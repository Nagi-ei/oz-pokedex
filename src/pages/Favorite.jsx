// 굳이 Favorite 페이지가 필요한가
// 그냥 App.jsx에 showFavorite 상태 하나 줘서 true일때만 필터링하면 안되나

import React from 'react';
import Card from '../components/Card';

export default function Favorite() {
  return (
    <div>
      <Card id={130} />
    </div>
  );
}
