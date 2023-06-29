/** @format */

import React, { useState } from "react";

import phone from "../../assets/img/image mobile.svg";

import { Hint } from "./Hint.jsx";
import Input from "../input/Input";
import Btn from "../Btn/Btn";
import { useNavigate } from "react-router";
import { Path } from "../../path";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/features/orderSlice";

function MainBlock() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const handleBlockClick = (content) => {
    setInputValue(content);
    dispatch(fetchCategories(content));
    setTimeout(() => {
      // Перенаправление пользователя через React Router
      navigate(Path.filterStepOne);
    }, 1000);
  };

  const [count, setCount] = useState(0);
  const targetCount = 12856;
  const duration = 2000; // Время анимации в миллисекундах
  const step = (targetCount / duration) * 10; // Шаг увеличения значения счетчика

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (count < targetCount) {
        setCount((prevCount) => prevCount + step);
      } else {
        setCount(targetCount); // Устанавливаем конечное значение счетчика
        clearInterval(interval); // Останавливаем интервал после достижения конечного значения
      }
    }, 10); // Интервал установлен на 10 миллисекунд для более плавной анимации

    return () => clearInterval(interval);
  }, [count, targetCount]);

  const formattedCount = Math.floor(count).toLocaleString();

  return (
    <>
      <Header />
      <main className='main'>
        <div className='main__content'>
          <h1 className='maintitle'>
            Дела исполняются с МАСТЕРАМИ
          </h1>
          <div className='main__subtitle'>
            <span className='mainsubtitle'>
              {formattedCount} клиентов доверили дела
              мастерам
            </span>
          </div>
          <div className='mainsearch'>
            <Input
              inputValue={inputValue}
              value={inputValue}
              onChange={(e) =>
                setInputValue(e.target.value)
              }
            />
            <Btn text={"Найти"} />
          </div>
          <div className='mainhint'>
            <Hint
              content='Мастера по ремонту'
              onClick={() =>
                handleBlockClick("Мастера по ремонту")
              }
            />
            <Hint
              content='Репетиторы'
              onClick={() => handleBlockClick("Репетиторы")}
            />
            <Hint
              content='Фрилансеры'
              onClick={() => handleBlockClick("Фрилансеры")}
            />
          </div>
        </div>
        <div className='main__phohe'>
          <img
            className='main__img'
            src={phone}
            alt='iphone'
          />
          <div className='main__blur'></div>
        </div>
      </main>
    </>
  );
}

export default MainBlock;
