import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removeSingleProductAction } from "../store/actions/productsActions";

import { BiArrowBack } from "react-icons/bi";
import { Button } from "react-bootstrap";

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
      <BiArrowBack className="me-2" />
      Continiue shopping
    </Button>
  );
};

export default BackToShoppingButton;
