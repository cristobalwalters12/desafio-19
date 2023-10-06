import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "./components/Alert";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import { Container, Row, Col } from "react-bootstrap";
import { BaseColaboradores } from "./BaseColaboradores";

function App() {
  const [alert, setAlert] = useState({ message: "", variant: "" });
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState("");

  const mostrarError = (mensajeError) => {
    setAlert(mensajeError);
  };

  const handleSearch = (e) => {
    setBusqueda(e.target.value);
  };

  const colaboradoresFiltrados = colaboradores.filter((colaborador) =>
    colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Buscador onSearch={handleSearch} />
            <Listado datos={colaboradoresFiltrados} />
          </Col>
          <Col>
            <Formulario
              validacion={mostrarError}
              colaboradores={colaboradores}
              setColaboradores={setColaboradores}
            />
            <Alert variant={alert.variant} text={alert.message} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
