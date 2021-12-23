import { Provider } from "react-redux";

import { Switch, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import CreateProductPage from "./pages/CreateProductPage";

import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Container as="main" className="my-4">
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/create-product" component={CreateProductPage} />
            <Route path="/products/:id" component={ProductPage} />
            <Route path="/" component={Products} />
          </Switch>
        </Container>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
