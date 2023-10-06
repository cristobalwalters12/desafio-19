import React from "react";
import { FormControl } from "react-bootstrap";

function Buscador({ colaboradores, setFilteredData }) {
  const handleSearch = (e) => {
    const busqueda = e.target.value.toLowerCase();
    const colaboradoresFiltrados = colaboradores.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(busqueda) ||
        colaborador.correo.toLowerCase().includes(busqueda) ||
        colaborador.edad.toLowerCase().includes(busqueda) ||
        colaborador.cargo.toLowerCase().includes(busqueda) ||
        (colaborador.telefono &&
          colaborador.telefono.toLowerCase().includes(busqueda))
    );
    setFilteredData(colaboradoresFiltrados);
  };

  return (
    <FormControl
      type="text"
      placeholder="Buscar colaborador..."
      onChange={handleSearch}
      className="mb-4"
    />
  );
}

export default Buscador;
