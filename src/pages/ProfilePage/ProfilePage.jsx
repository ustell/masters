import React from "react";

import Phoneverification from "../../assets/img/iconProfile/checkPhone.png";

import { AsideNavProfile } from "./AsideNavProfile";

export const ProfilePage = () => {
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
            {/* block */}
            <div className="profile__block profile__block-form">
              <h4 className="profile__title">Личные данные</h4>
              <form className="profile__form">
                <input className="profile__inp"
                  id="FIO"
                  type="text"
                  onChange={handleInputChange}
                  value={inputValue}
                  placeholder="Александр Курчаков"
                />
                <label htmlFor="FIO" type="text">
                  Имя
                </label>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
