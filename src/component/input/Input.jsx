/** @format */

import React from "react";
import "../../scss/components/Input.scss";

function Input({ value, onChange }) {
  return (
    <input
      className='search__input'
      type='text'
      value={value}
      onChange={onChange}
      placeholder='Услуга или специалист'
    />
  );
}

export default Input;
