/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-number-input";

import Google from "../../assets/img/google.svg";
import "./style.scss";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header/Header";
import { Footer } from "../../component/Footer/Footer";
import { Path } from "../../path";

function Registration() {
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
  const [telephone, setTelephone] = useState("");
  const dispatch = useDispatch();
  const [verificate, setVerificate] = useState("");
  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const registration = async (e) => {
    e.preventDefault();
    const data = 1;

    if (!data.payload) {
      alert("Не удалось зарегистрироваться");
    } else {
      alert("Сообщение отправлено");
      toggleMenu();
    }
  };
  const navigate = useNavigate();
  const verify = async (e) => {
    e.preventDefault();

    const data = await dispatch();

    if (!data.payload) {
      alert("Не удалось подтвердить регистрацию");
    } else {
      alert("Регистрация подтверждена");
      toggleMenu();
      window.localStorage.setItem(
        "token",
        data.payload.token,
      );
      if (data.payload.status) {
        navigate(Path.finalRegister);
      } else {
        navigate(Path.home);
      }

      return data;
    }
  };

  return (
    <>
      <Header />
      <section className='registration'>
        <div className='registration__content'>
          {open ? (
            <>
              <h3 className='registration__title'>
                Вход и регистрация
              </h3>
              <form
                onSubmit={registration}
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
              <h3 className='registration__title'>
                Вход и регистрация
              </h3>
              <div className='registration__block'>
                <p className='len'>
                  Код отправлен на номер:
                  <span className='len'>{telephone}</span>
                </p>
                <p
                  className='registration__block--izmenit len'
                  onClick={toggleMenu}
                >
                  Изменить номер
                </p>
              </div>
              <form onSubmit={""}>
                <input
                  type='number'
                  value={verificate}
                  onChange={(e) =>
                    setVerificate(e.target.value)
                  }
                  className='registration__input__sms'
                  placeholder='Код из СМС'
                />
                <button
                  className='registration__login registration__btn'
                  type='submit'
                  onClick={verify}
                >
                  Продолжить
                </button>
                <p className='registration__cap'>
                  при входе вы подтверждаете
                  <a
                    className='registration__cap--link'
                    href='#'
                  >
                    <p>условия сервиса</p>
                  </a>
                </p>
                <p className='registration__cap'>
                  Отправить повторное СМС через{" "}
                  <data>{formattedTime}</data>
                </p>
              </form>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Registration;
