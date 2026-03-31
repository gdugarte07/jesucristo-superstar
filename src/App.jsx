// src/App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'; // 1. Importamos el componente
import CardEscene from './CardEscene';
import Home from './Home';
import ProductionCredits from './ProductionCredits';
import CastCredits from './CastCredits';

function App() {
  return(
    <>
      {/* 2. Lo colocamos aquí arriba. Vigilará cada cambio y subirá el scroll */}
      <ScrollToTop /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credits" element={<ProductionCredits />} />
        <Route path="/cast" element={<CastCredits />} />
        <Route path="/cardescene" element={<CardEscene />} />
        <Route path="*" element={<h1 className="text-center mt-5 text-warning">Página no encontrada (404)</h1>} />
      </Routes>  
    </>
  );
}

export default App;