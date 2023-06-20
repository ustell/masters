/** @format */

import React, { useState } from "react";

const DropdownMenu = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const cities = [
    {
      id: 1,
      sity: "Анкара",
    },
    {
      id: 2,
      sity: "Стамбул",
    },
    {
      id: 3,
      sity: "Измир",
    },
    {
      id: 4,
      sity: "Бурса",
    },
    {
      id: 5,
      sity: "Конья",
    },
    {
      id: 6,
      sity: "Бодрум",
    },
    {
      id: 7,
      sity: "Кемер",
    },
    {
      id: 8,
      sity: "Анталия",
    },
    {
      id: 9,
      sity: "Мармарис",
    },
  ];

  return (
    <div className="dropdown-menu">
      <div className="dropdown-menu-toggle" onClick={toggleMenu}>
        <p>{text}</p>
        <svg
          className={`rotating-svg ${isOpen ? "rotate" : ""}`}
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
      {isOpen && (
        <div className="dropdown-menu-list">
          <div className="dropdown__scroll">
            <input
              value={searchValue}
              className="dropdown-menu-input"
              placeholder={"Введите регион или город"}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <div className="dropdown__line">
              <div className="line"></div>
            </div>
            <ul className="dropdown__menu-block">
              {cities
                .filter((obj) => {
                  if (
                    obj.sity.toLowerCase().includes(searchValue.toLowerCase())
                  ) {
                    return true;
                  } else {
                    return false;
                  }
                })
                .map((item, i) => (
                  <li key={item.id} className="dropdown-menu-item">
                    {item.sity}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
