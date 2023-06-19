/** @format */

import React from "react";
import "../../scss/components/Popular.scss";

const Block = ({ text, img, alt }) => {
  return (
    <div className='actual__block'>
      <img className='actual__img' src={img} alt={alt} />
      <p className='actual__title'>{text}</p>
    </div>
  );
};

export default Block;
