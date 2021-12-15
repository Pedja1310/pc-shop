import { Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const BackToShoppingButton = () => {
  return (
    <Button variant="secondary" as={Link} to="/">
      <ArrowLeft /> Continiue shopping
    </Button>
  );
};

export default BackToShoppingButton;
