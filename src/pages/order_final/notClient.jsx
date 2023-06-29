/** @format */

import arrowBlack from "../../assets/img/iconFilter/arrowBlack.png";
import arrowWhite from "../../assets/img/iconFilter/arrow.png";
import { Link } from "react-router-dom";
import { Path } from "../../path";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import PhoneInput from "react-phone-number-input";
import Google from "../../assets/img/google.svg";
import "./style.scss";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/features/authSlice";

export const NotClient = () => {
  const [remainingTime, setRemainingTime] =
    React.useState(60);
  const [isCounterActive, setIsCounterActive] =
    React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          setIsCounterActive(false);
          clearInterval(interval);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedTime = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const dispatch = useDispatch();
  const [verificate, setVerificate] = useState("");
  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const registrationTelephone = async (e) => {
    e.preventDefault();
    toggleMenu();
    // логика для обработки регистрации пользователя
  };
  const navigate = useNavigate();
  const data = {};

  const userData = {
    telephone,
    name,
    email,
  };
  const register = async (e) => {
    e.preventDefault();
    await dispatch(registerUser(userData));
    localStorage.setItem(
      "telephone",
      telephone.startsWith("+")
        ? telephone.slice(1) //
        : telephone,
    );
    window.location.reload();
    try {
    } catch (error) {

      alert("не зарегестрировались");
    }

    //Логика для обработки создания аккаунта
  };
  return (
    <div className='orderCreateProfile'>
      <h2 className='orderCreateProfile__title'>
        Заказ почти создан
      </h2>

      <>
        <div className='registration__content register-top'>
          {open ? (
            <>
              <h3 className='registration__title'>
                Вход и регистрация
              </h3>
              <form
                onSubmit={registrationTelephone}
                className='registration__form'
              >
                <div className='registration__group'>
                  <PhoneInput
                    defaultCountry='TR'
                    international
                    withCountryCallingCode
                    className='registration__inp'
                    value={telephone}
                    onChange={setTelephone}
                  />
                </div>
                <div className='registration__group'>
                  <p className='registration__subtitle'>
                    Специалисты не видят ваш номер. Вы сами
                    решаете, кому он будет доступен.
                  </p>
                </div>
                <div className='registration__group registration__button'>
                  <button
                    className='registration__login registration__btn'
                    type='submit'
                  >
                    Продолжить
                  </button>
                  <button className='registration__google registration__btn'>
                    <a
                      className='registration__link registration__link-google'
                      href='/'
                    >
                      <span className='registration__btn-logotip'>
                        <img
                          src={Google}
                          className='registration__btn-img'
                          alt=''
                        />
                      </span>
                      Вход через Google
                    </a>
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              {" "}
              <h3 className='registration__title'>
                Введите имя и почту
              </h3>
              <form onSubmit={register}>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='registration__input__sms registration__input__sms--name'
                  placeholder='Ваше имя'
                />
                <input
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='registration__input__sms'
                  placeholder='Вашу почту'
                />
                <button
                  className='registration__login registration__btn'
                  type='submit'
                >
                  Создать аккаунт
                </button>
              </form>
            </>
          )}
        </div>
      </>
    </div>
  );
};
