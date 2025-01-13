import { Link, Route, Routes, useNavigate } from 'react-router';
import './App.css';
import Detail from './pages/Detail';
import Main from './pages/Main';
import Search from './pages/Search';
import Favorite from './pages/Favorite';
import { useRef } from 'react';

function App() {
  const inputRef = useRef('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?pokemons=${inputRef.current.value}`);
    inputRef.current.value = '';
  };

  return (
    <>
      <h1>포켓몬 도감</h1>
      <nav>
        <ul>
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
                ref={inputRef}
              />
              <button type='submit'>🔍</button>
            </form>
          </li>
        </ul>
      </nav>
      <main>
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
