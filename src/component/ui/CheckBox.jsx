/** @format */

import React, { useState } from "react";

import "../../scss/components/checkBox.scss";

export const CheckBox = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="block-checkbox">
      {" "}
      <label className='custom-checkbox'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className='checkmark'></span>
      </label>
      <p className='text'>{text}</p>
    </div>
  );
};
