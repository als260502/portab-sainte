import React from "react";
import "./Icons.css";

import MailIcon from "../assets/email.svg";

const Mail = () => {
  return (
    <span>
      <img src={MailIcon} alt="Send" />
    </span>
  );
};

export default Mail;