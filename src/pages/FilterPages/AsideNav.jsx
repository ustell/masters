/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Path } from "../../path";

export const AsideNav = () => {
  const [activeItem, setActiveItem] = useState(
    parseInt(localStorage.getItem("activeItem"), 10) || 0,
  );

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  useEffect(() => {
    localStorage.setItem("activeItem", activeItem);
  }, [activeItem]);

  const AsideMap = [
    {
      id: 1,
      path: Path.filterStepOne,
    },
  ];

  return (
    <aside className='aside'>
      <nav className='aside__nav'>
        <ul className='aside__container'>
          <li
            className={activeItem - 1 === 0 ? "active" : ""}
            onClick={() => handleItemClick(1)}
          >
            <Link to={Path.filterStepOne}>
              Заказ<span>Нет просмотров</span>
            </Link>
          </li>

          <li
            className={activeItem - 1 === 1 ? "active" : ""}
            onClick={() => handleItemClick(2)}
          >
            <Link to={Path.FAQ}>
              Часто задаваемые вопросы
            </Link>
          </li>

          <li
            className={activeItem - 1 === 2 ? "active" : ""}
            onClick={() => handleItemClick(3)}
          >
            <Link to={Path.FAQ}>Специалисты</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
