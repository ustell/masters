/** @format */

import React, { useState } from "react";
import axios from "axios";

import "./style.scss";
import "./check.scss";

import SpecialistsAvatar from "../../assets/img/specialists-avatar.jpg";
import Message from "../../assets/img/message.svg";
import ArrowDown from "../../assets/img/Arrow-down.svg";
import Specialist from "./specialist";
import Masters from "../../assets/img/masters.png";
import MastersTwo from "../../assets/img/masters-two.png";
import MastersThree from "../../assets/img/masters-three.png";
import MastersFour from "../../assets/img/masters-four.png";

import { AsideNav } from "../FilterPages/AsideNav";

function Specialists({ comments, rating }) {
  const [cities, setCities] = React.useState([]);
  const [sortBy, setSortBy] = React.useState("popularity");
  const [isDropdownOpen, setIsDropdownOpen] =
    React.useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [data, setData] = useState([
    {
      comments: 32,
      rating: 1,
      avatar: Masters,
      name: "Айжан Муслимова Искакова",
      time: "12:14",
      description:
        "Начала свою педагогическую деятельность в 2013 году в Назарбаев Интеллектуальной школе физико-математического направления в городе Тараз. За годы работы в данной школе подготовила около 70 учеников к успешной сдаче IELTS, средний балл варьировался от 6,5 до 7,0. Также готовила учащихся к IELTS на индивидуальных занятиях. В течение последних 5 лет готовлю учащихся к поступлению в НИШ. Умею находить индивидуальный подход к каждому студенту.",
      university:
        "Санкт-Петербургский политех МГТУ имени Н.Э. Баумана",
      Fact: "27",
      recommendation: "Отзвычивость",
      reviews: "43",
      servicesone: "Веб-дизайн",
      servicestwo: "Графический дизайн",
      servicesthree: "Графический дизайн",
      priceone: "по договоренности",
      pricetwo: "по договоренности",
      pricethree: "по договоренности",
      allservis: "52",
      work: "Работает дистанционно",
      id: "1",
    },
    {
      comments: 92,
      rating: 3,
      avatar: MastersTwo,
      name: "Иорь Невзоров",
      time: "10:30",
      description:
        "«Крэйзи студио» — сообщество профессионалов, объединившись под общим брендом, мы предлагаем услуги по разработке, созданию, поддержке и продвижению интернет-сайтов. Благодаря наличию богатого опыта работы и использованию современных инструментов в области сайтостроения, мы готовы предложить лучшие решения, связанные с созданием интернет-сайтов для бизнеса.",
      university:
        "НФИ КемГУ, программное и математическое обеспечение информационных технологий",
      Fact: "27",
      recommendation: "Отзвычивость",
      reviews: "43",
      servicesone: "Веб-Программирование",
      servicestwo: "Верстка",
      servicesthree: "Front-end",
      priceone: "по договоренности",
      pricetwo: "по договоренности",
      pricethree: "по договоренности",
      allservis: "23",
      work: "Работает дистанционно",
      id: "2",
    },
    {
      comments: 63,
      rating: 2,
      avatar: MastersThree,
      name: "Алексей Рагимов",
      time: "10:30",
      description:
        "Люблю тематику о красоте (косметика) и здоровье, по медицинским услугам. Интересуюсь рукоделием, живописью и путешествиями. Близка мне и детская тема, я мама и бабушка. Также накоплен солидный багаж написания текстов по самым разным темам: грузоперевозки, осветительные приборы, криптовалюта, туризм (внутренний и зарубежный) и многое другое. Легко обучаюсь, люблю структурировать новую информацию. Кроме написания текстов, редактирую уже написанные.",
      university:
        "Опыт работы менеджером по рекламе – с 1993 по 2017 год1993",
      Fact: "27",
      recommendation: "Быстрое понимание",
      reviews: "43",
      servicesone: "Копирайтеры",
      servicestwo: "SEO-копирайтеры",
      servicesthree: "Бизнес-копирайтинг",
      priceone: "по договоренности",
      pricetwo: "по договоренности",
      pricethree: "по договоренности",
      allservis: "11",
      work: "Работает дистанционно",
      id: "3",
    },
    {
      comments: 59,
      rating: 5,
      avatar: MastersFour,
      name: "Дарья Тапкина",
      time: "10:30",
      description:
        "Здравствуйте! Я дипломированный специалист и профессионал по прическам и макияжу, стилист и визажист в одном лице. Работаю с людьми разного возраста. Моя задача — помочь создать вам ваш образ, скрыть недостатки и подчеркнуть достоинства, дать каждой женщине чувствовать себя уверенно и комфортно на любом мероприятии. Образу невесты уделяю особое внимание, все продумываю до мелочей. Приезжаю с большим ассортиментом косметики, с чистыми кисточками, дезинфекторами и хорошим настроением!",
      university:
        "Международная академия красоты Георгия Кота, курс <Вечерние и свадебные прически, 1 ступень>",
      Fact: "27",
      recommendation: "Отзвычивость",
      reviews: "43",
      servicesone: "Вечерний макияж",
      servicestwo: "Дневной макияж",
      servicesthree: "Макияж на выпускной",
      priceone: "4000",
      pricetwo: "4000",
      pricethree: "4000",
      allservis: "31",
      work: "Принимает у себя",
      id: "4",
    },
  ]);

  const handleSortChange = (value, sortBy) => {
    const sortedData = [...data];
    setSortBy(value);
    setIsDropdownOpen(false);

    if (value === "comments") {
      sortedData.sort((a, b) => b.comments - a.comments); // Изменяем порядок сортировки на убывание
    } else if (value === "rating") {
      sortedData.sort((a, b) => b.rating - a.rating); // Изменяем порядок сортировки на убывание
    }

    setData(sortedData);
  };

  return (
    <div className='conteiner__time'>
      <AsideNav />
      <section className='main__aside'>
        <div className='specialists'>
          <div className='specialists__details'>
            <div className='specialists__details-title'>
              Чтобы писать специалистам, заполните детали
              заказа
            </div>
            <button className='specialists__details-btn'>
              Заполнить детали заказа
            </button>
          </div>

          <div className='specialists__sort'>
            <h3 className='specialists__sort-title'>
              Сортировка:
            </h3>
            <button
              className='specialists__sort-btn'
              onClick={toggleDropdown}
            >
              <p>
                {sortBy === "comments"
                  ? "Отзывам"
                  : sortBy === "rating"
                  ? "Рейтингу"
                  : "Подходящие"}
              </p>
              <img
                className={`specialists__sort-icon ${
                  isDropdownOpen ? "rotate" : ""
                }`}
                src={ArrowDown}
                alt='ArrowDown'
              />
            </button>
            {isDropdownOpen && (
              <ul className='specialists__sort-list'>
                <li
                  onClick={() =>
                    handleSortChange("comments")
                  }
                >
                  Отзывам
                </li>
                <li
                  onClick={() => handleSortChange("rating")}
                >
                  Рейтингу
                </li>
              </ul>
            )}
          </div>
          {data.map((data) => (
            <Specialist
              key={data.id}
              comments={data.comments}
              rating={data.rating}
              name={data.name}
              time={data.time}
              description={data.description}
              university={data.university}
              Fact={data.Fact}
              recommendation={data.recommendation}
              reviews={data.reviews}
              servicesone={data.servicesone}
              priceone={data.priceone}
              servicestwo={data.servicestwo}
              pricetwo={data.pricetwo}
              servicesthree={data.servicesthree}
              pricethree={data.pricethree}
              allservis={data.allservis}
              avatar={data.avatar}
            />
          ))}

          <button className='specialists__prew dissable'>
            Показать еще 20
          </button>
        </div>
      </section>
    </div>
  );
}

export default Specialists;
