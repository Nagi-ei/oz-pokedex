import React from 'react';
import { favoriteSlice } from '../RTK/pokeSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function FavBtn({ id }) {
  const fav = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  return (
    <>
      {fav.includes(id) ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(favoriteSlice.actions.deletePokemon({ id }));
          }}
        >
          ⭐️
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(favoriteSlice.actions.addPokemon({ id }));
          }}
        >
          🩶
        </button>
      )}
    </>
  );
}
