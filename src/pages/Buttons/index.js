import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";

const Buttons = () => {
  return (
    <div className="botoes">
      <Link to="/portabilidade/app">
        <button>Agendar</button>
      </Link>
      <Link to="/portabilidade/app/dashboard">
        <button>Listar</button>
      </Link>
    </div>
  );
};

export default Buttons;
