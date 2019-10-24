import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function Sheduler({ history }) {
  const [codigo, setCodigo] = useState("");
  const [numero, setNumero] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  useEffect(() => {
    setCodigo(localStorage.getItem("codigo"));
    setNumero(localStorage.getItem("numero"));
    setTelefone(localStorage.getItem("telefone"));
  }, []);

  async function HandleSubbmit(event) {
    event.preventDefault();

    const response = await api.post("/sheduler", {
      codigo,
      numero,
      telefone,
      data,
      hora
    });
    const { msg } = response.data;

    if (msg) {
      localStorage.setItem("msg", msg);
      history.push("/");
    }
  }

  return (
    <>
      <form onSubmit={HandleSubbmit}>
        <label htmlFor="codigo">Codigo do cliente</label>
        <input
          onChange={event => setCodigo(event.target.value)}
          value={codigo}
          type="number"
          name="codigo"
          id="codigo"
          disabled
        />
        <label htmlFor="telefone">Nº Telefone</label>
        <input
          onChange={event => setTelefone(event.target.value)}
          value={telefone}
          type="number"
          name="telefone"
          id="telefone"
          disabled
        />

        <label htmlFor="numero">Nº Serviço</label>
        <input
          onChange={event => setNumero(event.target.value)}
          value={numero}
          type="number"
          name="numero"
          id="numero"
          disabled
        />

        <label htmlFor="data">Data</label>
        <input
          onChange={event => setData(event.target.value)}
          type="date"
          name="data"
          id="data"
          required
          value={data}
        />

        <label htmlFor="hora">Hora</label>
        <input
          onChange={event => setHora(event.target.value)}
          type="time"
          name="hora"
          id="hora"
          required
          value={hora}
        />

        <button className="btn">Agendar</button>
      </form>
    </>
  );
}
