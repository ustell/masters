/** @format */

import React from "react";
import DropdownMenu from "./DropDown";
import { DropDownProfile } from "./DropDownProfile";
import { DropdownSpecialist } from "./DropdownSpecialist";
import { DropdownSpecialistProfile } from "./DropdownSpecialistProfile";
import Logo from "../../assets/img/МАСТЕРА.svg";
import { Link } from "react-router-dom";
import { Path } from "../../path";

function Header() {
  const [useUser, setuseUser] = React.useState(true);
  // переменную из бэка
  const [useFio, setUseFio] = React.useState('Александр Курчаков');

  const firstWord = () => {
    setUseFio(useFio);
    // использовать при клике выход
  }

  return (
    <header className="header">
      <nav className="header__menu">
        <ul className="header__menu-left">
          <li>
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </li>
          <li>
            <DropdownMenu text={"Анталия"} />
          </li>
        </ul>
        {useUser ? (
          <ul className="header__menu-rigth">
            <li>
              <DropdownSpecialist text={"Специалисты"} />
            </li>
            <li>
              <a href="/">Войти</a>
            </li>
          </ul>
        ) : (
          <ul className="header__menu-rigth">
            <li>
              <DropdownSpecialistProfile text={"Специалисты"} />
            </li>
            <li>
              <a href="/">Мои заказы</a>
            </li>
            <li className="header__menu-user">
              <a href="/"> </a>
              <DropDownProfile Fio={useFio} profileWord={useFio} />
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
