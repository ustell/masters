/** @format */

import React from "react";

import Phone from "../../assets/img/Masters.svg";
import Google from "../../assets/img/google.png";
import Appstore from "../../assets/img/appstore.png";


function Connection() {
  return (
    <section className='connection'>
      <div className='connection__block'>
        <div className='connection__phone'>
          <img
            className='connection__img'
            src={Phone}
            alt=''
          />
        </div>
        <div className='connection__content'>
          <div className="connection__title__end">
          <h2 className='connection__title'>
            Все <span>мастера</span> в
          </h2>
          <h2 className='connection__title'>
              одном приложении
          </h2>
          </div>

          <span className='connection__subtitle'>
            Установите по ссылке из СМС
          </span>
          <div className='connection__feedback'>
            <input
              className='connection__feedback-inp'
              placeholder='+7 123-456-78-90'
              type='tel'
              name=''
              id=''
            />
            <button className='connection__feedback-btn'>
              Получить ссылку
            </button>
          </div>
          <div className='connection__download'>
            <img
              className='connection__download-link'
              src={Google}
              alt=''
            />
            <img
              className='connection__download-link'
              src={Appstore}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connection;
