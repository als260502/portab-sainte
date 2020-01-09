import React, { useState, useEffect } from "react";
import api from '../../services/api';

import Actions from '../../components/Actions'

export default function Delete({ history, match }) {
  const [id, setId] = useState('')
  const [codigo, setCodigo] = useState('')
  const [telefone, setTelefone] = useState('')
  const [alerta, setAlerta] = useState('')

  async function getFoneData() {
    const response = await api.get(`portabilidade/back/dashboard/find/${match.params.id}`);

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

  async function handleRemover(event) {
    event.preventDefault()
    const del = await api.delete(`/portabilidade/back/dashboard/delete/${id}`)
    const { msg } = del.data
    history.push('/portabilidade/app/dashboard', { msg })

  }

  const handleVoltar = () => {
    //event.preventDefault()
    history.push('/portabilidade/app/dashboard', {})
  }


  return (
    <>
      <h2>Remover este registro?</h2>

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
          action={handleRemover}
          voltar={handleVoltar}
          text='Remover' >
        </Actions>
      </form>
      <div className="alerta">{alerta}</div>
    </>
  );
}
