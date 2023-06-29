/** @format */

import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { AsideNav } from "./AsideNav";

import arrow from "../../assets/img/iconProfile/social/arrow.svg";
import plus from "../../assets/img/iconFilter/Vector.png";
import calendar from "../../assets/img/iconFilter/calendar.svg";
import arrowBlack from "../../assets/img/iconFilter/arrowBlack.png";
import arrowWhite from "../../assets/img/iconFilter/arrow.png";

import Calendar from "react-calendar";
import Header from "../../component/Header/Header";
import { Footer } from "../../component/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { Path } from "../../path";
import { useState } from "react";
import { Layout } from "../../layout/Layout";

export const FilterPages = () => {
  const navigate = useNavigate();

  const nextStep = () => {
    const data = {
      date,
      dateEnd,
      maxPrice,
      minPrice,
      textValue,
      selectedOption,
      selectedOption2,
      textValue,
      file,
    };

    navigate(Path.finalStep);
  };
  const backStep = () => {
    navigate(Path.filterStepOne);
  };

  const response = localStorage.getItem("order");
  const parsedData = JSON.parse(response);
  const first = parsedData[0].categoryRepetitors;
  const two = parsedData[0].serviceRepetitors;

  let array1 = { answer: [] };
  let array2 = { answer: [] };

  array1.answer.push(...first);
  array2.answer.push(...two);
  // file date
  const [file, setFile] = useState();

  // Date Calendar state

  const [date, setDate] = React.useState(new Date());
  const [dateEnd, setDateEnd] = React.useState(new Date());

  // _MaxPrice _MinPrice
  const [maxPrice, setMaxPrice] = React.useState("");
  const [minPrice, setMinPrice] = React.useState("");

  // _textAreaAutoSize

  const [textValue, setTextValue] = React.useState("");

  // _FileSave
  const [fileInfo, setFileInfo] = React.useState(null);

  // states

  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);

  // state first arr

  const [selectedOption, setSelectedOption] =
    React.useState(null);
  // state two arr

  const [selectedOption2, setSelectedOption2] =
    React.useState(null);

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

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileData = e.target.result;
        setFile(fileData);
        setFileInfo(selectedFile.name);
      };
      reader.readAsDataURL(selectedFile);
    }
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
  };

  const MinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  // Data Calendar
  const DateChange = (newDate) => {
    setDate(newDate);
  };

  const DateChangeEnd = (newDate) => {
    setDateEnd(newDate);
  };

  return (
    <Layout>
      <div className='conteiner__time'>
        <AsideNav />
        <section className='main__aside'>
          <div className='content'>
            <div className='filter__filling'>
              <form className='filter__form'>
                <h3 className='filter__title'>
                  Какое направление?
                </h3>
                <div className='filter__inp'>
                  <input
                    className='filter__input'
                    type='checkbox'
                    id='filter_1'
                    name='filter'
                  />
                  <label
                    className='filter__label'
                    htmlFor='filter_1'
                    onClick={toggleOptions}
                  >
                    Выбрать направление{" "}
                    <img
                      className={`arrow ${
                        isOpen ? "open" : ""
                      }`}
                      src={arrow}
                      alt=''
                    />
                  </label>
                  <div className={`filter__options`}>
                    {/* options */}
                    {array1.answer.map((item, index) => (
                      <label
                        className='filter__option__label'
                        key={index + Date.now()}
                      >
                        <input
                          className='filter__option'
                          type='checkbox'
                          id={item}
                          checked={selectedOption === item}
                          onChange={() =>
                            handleCheckboxChange(item)
                          }
                        />
                        <span className='filter__fake'></span>
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <h3 className='filter__title'>
                  Какая нужна услуга?
                </h3>
                <div className='filter__inp'>
                  <input
                    className='filter__input'
                    type='checkbox'
                    id='filter_2'
                    name='filter'
                  />
                  <label
                    className='filter__label'
                    htmlFor='filter_2'
                    onClick={toggleOption}
                  >
                    Выбрать уcлугу
                    <img
                      className={`arrow ${
                        isOpen2 ? "open" : ""
                      }`}
                      src={arrow}
                      alt=''
                    />
                  </label>
                  <div className={`filter__options`}>
                    {/* options */}
                    {array2.answer.map((item, index) => (
                      <label
                        className='filter__option__label'
                        key={index + Date.now()}
                      >
                        <input
                          className='filter__option'
                          type='checkbox'
                          id={item?.name}
                          checked={selectedOption2 === item}
                          onChange={() =>
                            handleCheckboxChange2(item)
                          }
                        />
                        <span className='filter__fake'></span>
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <h3 className='filter__title'>
                  Опишите детали задачи
                </h3>
                <div className='filter__inp'>
                  <TextareaAutosize
                    className='filter__text'
                    type='text'
                    value={textValue}
                    onChange={handleTextChange}
                    placeholder='Детали задачи...'
                  />
                </div>
                <div className='filter__inp filter__inp--img'>
                  <input
                    id='filter__img1'
                    className='filter__img'
                    type='file'
                    name='file'
                    accept='image/*, .pdf, .doc, .docx'
                    onChange={handleFileChange}
                  />
                  <label
                    className='filter--img'
                    htmlFor='filter__img1'
                  >
                    <img src={plus} alt='plus' />
                    <span>
                      {fileInfo
                        ? fileInfo
                        : "Добавить фото или файл"}
                    </span>
                  </label>
                </div>
                <h3 className='filter__title'>
                  Сколько вы готовы заплатить за работу?
                </h3>
                <div className='filter__pay'>
                  <input
                    className='filter__label pay'
                    type='text'
                    value={maxPrice}
                    placeholder='От 0 лир.'
                    onChange={MaxPriceChange}
                  />
                  <input
                    className='filter__label pay'
                    type='text'
                    value={minPrice}
                    placeholder='До 0 лир.'
                    onChange={MinPriceChange}
                  />
                </div>
              </form>
              <form className='filter__form--data'>
                <h3 className='filter__title'>
                  Когда нужна услуга?
                </h3>
                <h4 className='filter__subtitle'>Начать</h4>
                <div className='filter__inp filter__data'>
                  <input
                    className='filter__input'
                    type='checkbox'
                    id='filter_3'
                    name='filter'
                  />
                  <label
                    className='filter__label filter__label--data'
                    htmlFor='filter_3'
                  >
                    {` Выбрать дату: ${
                      date ? date.toLocaleDateString() : ""
                    }`}
                    <img src={calendar} alt='' />
                  </label>
                  <div
                    className={`filter__options filter__options--date`}
                  >
                    {/* options */}
                    <label className='filter__option__label'>
                      <input className='filter__option' />
                      <Calendar
                        onChange={DateChange}
                        value={date}
                      />
                    </label>
                  </div>
                </div>
                {/* form 3 */}
                <h3 className='filter__title'>
                  Когда нужна услуга?
                </h3>
                <h4 className='filter__subtitle'>
                  Закончить
                </h4>
                <div className='filter__inp filter__data'>
                  <input
                    className='filter__input'
                    type='checkbox'
                    id='filter_4'
                    name='filter'
                  />
                  <label
                    className='filter__label filter__label--data'
                    htmlFor='filter_4'
                  >
                    {` Выбрать дату: ${
                      dateEnd
                        ? dateEnd.toLocaleDateString()
                        : ""
                    }`}
                    <img src={calendar} alt='' />
                  </label>
                  <div
                    className={`filter__options filter__options--date`}
                  >
                    {/* options */}
                    <label className='filter__option__label'>
                      <input className='filter__option' />
                      <Calendar
                        onChange={DateChangeEnd}
                        value={dateEnd}
                      />
                    </label>
                  </div>
                </div>
              </form>
              <div className='filter__Goback'>
                <Link
                  className='filter__Goback--link'
                  to={Path.filterStepOne}
                >
                  <img src={arrowBlack} alt='arrow' />
                </Link>
                <button
                  onClick={nextStep}
                  className='filter__btn'
                >
                  Продолжить{" "}
                  <img src={arrowWhite} alt='arrow' />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
