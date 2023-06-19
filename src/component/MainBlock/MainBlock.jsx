/** @format */

import React, { useState } from "react";

import "../../scss/components/MainBlock.scss";

import phone from "../../assets/img/iphone.png";

import { Hint } from "./Hint.jsx";
import Input from "../input/Input";
import Btn from "../Btn/Btn";

function MainBlock() {
  const [inputValue, setInputValue] = useState("");

  const handleBlockClick = (content) => {
    setInputValue(content);
  };
  return (
    <div className='main'>
      <div className='maincontent'>
        <h1 className='maintitle'>
          Дела исполняются с МАСТЕРАМИ
        </h1>
        <span className='mainsubtitle'>
          12 856 клиентов доверили дела мастерам
        </span>
        <div className='mainsearch'>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Btn text={"Найти"} />
        </div>
        <div className='mainhint'>
          <Hint
            content='Математика дистанционно'
            onClick={() =>
              handleBlockClick("Математика дистанционно")
            }
          />
          <Hint
            content='Копирайтер '
            onClick={() => handleBlockClick("Копирайтер ")}
          />
          <Hint
            content='Английский язык по скайпу'
            onClick={() =>
              handleBlockClick("Английский язык по скайпу")
            }
          />
        </div>
      </div>
      <div className='mainphohe'>
        <img className='mainimg' src={phone} alt='' />
        <div className='main__blur'></div>
      </div>
    </div>
  );
}

export default MainBlock;
