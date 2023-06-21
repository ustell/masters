import React from "react";

export const AsideNav = () => {
  return (
    <aside className="aside">
    <nav className="aside__nav">
      <ul className="aside__container">
        <li className="active">
          Заказ<span>Нет просмотров</span>
        </li>
        <li>Часто задаваемы вопросы</li>
        <li>Специалисты</li>
      </ul>
    </nav>
  </aside>
  );
};
