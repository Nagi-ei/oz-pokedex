import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchPokedex } from './RTK/thunk';
import Detail from './pages/Detail';
import Main from './pages/Main';
import Search from './pages/Search';
import Favorite from './pages/Favorite';
import './App.css';

const TOTAL_INDEX_NUMBER = 251;

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPokedex(TOTAL_INDEX_NUMBER));
    console.log('api 받아옴');
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?pokemons=${input}`);
  };

  const handleRealTime = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className='py-7 bg-red-700'></div>
      <h1 className='text-center text-5xl py-5 bg-black text-white'>
        포켓몬 도감
      </h1>
      <nav className='py-5'>
        <ul className='flex gap-4 justify-center'>
          <li>
            <Link to='/'>메인페이지</Link>
          </li>
          <li>
            <Link to='/favorite'>찜목록</Link>
          </li>
          <li>
            <form onSubmit={handleSearch}>
              <input
                type='text'
                placeholder='검색어를 입력하세요...'
                value={input}
                className='w-56 border-b-2 outline-none'
                onChange={handleRealTime}
              />
              <button type='submit'>🔍</button>
            </form>
          </li>
        </ul>
      </nav>
      <main className='p-10 bg-zinc-500 min-h-screen'>
        <Routes>
          <Route index element={<Main />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

// 디테일 페이지 -> 뒤집기
// 로딩, 에러 상태 만들기
// 최적화 -> 검색 디바운스, 레이지?
