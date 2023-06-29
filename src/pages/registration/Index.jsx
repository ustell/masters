/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";

import Google from "../../assets/img/google.svg";
import "./style.scss";
// import "react-phone-number-input/style.css";
import "react-phone-input-2/lib/style.css";
import { Layout } from "../../layout/Layout";
import { registerUser } from "../../redux/features/authSlice";
import { Path } from "../../path";

function Registration() {
  const [remainingTime, setRemainingTime] =
    React.useState(60);
  const [isCounterActive, setIsCounterActive] =
    React.useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [error, setError] = useState(false);

  const [open, setOpen] = useState(true);

  const navigate = useNavigate();

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

  const toggleMenu = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();

  const registrationTelephone = async (e) => {
    e.preventDefault();
    if (telephone.length < 10) {
      setError(true);
    } else {
      toggleMenu();
      setError(false);
    }

    // логика для обработки регистрации пользователя
  };
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
    navigate(Path.home);
    try {
    } catch (error) {
      alert("не зарегестрировались");
    }

    //Логика для обработки создания аккаунта
  };

  //   <PhoneInput
  //   defaultCountry='TR'
  //   international
  //   withCountryCallingCode
  //   className='registration__inp'
  //   value={telephone}
  //   onChange={setTelephone}
  //   limitMaxLength='20'
  // />
  return (
    <Layout>
      <section className='registration'>
        <div className='registration__content'>
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
                    country={"tr"}
                    value={telephone}
                    onChange={setTelephone}
                    className='phone-input'
                    inputProps={{
                      minLength: 10,
                    }}
                  />
                </div>
                {error && <p className="error">введите номер полностью</p>}
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
      </section>
    </Layout>
  );
}

export default Registration;
