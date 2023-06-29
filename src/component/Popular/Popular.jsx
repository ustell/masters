/** @format */

import React from "react";

import Block from "./PopularBlock";

import Psiholog from "../../assets/img/psyxology.jpg";
import English from "../../assets/img/programmist.jpg";
import Santexnic from "../../assets/img/santexnic.jpg";
import Freelance from "../../assets/img/freelance.jpg";
import Sport from "../../assets/img/sport.jpg";

const image = [
  {
    id: 1,
    text: "Психологи",
    img: Psiholog,
    alt: "Психологи",
    link: "Ищете кого-то ещё?",
  },
  {
    id: 2,
    text: "Английский язык",
    img: English,
    alt: "Английский язык",
    link: "Репетиторы",
  },
  {
    id: 3,
    text: "Сантехник",
    img: Santexnic,
    alt: "Сантехник",
    link: "Мастера по ремонту",
  },
  {
    id: 4,
    text: "Фрилансеры",
    img: Freelance,
    alt: "Фрилансеры",
    link: "Фрилансеры",
  },
  {
    id: 5,
    text: "Спортивные тренера",
    img: Sport,
    alt: "Спортивные тренера",
    link: "Спортивные тренера",
  },
];

// Programmer, Santexnic, Clining, Massage

function Popular() {
  return (
    <section className='actual'>
      {image.map((item, i) => (
        <Block
          text={item.text}
          img={item.img}
          alt={item.alt}
          key={item.id}
          link={item.link}
        />
      ))}
    </section>
  );
}

export default Popular;
