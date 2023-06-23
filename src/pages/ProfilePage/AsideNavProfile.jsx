import React from "react";

import myprofile from "../../assets/img/iconProfile/profile.png";
import profilePrivate from "../../assets/img/iconProfile/profilePrivate.png";
import chat from "../../assets/img/iconProfile/chat.png";
import col from "../../assets/img/iconProfile/col.png";
import logout from "../../assets/img/iconProfile/logout.png";
import people from "../../assets/img/iconProfile/people.png";
import { Link, animateScroll as scroll } from "react-scroll";

export const AsideNavProfile = (scrollToSection) => {
  const AsideProfile = [
    {
      id: 1,
      img: myprofile,
      section: "section1",
      text: "Мой профиль",
    },
    {
      id: 2,
      img: profilePrivate,
      section: "section2",
      text: "Личные данные",
    },
    {
      id: 3,
      img: chat,
      section: "section3",
      text: "Отзывы от специалистов",
    },
    {
      id: 4,
      img: people,
      section: "section4",
      text: "Привязанные соц сети",
    },
    {
      id: 5,
      img: col,
      section: "section5",
      text: "Уведомления по заказам",
    },
    {
      id: 6,
      img: logout,
      section: "section6",
      text: "Действия с профилем",
    },
  ];

  const [isActiveProfile, setIsActiveProfile] = React.useState(
    AsideProfile[0].id
  );

  const ScrollClickProfile = (itemId) => {
    setIsActiveProfile(itemId);
  };

  return (
    <aside className="aside">
      <nav className="aside__nav">
        <h3 className="aside__title">Профиль</h3>
        <ul className="aside__container aside__conteiner-profile">
          {AsideProfile.map((item) => (
            <Link
              to={item.section}
              smooth={true}
              duration={600}
              offset={-window.innerHeight / 2}
              className={isActiveProfile === item.id ? "active" : ""}
              onClick={() => ScrollClickProfile(item.id)}
              key={item.id}
            >
              <img src={item.img} alt="iMG" />
              {item.text}
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
