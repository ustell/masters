/** @format */

import React from "react";

export const Profile = () => {
  return (
    <div className='reviews__item'>
      <div className='reviews__users'>
        <div className='reviews__avatar'>
          <img
            className='reviews__img'
            src={Masters}
            alt='avatar'
          />
        </div>
        <div className='reviews__info'>
          <p className='reviews__name'>Эмель Айкач</p>
          <span className='reviews__state'>
            <span>
              <img
                className='revoews__state-star'
                src={Star}
                alt=''
              />
              4.9
            </span>
            <span>236 отзывов</span>
            <span>Очень хвалят</span>
          </span>
        </div>
      </div>
      <div className='reviews__content'>
        <div className='reviews__content-title'>
          Юлия оставила отзыв
          <div className='reviews__content-stars'>
            <img src={BgStar} alt='star' />
            <img src={BgStar} alt='star' />
            <img src={BgStar} alt='star' />
            <img src={BgStar} alt='star' />
            <img src={BgStar} alt='star' />
          </div>
        </div>
        <div className='reviews__content-subtitle'>
          Всё отлично! Спасибо!
        </div>
        <div className='reviews__content-translate'>
          Перевод
        </div>
      </div>
    </div>
  );
};
