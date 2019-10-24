import React from "react";

import logo from "./assets/telefonia.png";

import "./App.css";

import Routes from "./routes";

function App() {
  return (
    <div className="container">
      <div className="upArea">
        <img src={logo} alt="Portab sainte" />
        <h1>Portab Sainte</h1>
      </div>
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
