import { useEffect, useState, lazy, Suspense } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchPokedex } from './RTK/thunk';

const Main = lazy(() => import('./pages/Main'));
const Detail = lazy(() => import('./pages//Detail'));
const Search = lazy(() => import('./pages/Search'));
const Favorite = lazy(() => import('./pages/Favorite'));

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
    navigate(`/search?pokemons=${e.target.value}`);
  };

  return (
    <>
      <h1 className='text-center text-5xl py-5 bg-black text-white border-t-[60px] border-red-700'>
        포켓몬 도감
      </h1>
      <nav className='py-5 border-b-4 border-black'>
        <ul className='flex justify-center gap-4'>
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
      <main className='min-h-screen p-10 bg-zinc-500'>
        <Suspense fallback={<div className='text-center'>로딩중...</div>}>
          <Routes>
            <Route index element={<Main />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;

// 디테일 페이지 -> 뒤집기
// 로딩, 에러 상태 만들기
// 최적화 -> 검색 디바운스, 레이지?
