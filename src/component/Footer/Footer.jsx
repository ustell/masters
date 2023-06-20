/** @format */

import React, { useState } from "react";
import Instagram from "../../assets/img/instagram.png";

import Google from "../../assets/img/google.png";
import Appstore from "../../assets/img/appstore.png";
import Turkey from "../../assets/img/turkey.png";
import Kazahstan from "../../assets/img/kazahstan.png";
import Belarus from "../../assets/img/belarus.png";
import Logo from "../../assets/img/МАСТЕРАА.svg";

import Arrow from "../../assets/img/Arrow-down.svg";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={Logo} alt="MASTERA" />
      </div>
      <div className="footer__block">
        <ul className="footer__list">
          <li className="footer__link footer__title">Новый заказ</li>
          <li className="footer__link">Все услуги</li>
          <li className="footer__link">Все отзывы</li>
          <li className="footer__link">История заказов</li>
          <li className="footer__link">Условия использования</li>
          <li className="footer__link">Каталог ссылок</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__link footer__title">Работа в Стамбуле</li>
          <li className="footer__link">Вход для специалистов</li>
          <li className="footer__link">Партнёрская программа</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__link footer__title">О компании</li>
          <li className="footer__link">Вход для специалистов</li>
          <li className="footer__link">Вакансии</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__link footer__title">Режим работы</li>
          <ul className="footer__olegneymeetvertat">
            <li className="footer__link-data">Будни: с 6 до 22</li>
            <li className="footer__link-data">Выходные: с 8 до 22</li>
          </ul>
          <ul className="footer__support">
            <li className="footer__link-data footer__title">
              Служба поддержки
            </li>
            <li className="footer__link-data">+7 666 666 66 66</li>
          </ul>

          <ul className="footer__sosial">
            <li className="footer__sosial-link">
              <img src={Instagram} alt="" />
            </li>
          </ul>
        </ul>
      </div>


      <div className='connection__download footer__download'>
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

      <div className="footer__info">
        <div className="footer__info-title">
          <div className="footer__info-age">0+</div>
          <div className="footer__info-information">
            Информация, опубликованная на данном сайте, предназначена для любой
            аудитории, если иное не указано дополнительно в отношении отдельных
            материалов.
          </div>
        </div>
        <div className="footer__region">
          <div className="footer__region-select">
            <div className="footer__region-select--item">
              <img
                className="footer__region-select--flag"
                src={Belarus}
                alt=""
              />
              <p className="footer__region-select--name">Беларусь</p>
            </div>
            <div className="footer__region-select--item">
              <img
                className="footer__region-select--flag"
                src={Kazahstan}
                alt=""
              />
              <p className="footer__region-select--name">Казахстан</p>
            </div>
          </div>
          <div className="footer__region-item">
            <img
              className="footer__region-flag--img"
              src={Turkey}
              alt="Turkey"
            />
            <div className="footer__region-country">Турция</div>
            <img className="footer__region-country--arrow" src={Arrow} alt="" />
          </div>
        </div>
      </div>

      <div className="footer__data">
        <div className="footer__data-quotation">©</div>
        <div className="footer__data-time">Mastera.com 2023-2023</div>
      </div>
    </footer>
  );
};
