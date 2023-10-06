import { useState } from "react";
import { Form, Button } from "react-bootstrap";
function Formulario({ validacion, colaboradores, setColaboradores }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      email === "" ||
      edad === "" ||
      cargo === "" ||
      telefono === ""
    ) {
      validacion({
        variant: "danger",
        message: "Todos los campos son obligatorios!",
      });
    } else if (!/^[^\s@]+@[^\s@]+(\.com|\.cl)$/.test(email)) {
      validacion({
        variant: "warning",
        message:
          "Por favor, introduce un correo electrónico válido que termine en .com o .cl",
      });
    } else {
      const nuevoColaborador = {
        id: Math.random(),
        nombre,
        correo: email,
        edad,
        cargo,
        telefono,
      };
      setColaboradores([...colaboradores, nuevoColaborador]);
      setNombre("");
      setEmail("");
      setEdad("");
      setCargo("");
      setTelefono("");
      validacion({
        variant: "success",
        message: "Colaborador Agregado!",
      });
    }
  };

  return (
    <>
      <Form onSubmit={submitForm}>
        <Form.Group controlId="formGroup">
          <div className="pb-4">
            <Form.Control
              type="text"
              placeholder="Nombre de colaborador"
              name="campo1"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>
          <div className="pb-4">
            <Form.Control
              type="email"
              placeholder="Email de colaborador"
              name="campo2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="pb-4">
            <Form.Control
              type="text"
              placeholder="Edad del colaborador"
              name="campo3"
              onChange={(e) => setEdad(e.target.value)}
              value={edad}
            />
          </div>
          <div className="pb-4">
            <Form.Control
              type="text"
              placeholder="Cargo del Colaborador"
              name="campo4"
              onChange={(e) => setCargo(e.target.value)}
              value={cargo}
            />
          </div>
          <div className="pb-4">
            <Form.Control
              type="text"
              placeholder="Telefono del Colaborador"
              name="campo5"
              onChange={(e) => setTelefono(e.target.value)}
              value={telefono}
            />
          </div>

          <Button variant="primary" type="submit" className="w-100">
            Agregar Colaborador
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
export default Formulario;
