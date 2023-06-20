/** @format */

import React from "react";

import Block from "./PopularBlock";

import Psiholog from "../../assets/img/psyxology.jpg";
import English from "../../assets/img/programmist.jpg";
import Santexnic from "../../assets/img/santexnic.jpg";
import Clining from "../../assets/img/clining.jpg";
import Massage from "../../assets/img/massage.jpg";

const image = [
  {
    id: 1,
    text: "Психология",
    img: Psiholog,
    alt: "Психология",
  },
  {
    id: 2,
    text: "Английский язык",
    img: English,
    alt: "Английский язык",
  },
  {
    id: 3,
    text: "Сантехник",
    img: Santexnic,
    alt: "Сантехник",
  },
  {
    id: 4,
    text: "Уборка",
    img: Clining,
    alt: "Уборка",
  },
  {
    id: 5,
    text: "Массаж",
    img: Massage,
    alt: "Массаж",
  },
];

// Programmer, Santexnic, Clining, Massage

function Popular() {
  return (
    <section className="actual">
      {image.map((item, i) => (
       <Block text={item.text} img={item.img} alt={item.alt} key={item.id} />
      ))}
    </section>
  );
}


export default Popular;
