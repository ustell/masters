/** @format */

import React from "react";

export const DropDownProfile = ({ Fio, profileWord }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  const profile =
    typeof profileWord === "string"
      ? profileWord.charAt(0).toUpperCase()
      : "";

  return (
    <div className='dropdown-menu dropdown-menu__profile'>
      <div
        className='dropdown-menu-toggle'
        onClick={toggleMenu}
      >
        <span>{profile}</span>
        <p>{Fio}</p>
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
      {isOpen && (
        <div className='dropdown__menu-specialist dropDown__menu-profile'>
          <nav className='specialist__nav'>
            <li>
              <a href='/'>Профиль и настройка</a>
            </li>
            <li>
              <a href='/'>Мои заказы</a>
            </li>
            <li>
              <a onClick={logout} href='/'>
                Выйти
              </a>
            </li>
          </nav>
        </div>
      )}
    </div>
  );
};
