/** @format */

import React, { useState } from "react";
import InstargamBlack from "../../assets/img/instargamBlack.png";
import InstargamGreen from "../../assets/img/instargamGreen.png";
import Google from "../../assets/img/google.png";
import Appstore from "../../assets/img/appstore.png";
import Turkey from "../../assets/img/turkey.png";
import Kazahstan from "../../assets/img/kazahstan.png";
import Belarus from "../../assets/img/belarus.png";
import Logo from "../../assets/img/Logo.png";

import Arrow from "../../assets/img/Arrow-down.svg";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="footer">
        <div className="footer__logo">МАСТЕРА</div>
        <div className="footer__block">
          <div className="footer__list">
            <div className="footer__link footer__title">Новый заказ</div>
            <div className="footer__link">Все услуги</div>
            <div className="footer__link">Все отзывы</div>
            <div className="footer__link">История заказов</div>
            <div className="footer__link">Условия использования</div>
            <div className="footer__link">Каталог ссылок</div>
          </div>
          <div className="footer__list">
            <div className="footer__link footer__title">Работа в Стамбуле</div>
            <div className="footer__link">Вход для специалистов</div>
            <div className="footer__link">Партнёрская программа</div>
          </div>
          <div className="footer__list">
            <div className="footer__link footer__title">О компании</div>
            <div className="footer__link">Вход для специалистов</div>
            <div className="footer__link">Вакансии</div>
          </div>
          <div className="footer__list">
            <div className="footer__link footer__title">Режим работы</div>
            <div className="footer__link">
              <div className="footer__link-data">Будни: с 6 до 22</div>
              <div className="footer__link-data">Выходные: с 8 до 22</div>
            </div>
            <div className="footer__support">
              <div className="footer__link-data footer__title">
                Служба поддержки
              </div>
              <div className="footer__link-data">+7 666 666 66 66</div>
            </div>

            <div className="footer__sosial">
              <div className="footer__sosial-link">
                <img
                  className="footer__sosial-img"
                  src={InstargamBlack}
                  alt="Instagram"
                />
              </div>
              <div className="footer__sosial-link">
                <img
                  className="footer__sosial-img"
                  src={InstargamGreen}
                  alt="Instagram"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="footer__download">
          <img className="footer__download-link" src={Google} alt="google" />
          <img
            className="footer__download-link"
            src={Appstore}
            alt="appstore"
          />
        </div>

        <div className="footer__info">
          <div className="footer__info-title">
            <div className="footer__info-age">0+</div>
            <div className="footer__info-information">
              Информация, опубликованная на данном сайте, предназначена для
              любой аудитории, если иное не указано дополнительно в отношении
              отдельных материалов.
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
              <img
                className="footer__region-country--arrow"
                src={Arrow}
                alt=""
              />
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
