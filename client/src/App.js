import { Provider } from "react-redux";

import { Switch, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductsPage from "./pages/ProductsPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import AdminPage from "./pages/AdminPage";
import UserProfilePage from "./pages/UserProfilePage";

import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Container as="main" className="my-4">
          <Switch>
            <Route path="/auth" component={AuthPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/profile" component={UserProfilePage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/create-product" component={CreateProductPage} />
            <Route path="/edit-product/:id" component={EditProductPage} />
            <Route path="/products/:id" component={ProductsPage} />
            <Route path="/admin" component={AdminPage} />
            <Route exact path="/" component={ProductsPage} />
          </Switch>
        </Container>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
