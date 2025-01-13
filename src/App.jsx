import { Link, Route, Routes } from 'react-router';
import './App.css';
import Detail from './pages/Detail';
import Main from './pages/Main';
import Search from './pages/Search';
import Favorite from './pages/Favorite';

function App() {
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
            <Search />
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
