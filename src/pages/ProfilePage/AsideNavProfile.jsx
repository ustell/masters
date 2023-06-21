import React from "react";

import myprofile from "../../assets/img/iconProfile/profile.png";
import profilePrivate from "../../assets/img/iconProfile/profilePrivate.png";
import chat from "../../assets/img/iconProfile/chat.png";
import col from "../../assets/img/iconProfile/col.png";
import logout from "../../assets/img/iconProfile/logout.png";
import people from "../../assets/img/iconProfile/logout.png";

export const AsideNavProfile = () => {
  return (
    <aside className="aside">
      <nav className="aside__nav">
        <h3 className="aside__title">Профиль</h3>
        <ul className="aside__container aside__conteiner-profile">
          <li className="active">
            <img src={myprofile} alt="iMG" />
            Мой профиль
          </li>
          <li>
            <img src={profilePrivate} alt="iMG" />
            Личные данные
          </li>
          <li>
            <img src={chat} alt="iMG" />
            Отзывы от специалистов
          </li>
          <li>
            <img src={people} alt="iMG" />
            Привязанные соц сети
          </li>
          <li>
            <img src={col} alt="iMG" />
            Уведомления по заказам
          </li>
          <li>
            <img src={logout} alt="iMG" />
            Действия с профилем
          </li>
        </ul>
      </nav>
    </aside>
  );
};
