import React, { useState, useEffect } from "react";

import api from "../../services/api";

import Actions from '../../components/Actions'

export default function Edit({ match, history }) {
  const [id, setId] = useState('')
  const [telefone, setTelefone] = useState('')
  const [codigo, setCodigo] = useState('')
  const [numero, setNumero] = useState('')
  const [alerta, setAlerta] = useState("");
  const [data, setData] = useState('')
  const [hora, setHora] = useState('')


  useEffect(() => {
    async function getFoneData() {
      const response = await api.get(`/portabilidade/back/dashboard/find/${match.params.id}`);

      const { msg, state } = response.data

      if (state === 0) {
        setAlerta(msg)
        return
      }
      const { id, codigo, numero, telefone, data, hora } = response.data
      setId(id)
      setCodigo(codigo)
      setNumero(numero)
      setTelefone(telefone)
      setData(data)
      setHora(hora)

    }

    getFoneData();
  }, []);

  async function handleVoltar(event) {
    event.preventDefault()
    history.push('/portabilidade/app/dashboard', {})

  }

  async function handleSubmit(event) {
    event.preventDefault();

    setAlerta("");

    const response = await api.put("portabilidade/back/dashboard/update", { id, data, hora });

    const { msg, state } = response.data;

    if (state === 0) {
      setAlerta(msg);
      return;
    }

    setAlerta("Data de agendamento alterada com sucesso")
    history.push(`/portabilidade/app/dashboard`, { msg });
  }
  async function handleVoltar(event) {
    event.preventDefault()
    history.push('/portabilidade/app/dashboard', {})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="codigo">Codigo do cliente</label>
        <input
          value={codigo}
          type="number"
          name="codigo"
          id="codigo"
          disabled
        />
        <label htmlFor="telefone">Nº Telefone</label>
        <input
          value={telefone}
          type="number"
          name="telefone"
          id="telefone"
          disabled
        />

        <label htmlFor="numero">Nº Serviço</label>
        <input
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
        <Actions
          action={handleSubmit}
          voltar={handleVoltar}
          text='Alterar' >
        </Actions>
      </form>
      <div className="alerta">{alerta}</div>
    </>
  );
}
