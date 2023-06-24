/** @format */

import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserName } from "../../redux/features/authSlice";
import { fetchUpdate } from "../../redux/features/clientAuth.slice";
import { useNavigate } from "react-router-dom";
import { Path } from "../../path";

export const RegistrationPages2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(fetchUserName({ token }));
    }
  }, [dispatch]);
  const userName = useSelector(
    (state) => state.auth.userName?.data?.telephone,
  );

  const register = async (e) => {
    e.preventDefault();
    console.log("hello");
    await dispatch(
      fetchUpdate({ telephone: userName, name, email }),
    );
    navigate(Path.home);
  };

  console.log(userName);
  return (
    <section className='registration'>
      <div className='registration__content'>
        <h3 className='registration__title'>
          Введите имя и почту
        </h3>
        <form>
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
            onClick={register}
          >
            Создать аккаунт
          </button>
        </form>
      </div>
    </section>
  );
};
