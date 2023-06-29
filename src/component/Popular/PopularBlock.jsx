/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { fetchCategories } from "../../redux/features/orderSlice";
import { Path } from "../../path";

const Block = ({ text, img, alt, link }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(link);
  const Click = () => {
    dispatch(fetchCategories(link));
    navigate(Path.filterStepOne);
  };
  return (
    <div onClick={Click} className='actual__block'>
      <img className='actual__img' src={img} alt={alt} />
      <p className='actual__title'>{text}</p>
    </div>
  );
};

export default Block;
