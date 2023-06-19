/** @format */

import React from "react";

import "./style.scss";

import Google from "../../assets/img/google.svg";

function ActiveOrders() {
  return (
    <section className='activeOrders'>
      <h3 className='activeOrders__title'>Мои заказы</h3>
      <div className='activeOrders__block'>
        <div className='activeOrders__item'>
          <div className='activeOrders__item-group'>
            <h3 className='activeOrders__item-title'>
              Заказы
            </h3>
          </div>
          <div className='activeOrders__item-group'>
            <p className='activeOrders__item-order'>
              У вас сейчас нет заказов
            </p>
          </div>
          <div className='activeOrders__item-group'>
            <button className='activeOrders__btn'>
              <a href='/' className='activeOrders__link'>
                <img
                  className='activeOrders__link-icon'
                  src={Google}
                  alt=''
                />
                <p className='activeOrders__link-text'>
                  Вход через Google
                </p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActiveOrders;
