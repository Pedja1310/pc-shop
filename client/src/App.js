import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductsPage from "./pages/ProductsPage";
import CreateProductPage from "./pages/CreateProductPage";
import SingleProductPage from "./pages/SingleProductPage";
import EditProductPage from "./pages/EditProductPage";
import AdminPage from "./pages/AdminPage";
import UserProfilePage from "./pages/UserProfilePage";
import OrderPage from "./pages/OrderPage";

import store from "./store";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProductsTable from "./components/ProductsTable";
import UsersTable from "./components/UsersTable";
import OrdersTable from "./components/OrdersTable";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Container as="main" className="my-4">
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/profile" element={<UserProfilePage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/orders/:id" element={<OrderPage />} />
              <Route path="/create-product" element={<CreateProductPage />} />
              <Route path="/edit-product/:id" element={<EditProductPage />} />
              <Route path="/admin/*" element={<AdminPage />}>
                {/* <Route path={"products"} element={<ProductsTable />} />
                <Route path={"users"} element={<UsersTable />} />
                <Route path={"orders"} element={<OrdersTable />} /> */}
              </Route>
              <Route path="/checkout" element={<CheckoutPage />} />
            </Route>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/products/:id" element={<SingleProductPage />} />
            <Route exact path="/" element={<ProductsPage />} />
          </Routes>
        </Container>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
