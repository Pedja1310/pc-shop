import { useEffect } from "react";
import { useState } from "react";
import { Button, Collapse, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import useWindowResize from "../hooks/useWindowResize";
import {
  getAllProductsAction,
  searchProductsAction,
} from "../store/actions/productsActions";
import SearchFormCheckBox from "./SearchFormCheckBox";

const ProductFilters = () => {
  const { width } = useWindowResize();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (width >= 992) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [width]);

  const handleBrandCheckChange = (e) => {
    if (brands.includes(e.target.name)) {
      setBrands(brands.filter((brand) => brand !== e.target.name));
    } else {
      setBrands([...brands, e.target.name]);
    }
  };

  const handleCategoryCheckChange = (e) => {
    if (categories.includes(e.target.name)) {
      setCategories(
        categories.filter((category) => category !== e.target.name)
      );
    } else {
      setCategories([...categories, e.target.name]);
    }
  };

  const clearForm = () => {
    setQuery("");
    setBrands([]);
    setCategories([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchQuery = {
      query: query.trim(),
      brands: brands.join(","),
      categories: categories.join(","),
    };

    if (Object.values(searchQuery).every((element) => element === "")) {
      dispatch(getAllProductsAction());
    } else {
      dispatch(searchProductsAction(searchQuery));
    }
  };

  return (
    <div className="mb-5">
      <Button
        onClick={() => setOpen((prevState) => !prevState)}
        className="w-100"
      >
        {`${open ? "Close" : "Open"} Search Filters`}
      </Button>
      <Collapse in={open}>
        <div>
          <Container className="p-0 d-flex flex-column">
            <Form className="d-flex flex-column" onSubmit={handleSubmit}>
              <Form.Group className="mt-3" controlId="formBasicEmail">
                <Form.Label>Search title</Form.Label>
                <Form.Control
                  type="search"
                  placeholder="Enter text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Form.Group>

              <h5 className="align-self-center mt-3">brands</h5>

              <Form.Group
                className="mt-2 d-flex flex-wrap flex-lg-column"
                controlId="formBasicCheckbox"
              >
                <SearchFormCheckBox
                  name="intel"
                  label="Intel"
                  group={brands}
                  type="checkbox"
                  handleCheckChange={handleBrandCheckChange}
                />
                <SearchFormCheckBox
                  name="amd"
                  label="AMD"
                  group={brands}
                  type="checkbox"
                  handleCheckChange={handleBrandCheckChange}
                />
                <SearchFormCheckBox
                  name="western digital"
                  label="Western Digital"
                  group={brands}
                  type="checkbox"
                  handleCheckChange={handleBrandCheckChange}
                />
                <SearchFormCheckBox
                  name="dareu"
                  label="DAREU"
                  group={brands}
                  type="checkbox"
                  handleCheckChange={handleBrandCheckChange}
                />
                <SearchFormCheckBox
                  name="corsair"
                  label="Corsair"
                  group={brands}
                  type="checkbox"
                  handleCheckChange={handleBrandCheckChange}
                />
                <SearchFormCheckBox
                  name="nvidia"
                  label="Nvidia"
                  group={brands}
                  type="checkbox"
                  handleCheckChange={handleBrandCheckChange}
                />
                <SearchFormCheckBox
                  name="crucial"
                  label="Crucial"
                  group={brands}
                  type="checkbox"
                  handleCheckChange={handleBrandCheckChange}
                />
              </Form.Group>

              <h5 className="align-self-center mt-3">categories</h5>

              <Form.Group
                className="mt-2 flex-lg-column d-flex flex-wrap"
                controlId="formBasicCheckbox"
              >
                <SearchFormCheckBox
                  name="cpu"
                  label="CPU"
                  type="checkbox"
                  group={categories}
                  handleCheckChange={handleCategoryCheckChange}
                />
                <SearchFormCheckBox
                  inline
                  name="gpu"
                  label="GPU"
                  type="checkbox"
                  group={categories}
                  handleCheckChange={handleCategoryCheckChange}
                />
                <SearchFormCheckBox
                  name="storage"
                  label="Storage"
                  type="checkbox"
                  group={categories}
                  handleCheckChange={handleCategoryCheckChange}
                />
                <SearchFormCheckBox
                  name="ram"
                  label="RAM"
                  type="checkbox"
                  group={categories}
                  handleCheckChange={handleCategoryCheckChange}
                />
                <SearchFormCheckBox
                  name="monitor"
                  label="Monitors"
                  type="checkbox"
                  group={categories}
                  handleCheckChange={handleCategoryCheckChange}
                />
                <SearchFormCheckBox
                  name="accessories"
                  label="Accessories"
                  type="checkbox"
                  group={categories}
                  handleCheckChange={handleCategoryCheckChange}
                />
                <SearchFormCheckBox
                  name="cooler"
                  label="Coolers"
                  type="checkbox"
                  group={categories}
                  handleCheckChange={handleCategoryCheckChange}
                />
                <SearchFormCheckBox
                  name="psu"
                  label="Power Supply Units"
                  type="checkbox"
                  group={categories}
                  handleCheckChange={handleCategoryCheckChange}
                />
              </Form.Group>
              <Button
                variant="danger"
                type="button"
                onClick={clearForm}
                className="mt-5"
              >
                Clear Form
              </Button>
              <Button variant="primary" type="submit" className="mt-3">
                Search
              </Button>
            </Form>
          </Container>
        </div>
      </Collapse>
    </div>
  );
};

export default ProductFilters;
