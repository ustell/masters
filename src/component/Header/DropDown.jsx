/** @format */

import React, { useState } from "react";

const DropdownMenu = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='dropdown-menu'>
      <div
        className='dropdown-menu-toggle'
        onClick={toggleMenu}
      >
        <p>{text}</p>
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
        <div className='dropdown-menu-list'>
          <div className="dropdown__scroll">
          <input
            type='text'
            className='dropdown-menu-input'
            placeholder='Введите регион или город'
          />
          <div className="dropdown__line">
          <div className="line"></div>
          </div>
          <ul className="dropdown__menu-block">
              <li className='dropdown-menu-item'>Анкара</li>
              <li className='dropdown-menu-item'>Стамбул</li>
              <li className='dropdown-menu-item'>Измир</li>
              <li className='dropdown-menu-item'>Бурса</li>
              <li className='dropdown-menu-item'>Конья</li>
              <li className='dropdown-menu-item'>Шалыунфа</li>
              <li className='dropdown-menu-item'>Бодрум</li>
              <li className='dropdown-menu-item'>Кемер</li>
              <li className='dropdown-menu-item'>Анталия</li>
              <li className='dropdown-menu-item'>Мармарис</li>
          </ul>
        </div>
        </div>
      )}

    </div>
  );
};

export default DropdownMenu;
