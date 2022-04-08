import React from "react";
import ReactDOM from "react-dom";

// Estilos
import "./global.css";
import App from "./App";

// páginas de componentes
import Home from "./componets/paginas/Home";
import Sobre from "./componets/paginas/Sobre"

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Sobre />
  </React.StrictMode>,
  document.getElementById("root")
);
