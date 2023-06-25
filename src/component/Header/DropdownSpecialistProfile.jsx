import React, { useState } from "react";

export const DropdownSpecialistProfile = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      {isOpen &&
       <div className="dropdown__menu-specialist dropdown__menu-specialistProfile">
        <nav className="specialist__nav">
          <li><a href="/">Регистрация специалистов</a></li>
          <li><a href="/">Вход для специалистов</a></li>
        </nav>
      </div>
        }
    </div>
  );
};