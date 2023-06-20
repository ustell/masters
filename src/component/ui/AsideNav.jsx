import React from "react";

export const AsideNav = () => {
  return (
    <section className="conteiner__time">
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

      <main className="main__aside">
        <div className="content"></div>
      </main>
    </section>
  );
};
