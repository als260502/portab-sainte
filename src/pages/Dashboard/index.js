import React, { useEffect, useState } from "react";
import Buttons from "../Buttons";
import api from "../../services/api";

import {parseISO, format} from 'date-fns'

import "./Dashboard.css";

export default function Dashboard() {
  const [fones, setFones] = useState([]);
  useEffect(() => {
    async function loadFones() {
      const response = await api.get("/sheduler");

      setFones(response.data);
    }
    loadFones();
  }, [fones]);

  return (
    <>
      <Buttons />
      <div className="main-container">
        <ul>
          <li>
            <span>Cliente</span> <span>Telefone</span> <span>Numero</span>
            <span>Data</span>
          </li>
          {fones.map(fone => (
            <li key={fone.id}>
              <button className="btn-li">{fone.codigo}</button>
              <button className="btn-li">{fone.telefone}</button>
              <button className="btn-li">{fone.numero}</button>
              <button className="btn-li">{
                format(parseISO(`${fone.data} ${fone.hora}`), "dd/m/y HH:mm")
                }</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
