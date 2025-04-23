import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import "@theme-toggles/react/css/Around.css";
import "@theme-toggles/react/css/Within.css";
import "@theme-toggles/react/css/InnerMoon.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
