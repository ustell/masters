/** @format */

import React from "react";

import "../../scss/components/MainBlock.scss";

import phone from "../../assets/img/iphone.png";

import Hint from "./Hint";
import Input from "../input/Input";
import Btn from "../Btn/Btn";

function MainBlock() {
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
            placeholder={"Услуга или специалист"}
            type={"text"}
          />
          <Btn text={"Найти"} />
        </div>
        <div className='mainhint'>
          <div className='mainhint-title'>
            Математика дистанционно
          </div>
          <div className='mainhint-title'>Копирайтер</div>
          <div className='mainhint-title'>
            Английский язык по скайпу
          </div>
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
