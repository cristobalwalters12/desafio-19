import Table from "react-bootstrap/Table";

function Listado({ dataFiltrada }) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {dataFiltrada.map((colaborador) => (
            <tr key={colaborador.id || colaborador.nombre}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Listado;
