/** @format */

import React from "react";

import "../../scss/components/howItsWork.scss";
import profile from "../../assets/img/profile.png";
import Star from "../../assets/img/smallStar.svg";

export const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat__user'>
        <div className='chat__contact'>
          <div className='chat__avatar'>
            <img
              className='chat__avatar-img'
              src={profile}
              alt='avatar'
            />
          </div>
          <div className='chat__name'>
            <p className='chat__name-title'>Игорь</p>
            <div className='chat__evaluation'>
              <span className='chat__evaluation-star'>
                <img
                  className='chat__evaluation-img'
                  src={Star}
                  alt=''
                />
              </span>
              <span className='chat__evaluation-count'>
                5,0
              </span>
              <span>34 отзывов</span>
            </div>
          </div>
        </div>
        <div className='chat__message'>
          <div className='chat__text'>
            Все вместе 1100 лир
          </div>
          <div className='chat__text'>
            Когда вам удобно?
          </div>
        </div>
      </div>
    </div>
  );
};
