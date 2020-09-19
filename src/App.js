import React from "react";
import "./styles.css";

import Cep from "./components/Cep/index";
import Produtos from "./components/Produtos/index";

export default function App() {
  return (
    <div className="App">
      <Cep />
      <br />
      <br />
      <Produtos />
    </div>
  );
}
