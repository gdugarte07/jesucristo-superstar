// src/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // Extraemos la ruta actual (ej: /, /elenco, /creditos)
  const { pathname } = useLocation();

  // Este hook se ejecuta cada vez que "pathname" cambia
  useEffect(() => {
    // window.scrollTo(x, y) mueve la pantalla a la coordenada superior izquierda
    window.scrollTo(0, 0);
  }, [pathname]);

  // Este componente no muestra nada en pantalla, solo hace el trabajo en segundo plano
  return null;
}