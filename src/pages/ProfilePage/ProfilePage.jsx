import React from "react";

import Phoneverification from '../../assets/img/iconProfile/checkPhone.png'

import { AsideNavProfile } from "./AsideNavProfile";

export const ProfilePage = () => {
  return (
    <div className="conteiner__time">
      <AsideNavProfile />
      <section className="main__aside">
        <div className="content">
          <div className="profile">
            <h4 className="profile__title">
              Так специалисты видят ваш профиль
            </h4>
            <div className="profile__block">
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
          </div>
        </div>
      </section>
    </div>
  );
};
