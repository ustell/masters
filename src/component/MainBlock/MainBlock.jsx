/** @format */

import React, { useState } from "react";


import phone from "../../assets/img/image mobile.svg";

import { Hint } from "./Hint.jsx";
import Input from "../input/Input";
import Btn from "../Btn/Btn";

function MainBlock() {
  const [inputValue, setInputValue] = useState("");

  const handleBlockClick = (content) => {
    setInputValue(content);
  };
  return (
    <main className='main'>
      <div className='main__content'>

        <h1 className='maintitle'>
          Дела исполняются с МАСТЕРАМИ
        </h1>
        <div className="main__subtitle">
        <span className='mainsubtitle'>
          12 856 клиентов доверили дела мастерам
        </span>
        </div>
        <div className='mainsearch'>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Btn text={"Найти"} />
        </div>
        <div className='mainhint'>
          <Hint
            content='Программист'
            onClick={() =>
              handleBlockClick("Программист")
            }
          />
          <Hint
            content='Копирайтер'
            onClick={() => handleBlockClick("Копирайтер")}
          />
          <Hint
            content='Английский язык'
            onClick={() =>
              handleBlockClick("Английский язык")
            }
          />
        </div>
      </div>
      <div className='main__phohe'>
        <img className='main__img' src={phone} alt='iphone' />
        <div className='main__blur'></div>
      </div>
    </main>
  );
}

export default MainBlock;
