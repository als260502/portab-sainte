import React from "react";
import './Pagination.css'


const Pagination = ({ totalPages, itensPerPage, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= totalPages; i++)
    pageNumbers.push(i)

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className='pageItem'>
            <button onClick={() => paginate(number)} className="pageLink">{number}</button>
          </li>
        ))}
      </ul>

    </nav >
  )

}

export default Pagination