
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Listar Reservas</Link> | <Link to="/cadastro">Cadastrar Reserva</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
