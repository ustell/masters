/** @format */

import React from "react";
import axios from "axios";

import SpecialistsAvatar from "../../assets/img/specialists-avatar.jpg";
import Message from "../../assets/img/message.svg";
import ArrowDown from "../../assets/img/Arrow-down.svg";
import "./check.scss";
import "./style.scss";

function Specialist(props) {
  return (
    <div className='specialists__content'>
      <div className='specialists__block'>
        <div className='specialists__block-user'>
          <img
            className='specialists__block-avatar'
            src={props.avatar}
            alt=''
          />
          <div className='specialists__block-info'>
            <ul className='specialists__block-list'>
              <li>
                <a href=''>{props.name}</a>
              </li>
              <li>Была в сети вчера {props.time}</li>
            </ul>
            <div className='specialists__block-reviews'>
              <img
                className='specialists__block-reviews--img'
                src={Message}
                alt=''
              />
              <a href='/'>{props.comments} отзывов</a>
            </div>
          </div>
        </div>
        <div className='specialists__block-content'>
          <p className='specialists__block-content-text'>
            {props.description}
          </p>
        </div>

        <div className='specialists__block-specifications'>
          <ul className='specialists__block-specifications-list'>
            <li>
              <a href='/'>Образование и опыт</a>
            </li>
            <li>{props.university}</li>
            <li>
              <a href='/'>Все факты( {props.Fact} )</a>
            </li>
            <li>{props.recommendation}</li>
            <li>Стараеться</li>
            <li>
              <a href='/'>Отзывы( {props.reviews} )</a>
            </li>
            <li>
              <a href='/'>Услуги и цены</a>
            </li>
            <li>
              {props.servicesone} <p>{props.priceone}</p>
            </li>
            <li>
              {props.servicestwo} <p>{props.pricetwo}</p>
            </li>
            <li>
              {props.servicesthree}{" "}
              <p>{props.pricethree}</p>
            </li>
            <li>
              <a href='/'>
                Все услуги и цены({props.allservis})
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='specialists__message'>
        <div className='specialists__message-contact'>
          <button className='specialists__message-btn'>
            <a href=''>Написать Сообщение</a>
          </button>
          <p className='specialists__message-subtitle'>
            Вы сможете писать после заполнения заказа
          </p>
          <p className='specialists__message-work'>
            Работает дистанционно
          </p>
        </div>
      </div>
    </div>
  );
}

export default Specialist;
