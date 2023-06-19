import React from 'react';

import './style.scss';

import Plus from '../../assets/img/plus.png';
import Eyes from '../../assets/img/eyes.svg';

function CreateOrder() {
  return (
    <section className="createOrder">
      <h2 className="createOrder__title">Мои заказы</h2>
      <div className="createOrder__block">
        <div className="createOrder__item createOrder__create">
          <div className="createOrder__create"></div>
          <h3 className="createOrder__create-title">Создать заказ</h3>
          <img className="createOrder__create-plus" src={Plus} alt="" />
        </div>

        <article className="createOrder__item">
          <div className="createOrder__item-content">
            <p className="createOrder__item-name">
              Программисты <p className="createOrder__item-count cancel-visible">1</p>
            </p>
            <div className="createOrder__item-subtitle cancel ">
              Заказ отменён
              <div className="createOrder__item-visiting cancel-visible">
                <img className="createOrder__item-visiting--eyes" src={Eyes} />
                <p className="createOrder__item-visiting--count">0</p>
              </div>
            </div>
          </div>
          <div className="createOrder__item-data">15 июня 2023</div>
        </article>
        <article className="createOrder__item">
          <div className="createOrder__item-content">
            <p className="createOrder__item-name">
              Математика <p className="createOrder__item-count ">1</p>
            </p>
            <div className="createOrder__item-subtitle ">
              Заказ открыт для откликов
              <div className="createOrder__item-visiting ">
                <img className="createOrder__item-visiting--eyes" src={Eyes} />
                <p className="createOrder__item-visiting--count">0</p>
              </div>
            </div>
          </div>
        </article>
        <div className="createOrder__item-data">15 июня 2023</div>
        <article className="createOrder__item">
          <div className="createOrder__item-content">
            <p className="createOrder__item-name">
              Английский язык <p className="createOrder__item-count ">1</p>
            </p>
            <div className="createOrder__item-subtitle ">
              Заказ открыт для откликов
              <div className="createOrder__item-visiting ">
                <img className="createOrder__item-visiting--eyes" src={Eyes} />
                <p className="createOrder__item-visiting--count">0</p>
              </div>
            </div>
          </div>
          <div className="createOrder__item-data">15 июня 2023</div>
        </article>
      </div>
    </section>
  );
}

export default CreateOrder;
