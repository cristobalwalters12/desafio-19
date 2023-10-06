import React from "react";
import { FormControl } from "react-bootstrap";

function Buscador({ onSearch }) {
  return (
    <FormControl
      type="text"
      placeholder="Buscar colaborador..."
      onChange={onSearch}
      className="mb-4"
    />
  );
}

export default Buscador;
