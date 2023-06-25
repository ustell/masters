/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Path } from "../../path";

const data = [
  { id: 1, text: "Заказ", page: Path.filterStepOne },
  {
    id: 2,
    text: "Часто задаваемые вопросы",
    page: Path.FAQ,
  },
  { id: 3, text: "Специалисты", page: Path.SpecPage },
];

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

  const dataID = data.map((item) => item.id);

  const [dataState, setDataState] = React.useState(dataID);

  const handleClickOnNavBar = (item) => {
    setDataState(item);
  };

  return (
    <aside className='aside'>
      <nav className='aside__nav'>
        <ul className='aside__container'>
          {data.map((item) => (
            <Link
              to={item.page}
              className={
                dataState === item.id ? "active" : ""
              }
              key={item.id}
              onClick={() => handleClickOnNavBar(item.id)}
            >
              {item.text}
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
