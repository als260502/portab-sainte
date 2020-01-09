import React from "react";

import "./Icons.css";

import DelIcon from "../assets/del.svg";

const Delete = () => {
  return (
    <span>
      <img src={DelIcon} alt="Del" />
    </span>
  );
};

export default Delete;