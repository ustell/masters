/** @format */

import React from "react";
import DropdownMenu from "./DropDown";
import { DropdownSpecialist } from "./DropdownSpecialist"
import Logo from "../../assets/img/МАСТЕРА.svg";
import { Link } from "react-router-dom";
import { Path } from "../../path";

function Header() {
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
        <ul className="header__menu-rigth">
          <li>
            <DropdownSpecialist text={"Специалисты"}/>
          </li>
          <li>
            <a href="/">Войти</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
