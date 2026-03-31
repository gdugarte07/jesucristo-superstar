// src/ProductionCredits.jsx
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function ProductionCredits() {
  const navigate = useNavigate();

  return (
    <Container fluid className="theater-container">
      <Card className="song-card w-100 p-4 p-md-5" style={{ maxWidth: '800px' }}>
        <Card.Body className="text-center">
          
          <h1 className="title-glow display-5 mb-5">
            El Equipo Detrás del Telón
          </h1>

          {/* Sección de Dirección */}
          <Row className="mb-4">
            <Col md={6} className="mb-4 mb-md-0">
              <h5 className="text-warning text-uppercase fw-bold" style={{ letterSpacing: '2px' }}>Dirección General</h5>
              <p className="text-light fs-5">Pedro Rondón</p>
            </Col>
            <Col md={6}>
              <h5 className="text-warning text-uppercase fw-bold" style={{ letterSpacing: '2px' }}>Dirección Artística</h5>
              <p className="text-light fs-5">Andryu Castillo</p>
            </Col>
          </Row>

          <hr className="border-secondary my-4" />

          {/* Sección de Arte y Estética */}
          <Row className="mb-4">
            <Col md={6} className="mb-4 mb-md-0">
              <h5 className="text-warning text-uppercase fw-bold" style={{ letterSpacing: '2px' }}>Vestuario</h5>
              <ul className="list-unstyled text-light fs-5">
                <li>Osmary Márquez</li>
                <li>Trinidad Medina</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5 className="text-warning text-uppercase fw-bold" style={{ letterSpacing: '2px' }}>Maquillaje</h5>
              <p className="text-light fs-5">Albert Davila</p>
            </Col>
          </Row>

          <hr className="border-secondary my-4" />

          {/* NUEVA Sección de Contenido Digital y Redes Sociales */}
          <div className="mb-4">
            <h5 className="text-warning text-uppercase fw-bold" style={{ letterSpacing: '2px' }}>Contenido Digital y Redes Sociales</h5>
            <p className="text-light fs-5 mb-0">
              Geremy Dugarte • Ronald Garcia • Johan Romero
            </p>
          </div>

          <hr className="border-secondary my-4" />

          {/* Sección de Apoyo */}
          <div className="mb-5">
            <h5 className="text-warning text-uppercase fw-bold mb-3" style={{ letterSpacing: '2px' }}>Personal de Apoyo</h5>
            <Row>
              <Col xs={6} className="text-light fs-6">
                <ul className="list-unstyled">
                  <li>Dorbelys Quintero</li>
                  <li>Liliana Davila</li>
                  <li>Gledys Calderón</li>
                </ul>
              </Col>
              <Col xs={6} className="text-light fs-6">
                <ul className="list-unstyled">
                  <li>Lourdes Bencomo</li>
                  <li>Glaudy Calderón</li>
                </ul>
              </Col>
            </Row>
          </div>

          {/* Agradecimientos Especiales */}
          <div className="bg-dark bg-opacity-50 p-4 rounded mb-5 border border-secondary">
            <h5 className="text-warning text-uppercase fw-bold mb-3" style={{ letterSpacing: '2px' }}>Agradecimientos Especiales</h5>
            <div className="text-light text-opacity-75" style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
              Luigys Burger • Centro Clínico "Dr. Marcial Ríos Morillo" <br />
              Lcdo. Eli Saul Rojas • By Shein K Mérida <br />
              "Las empanadas de mi Abuela" de Luis Arellano • PK Style Store
            </div>
          </div>

          {/* Botones de Navegación */}
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
            <Button 
              variant="outline-light" 
              className="px-4 py-2"
              onClick={() => navigate('/')}
            >
              Volver al Inicio
            </Button>
            <Button 
              variant="warning" 
              className="px-4 py-2 fw-bold"
              style={{ boxShadow: '0 0 15px rgba(255, 193, 7, 0.4)' }}
              onClick={() => navigate('/cast')}
            >
              Ver Elenco
            </Button>
          </div>

        </Card.Body>
      </Card>
    </Container>
  );
}