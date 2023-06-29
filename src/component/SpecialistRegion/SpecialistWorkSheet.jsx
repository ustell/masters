/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../redux/features/orderSlice";

const specialist = [
  {
    title: "Репетиторы",

    name: [
      {
        id: 1,
        repetitors: "Анлийский язык",
      },
      {
        id: 2,
        repetitors: "Математика",
      },
      {
        id: 3,
        repetitors: "Русский язык",
      },
      {
        id: 4,
        repetitors: "Начальная школа",
      },
      {
        id: 5,
        repetitors: "Музыка",
      },
    ],
    number: "247",
    id: 2,
  },

  {
    title: "Мастера по ремонту",
    name: [
      {
        id: 1,
        repetitors: "Сантехники",
      },
      {
        id: 2,
        repetitors: "Электрики",
      },
      {
        id: 3,
        repetitors: "Плиточники",
      },
      {
        id: 4,
        repetitors: "Штукатуры",
      },
      {
        id: 5,
        repetitors: "Стяжка пола",
      },
    ],
    number: "843",
    id: 2,
  },

  {
    title: "Мастера красоты",
    name: [
      {
        id: 1,
        repetitors: "Макияж",
      },
      {
        id: 2,
        repetitors: "Стилисты",
      },
      {
        id: 3,
        repetitors: "Фотограф",
      },
      {
        id: 4,
        repetitors: "Бьюти-такси",
      },
      {
        id: 5,
        repetitors: "Диетология",
      },
    ],
    number: "923",
    id: 2,
  },
  {
    title: "Фрилансеры",
    name: [
      {
        id: 1,
        repetitors: "Дизайнеры",
      },
      {
        id: 2,
        repetitors: "Программисты",
      },
      {
        id: 3,
        repetitors: "Верстальщики",
      },
      {
        id: 4,
        repetitors: "Переводчики",
      },
      {
        id: 5,
        repetitors: "Системные администраторы",
      },
    ],
    number: "459",
    id: 2,
  },
  {
    title: "Бухгалтеры и юристы",
    name: [
      {
        id: 1,
        repetitors: "Бухгалтеры",
      },
      {
        id: 2,
        repetitors: "Юристы",
      },
      {
        id: 3,
        repetitors: "Экономика",
      },
      {
        id: 4,
        repetitors: "Право",
      },
      {
        id: 5,
        repetitors: "Финансы",
      },
    ],
    number: "348",
    id: 2,
  },
  {
    title: "Спортивные тренеры",
    name: [
      {
        id: 1,
        repetitors: "Фитнес",
      },
      {
        id: 2,
        repetitors: "Йога",
      },
      {
        id: 3,
        repetitors: "Пилатес",
      },
      {
        id: 4,
        repetitors: "Стретчинг",
      },
      {
        id: 5,
        repetitors: "Единоборства",
      },
    ],
    number: "395",
    id: 2,
  },
  {
    title: "Артисты",
    name: [
      {
        id: 1,
        repetitors: "Певцы",
      },
      {
        id: 2,
        repetitors: "Шаржисты",
      },
      {
        id: 3,
        repetitors: "Художники",
      },
      {
        id: 4,
        repetitors: "Праздник для малышей",
      },
      {
        id: 5,
        repetitors: "Мальчишник/девичник",
      },
    ],
    number: "381",
    id: 2,
  },
  {
    title: "Домашний персонал",
    name: [
      {
        id: 1,
        repetitors: "Водители",
      },
      {
        id: 2,
        repetitors: "Домработницы",
      },
      {
        id: 3,
        repetitors: "Повара",
      },
      {
        id: 4,
        repetitors: "Сиделки",
      },
      {
        id: 5,
        repetitors: "Выгул собак",
      },
    ],
    number: "742",
    id: 2,
  },
  {
    title: "Ветеринары",
    name: [
      {
        id: 1,
        repetitors: "Ветеринарная терапия",
      },
      {
        id: 2,
        repetitors: "Лечение кошек",
      },
      {
        id: 3,
        repetitors: "Лечение собак",
      },
      {
        id: 4,
        repetitors: "Кинология",
      },
      {
        id: 5,
        repetitors: "Дрессировка животных",
      },
    ],
    number: "632",
    id: 2,
  },
  {
    title: "Ищете кого-то ещё?",
    name: [
      {
        id: 1,
        repetitors: "Собеседник на час",
      },
      {
        id: 2,
        repetitors: "Психологи",
      },
      {
        id: 3,
        repetitors: "Экологи",
      },
      {
        id: 4,
        repetitors: "Интервьюеры",
      },
      {
        id: 5,
        repetitors: "Детективы",
      },
    ],
    number: "63",
    id: 2,
  },
];

function SpecialistWorkSheet({ title, text }) {
  const dispatch = useDispatch();
  const nav = async (item) => {
    console.log(item.title);
    await dispatch(fetchCategories(item.title));
  };

  return (
    <div className='workSheet'>
      {/* block */}
      {specialist.map((item) => (
        <ul className='workSheet__block'>
          <li
            className='workSheet__item workSheet__title'
            key={item.id}
            onClick={() => nav(item)}
          >
            <Link
              to={"/filter/step/one"}
              className='workSheet__link workSheet__link-black'
            >
              {item.title}
            </Link>
            <span className='workSheet__count'>
              {item.number}
            </span>
          </li>
          {item.name.map((link) => (
            <li
              className='workSheet__item'
              onClick={() => nav(item)}
              key={link.id}
            >
              <Link
                to={"/filter/step/one"}
                className='workSheet__link'
              >
                {link.repetitors}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default SpecialistWorkSheet;
