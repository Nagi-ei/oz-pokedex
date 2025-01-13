import './App.css';
import Card from './components/Card';
import Main from './pages/Main';
import Search from './pages/Search';

function App() {
  return (
    <>
      <h1>포켓몬 도감</h1>
      <nav>
        <ul>
          <li>메인페이지</li>
          <li>찜목록</li>
          <li>
            <Search />
          </li>
        </ul>
      </nav>
      <Main />
    </>
  );
}

export default App;
