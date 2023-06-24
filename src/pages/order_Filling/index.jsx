/** @format */

import { React, useState } from "react";

import "./style.scss";

import { Hint } from "../../component/MainBlock/Hint";
import Input from "../../component/input/Input";
import { Footer } from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import { useDispatch } from "react-redux";
import { fetchOrder } from "../../redux/features/orderSlice";
import { useNavigate } from "react-router";
import { Path } from "../../path";
import arrowBlack from "../../assets/img/iconFilter/arrowBlack.png";
import arrowWhite from "../../assets/img/iconFilter/arrow.png";
import { AsideNav } from "../FilterPages/AsideNav";
import { Link } from "react-router-dom";

function OrderFilling() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const handleBlockClick = (content) => {
    localStorage.setItem("title", content);
    dispatch(fetchOrder({ content }));
    setError(false);
    setTimeout(() => {
      navigate(Path.aside);
    }, 1000);
  };

  const nextStep = () => {
    if (inputValue === "") {
      setError(true);
    } else {
      setError(false);
      navigate(Path.aside);
    }
  };
  return (
    <>
      <Header />
      <div className='conteiner__time'>
        <AsideNav />
        <section className='orderFilling  main__aside '>
          <div className='content'>
            <div className='orderFilling__content'>
              <div className='orderFilling__title'>
                <h2 className='orderFilling__title-title'>
                  Что нужно сделать?
                </h2>
              </div>
              <form className='orderFilling__form'>
                <Input
                  style='search__input create-inp'
                  value={inputValue}
                  onChange={(e) =>
                    setInputValue(e.target.value)
                  }
                />
                {error ? (
                  <p className='error'>Введите значение</p>
                ) : (
                  ""
                )}
              </form>
              <div className='orderFilling__example'>
                <p className='orderFilling__subtitle'>
                  Например:
                </p>
                <div className='hunts'>
                  <Hint
                    content='Программист'
                    onClick={() =>
                      handleBlockClick("Программист")
                    }
                  />
                  <Hint
                    content='Копирайтер'
                    onClick={() =>
                      handleBlockClick("Копирайтер")
                    }
                  />
                  <Hint
                    content='Английский язык по скайпу'
                    onClick={() =>
                      handleBlockClick(
                        "Английский язык по скайпу",
                      )
                    }
                  />
                  <Hint
                    content='Дизайнер'
                    onClick={() =>
                      handleBlockClick("Дизайнер")
                    }
                  />
                </div>
              </div>
              <div className='filter__Goback'>
                <Link
                  className='filter__Goback--link'
                  to={Path.home}
                >
                  <img src={arrowBlack} alt='arrow' />
                </Link>
                <button
                  onClick={nextStep}
                  className='filter__btn'
                >
                  Продолжить{" "}
                  <img src={arrowWhite} alt='arrow' />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OrderFilling;
