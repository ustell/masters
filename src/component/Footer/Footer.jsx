/** @format */

import React, { useState } from "react";

import "../../scss/components/footer.scss";

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
    <footer className='footer'>
      <div className='container'>
        <div className='footer__logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='footer__block'>
          <div className='footer__list'>
            <div className='footer__link footertitle'>
              Новый заказ
            </div>
            <div className='footer__link'>Все услуги</div>
            <div className='footer__link'>Все отзывы</div>
            <div className='footer__link'>
              История заказов
            </div>
            <div className='footer__link'>
              Условия использования
            </div>
            <div className='footer__link'>
              Каталог ссылок
            </div>
          </div>
          <div className='footer__list'>
            <div className='footer__link footertitle'>
              Работа в Стамбуле
            </div>
            <div className='footer__link'>
              Вход для специалистов
            </div>
            <div className='footer__link'>
              Партнёрская программа
            </div>
          </div>
          <div className='footer__list'>
            <div className='footer__link footertitle'>
              О компании
            </div>
            <div className='footer__link'>
              Вход для специалистов
            </div>
            <div className='footer__link'>Вакансии</div>
          </div>
          <div className='footer__list'>
            <div className='footerlink footertitle'>
              Режим работы
            </div>
            <div className='footer__link'>
              <div className='footer__ link-data'>
                Будни: с 6 до 22
              </div>
              <div className='footer__link-data'>
                Выходные: с 8 до 22
              </div>
            </div>
            <div className='footer__support'>
              <div className='footerlink-data footertitle'>
                Служба поддержки
              </div>
              <div className='footer__link-data'>
                +7 666 666 66 66
              </div>
            </div>

            <div className='footer__sosial'>
              <div className='footer__sosial-link'>
                <img
                  className='footer__sosial-img'
                  src={InstargamBlack}
                  alt='Instagram'
                />
              </div>
              <div className='footer__sosial-link'>
                <img
                  className='footer__sosial-img'
                  src={InstargamGreen}
                  alt='Instagram'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='footer__download'>
          <img
            className='footer__download-link'
            src={Google}
            alt='google'
          />
          <img
            className='footer__download-link'
            src={Appstore}
            alt='appstore'
          />
        </div>

        <div className='footer__info'>
          <div className='footer__info-title'>
            <div className='footer__info-age'>0+</div>
            <div className='footer__info-information'>
              Информация, опубликованная на данном сайте,
              предназначена для любой аудитории, если иное
              не указано <br /> дополнительно в отношении
              отдельных материалов.
            </div>
          </div>

          <div className='footer__region'>
            {isOpen && (
              <div className='footer__region-select'>
                <div className='footer__region-select--item'>
                  <img
                    className='footer__region-select--flag'
                    src={Belarus}
                    alt=''
                  />
                  <p className='footer__region-select--name'>
                    Беларусь
                  </p>
                </div>
                <div className='footer__region-select--item'>
                  <img
                    className='footer__region-select--flag'
                    src={Kazahstan}
                    alt=''
                  />
                  <p className='footer__region-select--name'>
                    Казахстан
                  </p>
                </div>
              </div>
            )}

            <div
              className='footer__region-item'
              onClick={toggleMenu}
            >
              <img
                className='footer__region-flag--img'
                src={Turkey}
                alt='Turkey'
              />
              <div className='footer__region-country'>
                Турция
              </div>
              <svg
                className={`rotating-svg ${
                  isOpen ? "rotate" : ""
                }`}
                width='10'
                height='6'
                viewBox='0 0 10 6'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.3332 0.916748L5.16667 5.08341L1 0.916748'
                  stroke='black'
                  strokeWidth='1.33333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>

        <div className='footer__data'>
          <div className='footer__data-quotation'>©</div>
          <div className='footer__data-time'>
            Mastera.com 2023-2023
          </div>
        </div>
      </div>
    </footer>
  );
};
