// src/CardEscene.jsx
import { useState, useEffect } from 'react';
import { Container, Card, Button, Badge } from 'react-bootstrap';
// 1. Importamos useNavigate para poder cambiar de ruta
import { useNavigate } from 'react-router-dom'; 
import { songsData } from './songsData';
import './App.css'; 

export default function CardEscene() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // 2. Inicializamos la función de navegación
  const navigate = useNavigate(); 

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Le da un deslizamiento suave y elegante
    });
  }, [currentIndex]);

  const nextSong = () => {
    if (currentIndex < songsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSong = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentSong = songsData[currentIndex];

  return (
    <Container fluid className="theater-container py-5">
      <Card className="song-card w-100" style={{ maxWidth: '800px' }}>
        
        <Card.Header className="d-flex justify-content-between align-items-center border-bottom-0 pt-3 px-4">
          <span className="text-muted fw-bold">
            {currentIndex + 1} / {songsData.length}
          </span>
          <Badge bg={currentSong.themeVariant} text={currentSong.themeVariant === 'light' || currentSong.themeVariant === 'warning' ? 'dark' : 'light'} className="px-3 py-2" style={{ letterSpacing: '1px' }}>
            {currentSong.scene}
          </Badge>
        </Card.Header>

        <Card.Body key={currentSong.id} className="song-card-body p-4 p-md-5 text-center">
          <Card.Title className="display-5 fw-bold mb-4 text-white">
            {currentSong.title}
          </Card.Title>
          
          {/* Texto justificado y con mejor interlineado */}
          <Card.Text 
            className="fs-5 text-light px-2" 
            style={{ 
              lineHeight: '1.8', 
              textAlign: 'justify' 
            }}
          >
            {currentSong.description}
          </Card.Text>
        </Card.Body>

        {/* 3. Footer actualizado con flexbox para acomodar 3 botones */}
        <Card.Footer className="d-flex flex-column flex-sm-row justify-content-between align-items-center border-top-0 pb-4 px-4 bg-transparent gap-3">
          
          <Button 
            variant="outline-light" 
            onClick={prevSong} 
            disabled={currentIndex === 0}
            className="w-100 w-sm-auto px-4"
          >
            Anterior
          </Button>

          {/* NUEVO BOTÓN DE INICIO */}
          <Button 
            variant="outline-secondary" 
            onClick={() => navigate('/')} 
            className="w-100 w-sm-auto px-4 text-light"
            style={{ borderStyle: 'dashed' }} /* Un borde punteado para diferenciarlo de los de navegación */
          >
            Volver al Inicio
          </Button>

          <Button 
            variant="warning" 
            onClick={nextSong} 
            disabled={currentIndex === songsData.length - 1}
            className="w-100 w-sm-auto px-4 fw-bold shadow-sm"
          >
            Siguiente
          </Button>
          
        </Card.Footer>
      </Card>
    </Container>
  );
}