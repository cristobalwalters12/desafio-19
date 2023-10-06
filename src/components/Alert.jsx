import { Alert as BootstrapAlert } from "react-bootstrap";

function Alert({ variant, text }) {
  return (
    <div className="mt-3">
      <BootstrapAlert variant={variant}>{text}</BootstrapAlert>
    </div>
  );
}
export default Alert;
