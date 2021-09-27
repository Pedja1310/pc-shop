import { Switch, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <main>
          <Container>
            <Route path="/login">
              <h1>Login</h1>
            </Route>
            <Route path="/signup">
              <h1>Signup</h1>
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Container>
        </main>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
