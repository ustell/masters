import React from 'react';
import '../../scss/components/Input.scss';

function Input({placeholder,type}) {
  return (
    <input
      className="search__input"
      type={type}
      name=""
      id=""
      placeholder={placeholder}
    />
  );
}

export default Input;
