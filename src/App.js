import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Servicos from './components/pages/Servicos';
import Contato from './components/pages/Contato';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { BsGlobe2 } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";



function App() {
  return (
    <div>
      <h1>Menu</h1>
      <BrowserRouter>
        <ul>
          <li><Link to="/"><FaHome />Home </Link></li>
          <li><Link to="/sobre"><FcAbout />Sobre </Link></li>
          <li><Link to="/servicos"><BsGlobe2 />Servicos </Link></li>
          <li><Link to="/contato"><BsTelephoneFill />Contato </Link></li>
        </ul>

        {/* Aqui aparecerá o componente da rota*/}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>

      </BrowserRouter>

      {/* Fim do componente da rota */}
      <p>Esse é o rodapé show!</p>
    </div>
  );
}
export default App;
