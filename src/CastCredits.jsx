// src/CastCredits.jsx
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function CastCredits() {
  const navigate = useNavigate();

  // Componente interno para roles individuales (usando fs-5)
  const Role = ({ title, name }) => (
    <div className="mb-4 text-center">
      <h6 className="text-warning text-uppercase fw-bold mb-1" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>
        {title}
      </h6>
      <p className="text-light fs-5 m-0">{name}</p>
    </div>
  );

  // Estilo común para los títulos de grupo
  const groupTitleStyle = { letterSpacing: '2px' };

  return (
    <Container fluid className="theater-container py-5">
      <Card className="song-card w-100 p-4 p-md-5" style={{ maxWidth: '1000px' }}> {/* Agrandamos un poco el ancho máximo de la tarjeta */}
        <Card.Body>
          <h1 className="title-glow display-4 mb-5 text-center">Elenco</h1>

          {/* Personajes Principales - Todos usan fs-5 */}
          <Row className="justify-content-center">
            <Col md={4}><Role title="Jesucristo" name="Roberto Sanchez" /></Col>
            <Col md={4}><Role title="Judas" name="Gerardo Dugarte" /></Col>
            <Col md={4}><Role title="María Magdalena" name="Gerlimar Herrera" /></Col>
          </Row>

          <Row className="justify-content-center mt-3">
            <Col md={5}><Role title="María La Virgen (Antes del parto)" name="Keily Jerez" /></Col>
            <Col md={5}><Role title="María La Virgen (Después del parto)" name="Yuliangel Chacón" /></Col>
          </Row>

          <hr className="border-secondary my-4" />

          {/* Otras Figuras Clave - Todos usan fs-5 */}
          <Row className="justify-content-center">
            <Col md={4}><Role title="Poncio Pilato" name="Keyner Rondón" /></Col>
            <Col md={4}><Role title="Herodes" name="Sebastian Chacón" /></Col>
            <Col md={4}><Role title="Simón El Zelote" name="Andryu Castillo" /></Col>
          </Row>

          <hr className="border-secondary my-4" />

          {/* Gobernantes */}
          <div className="text-center mb-5">
            <h5 className="text-warning text-uppercase fw-bold mb-3" style={groupTitleStyle}>Gobernantes</h5>
            <Row className="justify-content-center">
              <Col xs={6} md={3}><Role title="Caifás" name="Jose Ivan Rivas" /></Col>
              <Col xs={6} md={3}><Role title="Anás" name="Geremy Dugarte" /></Col>
              <Col xs={6} md={3}><Role title="Gobernante #1" name="Ronald García" /></Col>
              <Col xs={6} md={3}><Role title="Gobernante #2" name="Gabriel Moreno" /></Col>
            </Row>
          </div>

          <hr className="border-secondary my-4" />

          {/* Grupos Grandes con tamaño de fuente AUMENTADO (fs-5) */}
          
          {/* Apóstoles */}
          <div className="mb-5">
            <h5 className="text-warning text-uppercase fw-bold mb-3 text-center" style={groupTitleStyle}>Apóstoles</h5>
            {/* Usamos fs-5 y mantenemos 2 columnas en PC */}
            <ul className="text-light list-unstyled text-center fs-5 m-0" style={{ columnCount: 'var(--bs-columns-apostoles, 2)', columnGap: '2rem' }}>
              <li>Santiago García</li><li>Branthony Uzcategui</li><li>José Eduardo Peña</li>
              <li>Jhon Meza</li><li>Arom Paredes</li><li>Ronald García</li>
              <li>Yendri Saabedra</li><li>Johan Romero</li><li>Sebastian Chacón</li>
              <li>Gerardo Dugarte</li><li>Geremy Dugarte</li><li>Gabriel Moreno</li>
            </ul>
          </div>

          {/* Cuerpo de Baile */}
          <div className="mb-5">
            <h5 className="text-warning text-uppercase fw-bold mb-3 text-center" style={groupTitleStyle}>Cuerpo de Baile</h5>
            {/* Usamos fs-5. Para que no se vea muy larga la lista, usamos 2 columnas en PC */}
            <ul className="text-light list-unstyled text-center fs-5 m-0" style={{ columnCount: 'var(--bs-columns-baile, 2)', columnGap: '2rem' }}>
              <li>Valentina Peña</li><li>Michel Izarra</li><li>Isabella Ducharme</li>
              <li>Marcela Rivas</li><li>Eva Luna Paredes</li><li>Maria Rangel</li>
              <li>Keily Jerez</li><li>Estefania La Cruz</li><li>Orliana Rangel</li>
              <li>Arom Paredes</li><li>Gabriel Moreno</li><li>Andryu Castillo</li>
              <li>Alejandro Fernández</li><li>Johan Romero</li><li>Ronald García</li>
              <li>Sebastian Chacón</li><li>Jhon Meza</li><li>Yendri Saabedra</li>
            </ul>
          </div>

          {/* Soldados Romanos */}
          <div className="mb-5">
            <h5 className="text-warning text-uppercase fw-bold mb-3 text-center" style={groupTitleStyle}>Soldados Romanos</h5>
            {/* Aumentado a fs-5 */}
            <p className="text-light text-center fs-5 m-0">
              Johan Romero • Jesus Ruiz • Santiago García • Gabriel Moreno
            </p>
          </div>

          {/* Elenco Infantil */}
          <div className="mb-5">
            <h5 className="text-warning text-uppercase fw-bold mb-3 text-center" style={groupTitleStyle}>Elenco Infantil</h5>
            <div className="bg-dark bg-opacity-50 p-4 rounded border border-secondary">
              {/* Usamos fs-5. Al ser tantos, usamos 2 columnas amplias en PC para mantener el tamaño grande */}
              <ul className="text-light list-unstyled text-center fs-5 m-0" style={{ columnCount: 'var(--bs-columns-infantil, 2)', columnGap: '2rem' }}>
                <li>Luzyanna Pino</li><li>Arianna Torres</li><li>Estefany Torres</li>
                <li>Hellen Guerrero</li><li>Lucía Arellano</li><li>Yosmary Peña</li>
                <li>Amarantha Rojas</li><li>Gabriela Espinoza</li><li>Gabriela Azuaje</li>
                <li>Mía Monserrat Dávila</li><li>Miranda Villarreal</li><li>Ainara Pereira</li>
                <li>Aitana Pereira</li><li>Camila Rodríguez</li><li>María Angely Márquez</li>
                <li>Mía Luzardo</li><li>Ivanna Uzcátegui</li><li>Ivanna Pirela</li>
                <li>Yeismar Angulo</li><li>Alaia Rivas</li><li>Luz Camila Dugarte</li>
                <li>Mariangel Dugarte</li><li>Wilmary Sánchez</li><li>Liah Bonilla</li>
                <li>María Victoria Uzcátegui</li><li>Nahomi Toro</li><li>Alis Peña</li>
                <li>Bethania Sánchez</li><li>Chiquinquirá Sánchez</li><li>Aleizmar Medina</li>
                <li>Jerandy Escalante</li>
              </ul>
            </div>
          </div>

          {/* Botones de Navegación */}
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
            <Button 
              variant="outline-light" 
              className="px-4 py-2"
              onClick={() => navigate('/credits')}
            >
              Anterior: Producción
            </Button>
            <Button 
              variant="warning" 
              className="px-4 py-2 fw-bold"
              style={{ boxShadow: '0 0 15px rgba(255, 193, 7, 0.4)' }}
              onClick={() => navigate('/cardescene')}
            >
              Ir a las Escenas
            </Button>
          </div>

        </Card.Body>
      </Card>
      
      {/* Pequeño hack CSS para manejar las columnas en responsive sin tocar el CSS global */}
      <style>{`
        @media (max-width: 767px) {
          .song-card ul {
            column-count: 1 !important;
          }
        }
        @media (min-width: 768px) {
          :root {
            --bs-columns-apostoles: 2;
            --bs-columns-baile: 2;
            --bs-columns-infantil: 2;
          }
        }
      `}</style>
    </Container>
  );
}