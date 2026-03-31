// src/Home.jsx
import { Container, Card, Button } from 'react-bootstrap';
import './App.css'; // Reutilizamos el fondo épico y los estilos globales
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/credits')
  };

  return (
    <Container fluid className="theater-container">
      <Card className="song-card w-100 text-center p-4 p-md-5" style={{ maxWidth: '800px' }}>
        <Card.Body>
          {/* Título principal con el brillo teatral */}
          <h1 className="title-glow display-3 mb-4">
            Jesucristo Superstar
          </h1>
          
          {/* Sinopsis de la obra */}
          <div className="text-light mb-5" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            <p>
              Una revolucionaria ópera rock que narra los últimos siete días de la vida de Jesús de Nazaret. 
              A diferencia de los relatos bíblicos tradicionales, esta historia nos sumerge en la tensión 
              humana, el conflicto político y la tragedia inminente, todo visto a través de los ojos 
              atormentados de Judas Iscariote.
            </p>
          </div>

          {/* Botón de acción principal */}
          <Button 
            variant="warning" 
            size="lg" 
            className="px-5 py-3 fw-bold text-uppercase mb-4"
            style={{ 
              letterSpacing: '3px', 
              boxShadow: '0 0 20px rgba(255, 193, 7, 0.4)',
              borderRadius: '50px' 
            }}
            onClick={handleStart} 
          >
            Comenzar Función
          </Button>

          {/* Firma del desarrollador */}
          <div 
            className="mt-4 pt-4 border-top border-secondary text-warning" 
            style={{ fontSize: '0.85rem', letterSpacing: '1px' }}
          >
            Sitio web desarrollado por: <br className="d-block d-sm-none" /> 
            <span className="text-warning fw-bold">Ing. Geremy Dugarte</span>
          </div>

        </Card.Body>
      </Card>
    </Container>
  );
}