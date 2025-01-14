import React from 'react';
import { favoriteSlice } from '../RTK/slice';
import { useSelector, useDispatch } from 'react-redux';

export default function FavBtn({ index }) {
  const fav = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  return (
    <>
      {fav.includes(index) ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(favoriteSlice.actions.deletePokemon({ index }));
          }}
        >
          ⭐️
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(favoriteSlice.actions.addPokemon({ index }));
          }}
        >
          🩶
        </button>
      )}
    </>
  );
}
