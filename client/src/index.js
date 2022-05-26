import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import "./bootstrap.min.css";
import "./index.css";

const stripePromise = loadStripe(
  "pk_test_51E8AzvDX1UXWxMb3gAQGv4ckhE1GtqVgG2G5uaOR1A88cM2iLirYWkhUtIjeakPpPhyISxDPqrh2fV2eULliWRw900BQ0crS6D"
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
