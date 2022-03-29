import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"; // para garantir que todos as vezes sera imortado

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
