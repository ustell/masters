import React from "react";

export const AsideNav = () => {
  return (
    <aside className="aside">
    <nav className="aside__nav">
      <ul className="aside__container">
        <li className="active">
          Заказ<span>Нет просмотров</span>
        </li>
        <li>Часто задаваемые вопросы</li>
        <li>Специалисты</li>
      </ul>
    </nav>
  </aside>
  );
};
