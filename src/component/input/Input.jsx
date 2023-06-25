/** @format */

import React, { useState } from "react";
import "../../scss/components/Input.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Path } from "../../path";

const specialist = [
  {
    title: "Репетиторы",

    name: [
      {
        id: 1,
        repetitors: "Английский язык",
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

function Input({ inputValue }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isListVisible, setIsListVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    setIsListVisible(value.length > 0);
    setSelectedValue("");
  };

  const handleSelectItem = (value) => {
    setSelectedValue(value);
    setIsListVisible(false);
    setTimeout(() => {
      // Perform navigation after a delay
      navigate(Path.filterStepOne);
    }, 1000);
  };

  const filteredSpecialists = specialist.filter(
    (category) =>
      category.name.some((item) =>
        item.repetitors
          .toLowerCase()
          .includes(searchQuery.toLowerCase()),
      ),
  );

  return (
    <div className='search__main__main'>
      <input
        className='search__input'
        type='text'
        value={selectedValue || searchQuery}
        onChange={handleInputChange}
        placeholder={"Услуга или специалист"}
      />
      {isListVisible && (
        <div className='search__bar'>
          <ul className='search__bar__scroll'>
            {filteredSpecialists.map((category) => (
              <li key={category.id}>
                <ul className='search__ul--nav'>
                  {category.name
                    .filter((item) =>
                      item.repetitors
                        .toLowerCase()
                        .includes(
                          searchQuery.toLowerCase(),
                        ),
                    )
                    .map((item) => (
                      <Link
                        key={item.id}
                        to={"/"}
                        className='search__link'
                        onClick={() =>
                          handleSelectItem(item.repetitors)
                        }
                      >
                        {item.repetitors}
                      </Link>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Input;
