/** @format */

import React, { useState } from "react";
import "../../scss/components/Input.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Path } from "../../path";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/features/orderSlice";

const specialist = [
  {
    title: "репетиторы",

    name: [
      {
        id: 1,
        repetitors: "Спортивные тренера",
      },
      {
        id: 2,
        repetitors: "Мастера по ремонту",
      },
      {
        id: 3,
        repetitors: "Фрилансеры",
      },
      {
        id: 4,
        repetitors: "Бухгалтеры и юристы",
      },
      {
        id: 5,
        repetitors: "Артисты",
      },
      {
        id: 6,
        repetitors: "Домашний персонал",
      },
      {
        id: 7,
        repetitors: "Ветеринары",
      },
      {
        id: 8,
        repetitors: "Автоинструкторы",
      },
      {
        id: 9,
        repetitors: "Мастера красоты",
      },
      {
        id: 10,
        repetitors: "Ищете кого-то ещё?",
      },
      {
        id: 11,
        repetitors: "Репетиторы",
      },
    ],
    number: "247",
    id: 2,
  },
];

function Input({ inputValue, secondInput, responseValue }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isListVisible, setIsListVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    setIsListVisible(value.length > 0);
    setSelectedValue("");
  };

  const handleSelectItem = (value) => {
    setSelectedValue(value);
    setIsListVisible(false);
    dispatch(fetchCategories(value));
    localStorage.setItem(
      "orderTitle",
      value ? value : inputValue,
    );
    setTimeout(() => {
      // Perform navigation after a delay
      navigate(Path.filterStepOne);
    }, 1000);
  };

  const item = (value) => {};

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
        value={
          selectedValue ||
          searchQuery ||
          inputValue ||
          responseValue
        }
        onChange={
          window.location.pathname === "/" ||
          window.location.pathname === "/client/order"
            ? handleInputChange
            : item
        }
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
