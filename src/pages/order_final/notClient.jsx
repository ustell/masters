/** @format */

import arrowBlack from "../../assets/img/iconFilter/arrowBlack.png";
import arrowWhite from "../../assets/img/iconFilter/arrow.png";
import { Link } from "react-router-dom";
import { Path } from "../../path";
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

      window.localStorage.setItem(
        "token",
        data.payload.token,
      );
      if (data.payload.status) {
        navigate(Path.finalRegister);
      } else {
        navigate(Path.finalStep);
        window.location.reload();
      }

      return data;
    }
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
              </form>
            </>
          )}
        </div>
      </>

      <div className='filter__Goback'>
        <Link
          className='filter__Goback--link'
          to={Path.aside}
        >
          <img src={arrowBlack} alt='arrow' />
        </Link>
        <button
          onClick={open ? registration : verify}
          className='filter__btn'
        >
          Продолжить <img src={arrowWhite} alt='arrow' />
        </button>
      </div>
    </div>
  );
};
