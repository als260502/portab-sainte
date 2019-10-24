import React, { useState, useEffect } from "react";
import api from "../../services/api";

import Buttons from "../Buttons";

export default function Enter({ history }) {
  const [telefone, setTelefone] = useState("");
  const [alerta, setAlerta] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setAlerta("");

    const response = await api.post("/telefone", { telefone });

    const { error } = response.data;

    if (error) {
      setAlerta(error);
      return;
    }

    //console.log(history);

    const { codcliente, numero, sip_username } = response.data;

    localStorage.setItem("codigo", codcliente);
    localStorage.setItem("numero", numero);
    localStorage.setItem("telefone", sip_username);

    localStorage.removeItem("msg");
    history.push("/sheduler");
  }

  useEffect(() => {
    if (localStorage.getItem("msg")) {
      setAlerta(localStorage.getItem("msg"));
    }
  }, []);

  return (
    <>
      <Buttons />
      <form onSubmit={handleSubmit}>
        <label htmlFor="telefone">Nº do telefone</label>
        <input
          type="number"
          name="telefone"
          id="telefone"
          placeholder="2128280010"
          value={telefone}
          onChange={event => setTelefone(event.target.value)}
        />
        <button className="btn" type="submit">
          Buscar
        </button>
      </form>
      <div className="alerta">{alerta}</div>
    </>
  );
}
