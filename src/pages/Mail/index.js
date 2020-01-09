import React, { useState, useEffect } from "react";
import api from '../../services/api';

import Actions from '../../components/Actions'

export default function Mail({ history, match }) {
  const [id, setId] = useState('')
  const [codigo, setCodigo] = useState('')
  const [telefone, setTelefone] = useState('')
  const [alerta, setAlerta] = useState('')

  async function getFoneData() {
    const response = await api.get(`/portabilidade/back/dashboard/find/${match.params.id}`);

    let { msg, state } = response.data

    if (state === 0) {
      setAlerta(msg)
      return
    }

    const { id, codigo, telefone } = response.data
    setId(id)
    setCodigo(codigo)
    setTelefone(telefone)

  }

  useEffect(() => {
    getFoneData();
  })

  function handleSubmit(event) {
    event.preventDefault()
  }

  async function handleSendMail(event) {
    event.preventDefault()
    const mail = await api.post(`/portabilidade/back/dashboard/mail/${id}`, {
      id
    })
    const { msg } = mail.data
    history.push('/portabilidade/app/dashboard', { msg })

  }
  async function handleVoltar(event) {
    event.preventDefault()
    history.push('/portabilidade/app/dashboard')

  }

  return (
    <>
      <h2>Enviar email de portabilidade sainte</h2>

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
        <Actions
          action={handleSendMail}
          voltar={handleVoltar}
          text='Enviar' >
        </Actions>

      </form>
      <div className="alerta">{alerta}</div>
    </>
  );
}
