import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removeSingleProductAction } from "../store/actions/productsActions";

import { Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

const BackToShoppingButton = () => {
  const dispatch = useDispatch();

  const clearSingleProduct = (e) => {
    dispatch(removeSingleProductAction());
  };
  return (
    <Button
      variant="secondary"
      as={Link}
      to="/"
      onClick={clearSingleProduct}
      className="px-0"
    >
      <ArrowLeft /> Continiue shopping
    </Button>
  );
};

export default BackToShoppingButton;
