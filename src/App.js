import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import { marvelData } from './data/marvelData';
import HeroList from './components/heroList/HeroList';

function App() {
  return (
    <div className="App">
    <Header/>
    <HeroList data={marvelData}/>
    </div>
  );
}

export default App;
