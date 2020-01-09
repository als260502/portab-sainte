import React from 'react';
import './Actions.css'

const Actions = ({ action, voltar, text }) => {
  return (

    <div className='actionBtn'>
      <button className="btn" onClick={action}>{text}</button>
      <button className="btn" onClick={voltar}>Voltar</button>
    </div>

  )
};

export default Actions;
