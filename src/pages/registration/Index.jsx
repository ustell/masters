/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PhoneInput from "react-phone-number-input";
import {
  fetchRegister,
  fetchVerify,
} from "../../redux/features/clientAuth.slice";
import Google from "../../assets/img/google.svg";
import "./style.scss";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [telephone, setTelephone] = useState("");
  const dispatch = useDispatch();
  const [verificate, setVerificate] = useState("");
  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const registration = async (e) => {
    e.preventDefault();
    const data = await dispatch(
      fetchRegister({ telephone }),
    );

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
  
    const data = await dispatch(
      fetchVerify({
        confirmationCode: verificate,
        telephone: telephone,
      }),
    );

    if (!data.payload) {
      alert("Не удалось подтвердить регистрацию");
    } else {
      alert("Регистрация подтверждена");
      toggleMenu();
      window.localStorage.setItem(
        "token",
        data.payload.token,
      );
      navigate("/");
      return data;
    }
  };

  return (
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
            <p>
              Код отправлен на номер:
              <span>{telephone}</span>
            </p>
            <p onClick={toggleMenu}>Изменить номер</p>
            <form onSubmit={verify}>
              <input
                type='number'
                value={verificate}
                onChange={(e) =>
                  setVerificate(e.target.value)
                }
              />
              <button
                className='registration__login registration__btn'
                type='submit'
              >
                Продолжить
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

export default Registration;
