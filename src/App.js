import { NavBar } from './components/NavBar/NavBar.js'
//import { CardPCR } from './components/CardPCR/CardPCR.js';
import { Home } from './components/Home/Home.js';
import {DetailedPCR} from './components/DetailedPCR/DetailedPCR'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <DetailedPCR/>

    </div>
  );
}

export default App;
