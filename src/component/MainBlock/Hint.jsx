/** @format */

import React from "react";


export const Hint = ({ content, onClick }) => {
  return (
    <div className='orderFilling__hint-content'>
      <p
        className='orderFilling__hint-text'
        onClick={onClick}
      >
        {content}
      </p>
    </div>
  );
};
