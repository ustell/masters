/** @format */

import React from "react";
import Turkey from "../../assets/img/turkey.png";
import arrowBlack from "../../assets/img/iconFilter/arrowBlack.png";
import arrowWhite from "../../assets/img/iconFilter/arrow.png";
import { Link } from "react-router-dom";

export const NotClient = () => {
  return (
    <div className='orderCreateProfile'>
      <h2 className='orderCreateProfile__title'>
        Заказ почти создан
      </h2>

      <form className='orderCreateProfile__form' action=''>
        <img
          className='orderCreateProfile__flag'
          src={Turkey}
          alt=''
        />
        <input
          className='orderCreateProfile__input'
          type='tel'
          placeholder='+90 700-227-78-39'
          name=''
          id=''
        />
      </form>

      <p className='orderCreateProfile__subtitle'>
        Зарегистрируйся чтоб создать аккаунт
      </p>

      <div className='filter__Goback'>
        <Link className='filter__Goback--link' href='#'>
          <img src={arrowBlack} alt='arrow' />
        </Link>
        <button className='filter__btn'>
          Продолжить <img src={arrowWhite} alt='arrow' />
        </button>
      </div>
    </div>
  );
};
