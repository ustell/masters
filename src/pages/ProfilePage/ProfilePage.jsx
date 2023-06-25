import React from "react";

import Phoneverification from "../../assets/img/iconProfile/checkPhone.png";
import Turkey from "../../assets/img/turkey.png";
import Google from "../../assets/img/iconProfile/social/google.png";

import { Element } from 'react-scroll';

import { AsideNavProfile } from "./AsideNavProfile";

export const ProfilePage = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [inputValue, setInputValue] = React.useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  return (
      <div className="conteiner__time">
        <AsideNavProfile />
        <section className="main__aside">
          <div className="content">
            <div className="profile">
              <h4 className="profile__title">
                Так специалисты видят ваш профиль
              </h4>
              {/* block */}
              <Element name="section1" >
                <div className="profile__block profile__block-main">
                  <div className="profile__block-account">
                    <div className="account__block">
                      <span>А</span>
                      <div className="account__dataMain">
                        <h4 className="account__fio">Александр Курчаков</h4>
                        <data className="account__data" data={" 2023 г."}>
                          на сервисе с 2023 г.
                        </data>
                      </div>
                    </div>
                    <div className="account__verification">
                      <img src={Phoneverification} alt="" />
                      <p>Номер подтвержден</p>
                    </div>
                  </div>
                </div>
              </Element>
              {/* block */}
              <Element name="section2">
                <div className="profile__block profile__block-form">
                  <h4 className="profile__title">Личные данные</h4>
                  {/* FORM */}
                  <form className="profile__form">
                    {/* FIO */}
                    <label htmlFor="FIO" type="text">
                      Ваше ФИО:
                    </label>
                    <input
                      className="profile__inp"
                      id="FIO"
                      type="text"
                      onChange={handleInputChange}
                      value={inputValue}
                      placeholder="Александр Курчаков"
                    />

                    <label htmlFor="Gender" type="text">
                      Ваш пол:
                    </label>
                    {/* GENDER */}
                    <div className="profile__galochka">
                      {" "}
                      <select
                        onClick={toggleMenu}
                        className="profile__gender"
                        name="Gender"
                      >
                        <option selected="selected" value="Мужской">
                          Мужской
                        </option>
                        <option selected="selected" value="Женский">
                          Женский
                        </option>
                      </select>{" "}
                      <svg
                        className={`selectedrotate rotating-svg ${
                          isOpen ? "rotate" : ""
                        }`}
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.3332 0.916748L5.16667 5.08341L1 0.916748"
                          stroke="black"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {/* phone */}
                    <input
                      className="profile__inp profile__inp-phone"
                      id="Phone"
                      type="tel"
                      name="phone"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder={`+90 312 294 7200 `}
                    />
                    <label htmlFor="Phone" type="text">
                      Cпециалисты видят ваш номер. Вы выбираете, кому он будет
                      доступен.
                    </label>
                    {/* email */}
                    <input
                      className="profile__inp profile__inp-email"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Электронная почта"
                    />
                    <label htmlFor="email" type="text">
                      Вы будете получать уведомления о заказах, советы от
                      специалистов и акции.
                    </label>
                  </form>
                </div>
              </Element>
              {/* block */}
              <Element name="section3" >
              <div className="profile__block profile__block-form">
                <h4 className="profile__title">Отзывы от специалистов</h4>
                <p>Отзывов пока нет.</p>
              </div>
              </Element>
              {/* block */}
              <Element name="section4" >
              <div className="profile__block profile__block-form">
                <h4 className="profile__title">Привязать соцсети</h4>
                <p>
                  Подключите соцсети, чтобы входить за пару кликов с любого
                  устройства. Не публикуем ссылки на ваши соцсети.
                </p>
                <a href="#" className="profile__btn">
                  <img src={Google} alt="google" />{" "}
                  <span>Вход через Google</span>
                </a>
              </div>
              </Element>
              {/* block */}
              <Element name="section5" >
              <div className="profile__block profile__block-form">
                <h4 className="profile__title">Уведомления по заказам</h4>
                <p>Вы получаете уведомления по СМС.</p>
                <button className="profile__btn profile__btn-email">
                  Получать на почту
                </button>
              </div>
              </Element>
              {/* block */}
              <Element name="section6" >
              <div className="profile__block profile__block-form">
                <h4 className="profile__title">Действия в профилем</h4>
                <button className="profile__btn profile__btn-delete">
                  Удалить аккаунт
                </button>
                <p>Вы потеряете историю заказов и контакты специалистов.</p>
                <button className="profile__btn profile__btn-exit">
                  <p>Выйти</p>
                </button>
              </div>
              </Element>
            </div>
          </div>
        </section>
      </div>
  );
};