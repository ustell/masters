/** @format */

import React from "react";
import DropdownMenu from "./DropDown";
import Logo from "../../assets/img/Logo.png";

import "../../scss/components/header.scss";

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__menu'>
          <div className='header__menu-item'>
            {/* <img className="header__logo" src="" alt="" />*/}
            <img
              src={Logo}
              alt='logo'
              className='header__logo'
            />

            <div className='header__region'>
              <DropdownMenu text={"Анталия"} />
            </div>
          </div>
          <div className='header__menu-item'>
            <div className='header__specialists'>
              Специалисты
            </div>
            <div className='header__login'>Войти</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
