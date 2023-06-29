/** @format */

import React from "react";
import "./style.scss";

function Faq({ id, title, text, redLine }) {
  return (
    <div className='faq__answer-block' id={id}>
      <h3 className='faq__answer-title'>{title}</h3>
      <p className='faq__answer-subtitle'>{text}</p>
      <p>
        <b>{redLine}</b>
      </p>
    </div>
  );
}

export default Faq;
