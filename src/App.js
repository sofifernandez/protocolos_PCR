import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar.js'
import { Home } from './components/Home/Home.js';
import { DetailedPCR } from './components/DetailedPCR/DetailedPCR'
import { Footer } from "./components/Footer/Footer.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/type/:typePCR" element={<Home />} />
        <Route exact path="/protocolo/:protocoloID" element={<DetailedPCR /> }/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
