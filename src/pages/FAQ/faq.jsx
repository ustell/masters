/** @format */

import React from "react";
import "./style.scss";

function Faq({ id, title, text, redLine }) {
  return (
    <article className='faq__answer-block' id={id}>
      <h3 className='faq__answer-title'>{title}</h3>
      <p className='faq__answer-subtitle'>{text}</p>
      <p>
        <b>{redLine}</b>
      </p>
    </article>
  );
}

export default Faq;
