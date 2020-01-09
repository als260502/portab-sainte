import React from "react";
import { Link } from "react-router-dom";
import { parseISO, format } from 'date-fns';


import Mail from "./Mail";
import Edit from "./Edit";
import Delete from "./Delete";

const Fones = ({ fones }) => {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Telefone</th>
            <th>Nº serviço</th>
            <th>Agendamento</th>
            <th>Gerenciar</th>
          </tr>
        </thead>
        <tbody>
          {fones.map(fone => (
            <tr key={fone.id} className={(fone.enviado === "1") ? "enviado" : ""}>
              <td>{fone.codigo}</td>
              <td>{fone.telefone}</td>
              <td>{fone.numero}</td>
              <td>{format(parseISO(`${fone.data} ${fone.hora}`), "dd/MM/yyyy HH:mm")}</td>
              <td>
                <Link to={`/portabilidade/app/mail/${fone.id}`}>
                  <Mail />
                </Link>
                <Link to={`/portabilidade/app/edit/${fone.id}`}>
                  <Edit />
                </Link>
                <Link to={`/portabilidade/app/delete/${fone.id}`}>
                  < Delete />
                </Link >
              </td >
            </tr >
          ))
          }
        </tbody >
      </table >
    </>
  )

}

export default Fones