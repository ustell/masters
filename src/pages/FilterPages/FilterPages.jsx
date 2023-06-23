import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { AsideNav } from "./AsideNav";

import arrow from "../../assets/img/iconProfile/social/arrow.svg";
import plus from "../../assets/img/iconFilter/Vector.png";
import calendar from "../../assets/img/iconFilter/calendar.svg";
import arrowBlack from "../../assets/img/iconFilter/arrowBlack.png";
import arrowWhite from "../../assets/img/iconFilter/arrow.png";

import Calendar from 'react-calendar';

export const FilterPages = () => {
  const optionsArr = [
    {
      id: 1,
      options: "Веб-разработка",
    },
    {
      id: 2,
      options: "Создание сайта",
    },
    {
      id: 3,
      options: "Разработка мобильных приложений",
    },
    {
      id: 4,
      options: "Разработка приложений для ПК",
    },
    {
      id: 5,
      options: "Разработка игр",
    },
    {
      id: 6,
      options: "Разработка чат-ботов",
    },
    {
      id: 7,
      options: "Data Science (хранение обратотка, анализ данных)",
    },
    {
      id: 8,
      options: "Программирование 1С",
    },
    {
      id: 9,
      options: "Программирование микроконтроллеров",
    },
  ];

  const optionsArr2 = [
    {
      id: 20,
      options: "Веб-разработка",
    },
    {
      id: 22,
      options: "Создание сайта",
    },
    {
      id: 23,
      options: "Разработка мобильных приложений",
    },
    {
      id: 24,
      options: "Разработка приложений для ПК",
    },
    {
      id: 25,
      options: "Разработка игр",
    },
    {
      id: 26,
      options: "Разработка чат-ботов",
    },
    {
      id: 27,
      options: "Data Science (хранение обратотка, анализ данных)",
    },
    {
      id: 28,
      options: "Программирование 1С",
    },
    {
      id: 29,
      options: "Программирование микроконтроллеров",
    },
  ];

  // Date Calendar state

  const [date, setDate] = React.useState(new Date());
  const [dateEnd, setDateEnd] = React.useState(new Date());

  // _MaxPrice _MinPrice
  const [maxPrice, setMaxPrice] = React.useState('');
  const [minPrice, setMinPrice] = React.useState('');

  // _textAreaAutoSize

  const [textValue, setTextValue] = React.useState("");

  // states

  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);

  // state first arr

  const [selectedOption, setSelectedOption] = React.useState(null);
  // state two arr

  const [selectedOption2, setSelectedOption2] = React.useState(null);

  const handleCheckboxChange = (id) => {
    if (selectedOption === id) {
      setSelectedOption(null);
    } else {
      setSelectedOption(id);
    }
  };

  const handleCheckboxChange2 = (id) => {
    if (selectedOption2 === id) {
      setSelectedOption2(null);
    } else {
      setSelectedOption2(id);
    }
  };

  // img
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Обработка выбранного файла
    console.log(file);
  };

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const toggleOption = () => {
    setIsOpen2(!isOpen2);
  };

  // autosizeinput

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  // Price

  const MaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  }

  const MinPriceChange = (event) => {
    setMinPrice(event.target.value);
  }

  // Data Calendar
  const DateChange = (newDate) => {
    setDate(newDate);
  }

  const DateChangeEnd = (newDate) => {
    setDateEnd(newDate);
  }

  return (
    <div className="conteiner__time">
      <AsideNav />
      <section className="main__aside">
        <div className="content">
          <div className="filter__filling">
            <form className="filter__form">
              <h3 className="filter__title">Какое направление?</h3>
              <div className="filter__inp">
                <input
                  className="filter__input"
                  type="checkbox"
                  id="filter_1"
                  name="filter"
                />
                <label
                  className="filter__label"
                  for="filter_1"
                  onClick={toggleOptions}
                >
                  Выбрать направление{" "}
                  <img
                    className={`arrow ${isOpen ? "open" : ""}`}
                    src={arrow}
                    alt=""
                  />
                </label>
                <div className={`filter__options`}>
                  {/* options */}
                  {optionsArr.map((item) => (
                    <label className="filter__option__label" key={item.id}>
                      <input
                        className="filter__option"
                        type="checkbox"
                        id={item.id}
                        checked={selectedOption === item.id}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                      <span className="filter__fake"></span>
                      <span>{item.options}</span>
                    </label>
                  ))}
                </div>
              </div>
              <h3 className="filter__title">Какая нужна услуга?</h3>
              <div className="filter__inp">
                <input
                  className="filter__input"
                  type="checkbox"
                  id="filter_2"
                  name="filter"
                />
                <label
                  className="filter__label"
                  for="filter_2"
                  onClick={toggleOption}
                >
                  Выбрать улугу
                  <img
                    className={`arrow ${isOpen2 ? "open" : ""}`}
                    src={arrow}
                    alt=""
                  />
                </label>
                <div className={`filter__options`}>
                  {/* options */}
                  {optionsArr2.map((item) => (
                    <label className="filter__option__label" key={item.id}>
                      <input
                        className="filter__option"
                        type="checkbox"
                        id={item.id}
                        checked={selectedOption2 === item.id}
                        onChange={() => handleCheckboxChange2(item.id)}
                      />
                      <span className="filter__fake"></span>
                      <span>{item.options}</span>
                    </label>
                  ))}
                </div>
              </div>
              <h3 className="filter__title">Опишите детали задачи</h3>
              <div className="filter__inp">
                <TextareaAutosize
                  className="filter__text"
                  type="text"
                  value={textValue}
                  onChange={handleTextChange}
                  placeholder="Детали задачи..."
                />
              </div>
              <div className="filter__inp filter__inp--img">
                <input
                  id="filter__img1"
                  className="filter__img"
                  type="file"
                  name="file"
                  accept="image/*, .pdf, .doc, .docx"
                  onChange={handleFileChange}
                />
                <label className="filter--img" for="filter__img1">
                  <img src={plus} alt="plus" />
                  <span>Добавить фото или файл</span>
                </label>
              </div>
              <h3 className="filter__title">
                Сколько вы готовы заплатить за работу?
              </h3>
              <div className="filter__pay">
                <input
                className="filter__label pay"
                  type="text"
                  value={maxPrice}
                  placeholder="От 0 лир."
                  onChange={MaxPriceChange}
                />
                <input className="filter__label pay"
                  type="text"
                  value={minPrice}
                  placeholder="До 0 лир."
                  onChange={MinPriceChange}
                />
                </div>
            </form>
            <form className="filter__form--data">
            <h3 className="filter__title">
            Когда нужна услуга?
              </h3>
              <h4 className="filter__subtitle">
              Начать
              </h4>
              <div className="filter__inp filter__data">
                <input
                  className="filter__input"
                  type="checkbox"
                  id="filter_3"
                  name="filter"
                />
                <label
                  className="filter__label filter__label--data"
                  for="filter_3"
                >
                  {` Выбрать дату: ${date ? date.toLocaleDateString() : ''}`}
                  <img
                    src={calendar}
                    alt=""
                  />
                </label>
                <div className={`filter__options filter__options--date`}>
                  {/* options */}
                    <label className="filter__option__label" >
                      <input
                        className="filter__option"
                      />
                      <Calendar onChange={DateChange}  value={date}/>
                    </label>
                </div>
              </div>
              {/* form 3 */}
              <h3 className="filter__title">
            Когда нужна услуга?
              </h3>
              <h4 className="filter__subtitle">
              Закончить
              </h4>
              <div className="filter__inp filter__data">
                <input
                  className="filter__input"
                  type="checkbox"
                  id="filter_4"
                  name="filter"
                />
                <label
                  className="filter__label filter__label--data"
                  for="filter_4"
                >
                  {` Выбрать дату: ${dateEnd ? dateEnd.toLocaleDateString() : ''}`}
                  <img
                    src={calendar}
                    alt=""
                  />
                </label>
                <div className={`filter__options filter__options--date`}>
                  {/* options */}
                    <label className="filter__option__label" >
                      <input
                        className="filter__option"
                      />
                      <Calendar onChange={DateChangeEnd}  value={dateEnd}/>
                    </label>
                </div>
              </div>
            </form>
            <div className="filter__Goback">
              <a className="filter__Goback--link" href="#"><img src={arrowBlack} alt="arrow" /></a>
              <button className="filter__btn">Продолжить <img src={arrowWhite} alt="arrow" /></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
