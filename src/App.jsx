import React, { useState, useEffect } from "react";
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
  const [filteredData, setFilteredData] = useState(colaboradores);

  useEffect(() => {
    setFilteredData(colaboradores);
  }, [colaboradores]);

  const mostrarError = (mensajeError) => {
    setAlert(mensajeError);
  };

  return (
    <>
      <Container>
        <Row>
          <h1 className="my-4">
            <i className="fa-solid fa-user-group"></i> Lista de Colaboradores
          </h1>
          <Buscador
            colaboradores={colaboradores}
            setFilteredData={setFilteredData}
          />
          <Col>
            <Listado dataFiltrada={filteredData} />
          </Col>
          <Col>
            <h2 className="text-center">Agregar colaborador</h2>
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
