// import React from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router';
import { favoriteSlice } from '../RTK/pokeSlice';
import { useSelector, useDispatch } from 'react-redux';
import FavBtn from './FavBtn';

export default function Card({ id }) {
  const { name } = useFetch(id);
  const navigate = useNavigate();

  const fav = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  return (
    <li onClick={() => navigate(`/detail/${id}`)}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt=''
      />
      <div>
        <span>{name}</span>
        <FavBtn id={id} />
      </div>
    </li>
  );
}
