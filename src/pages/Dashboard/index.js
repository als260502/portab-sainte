import React, { useEffect, useState } from "react";
import Buttons from "../Buttons";
import api from "../../services/api";

import Fones from '../../components/Fones'
import Pagination from '../../components/Pagination'

import "./Dashboard.css";

export default function Dashboard({ history }) {
  const [fones, setFones] = useState([]);
  const [alerta, setAlerta] = useState([]);
  const [page, setPage] = useState([])
  const [itensPerPage] = useState(10)
  const [totalPages, setTotalPages] = useState(0)

  const loadFones = async () => {

    const { state } = history.location
    if (state) setAlerta(state.msg)
    try {
      const response = await api.get(`portabilidade/back/sheduler/${page}`, {
        headers: {
          page,
          itensPerPage
        }
      });
      //console.log(response.data)

      if (response) {
        setFones(response.data.result);
        setTotalPages(response.data.totalPage)
      }

    } catch (error) {
      console.error("nenhum item cadastrado ou nao foi possivel conectar a base de dados")
      console.log(error)
    }

  }

  useEffect(() => {
    loadFones()
  }, [page]);

  const paginate = (pageNumber) => {
    setPage(pageNumber)
  }

  return (
    <>
      <Buttons />
      <div className='alerta'>{alerta}</div>
      <div className="main-container">
        <Fones fones={fones} />

        <Pagination
          totalPages={totalPages}
          itensPerPage={itensPerPage}
          paginate={paginate}
        />

      </div >

    </>
  );
}
