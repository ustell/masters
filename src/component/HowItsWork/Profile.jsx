/** @format */

import React from "react";
import "../../scss/components/howItsWork.scss";
import profile from "../../assets/img/profile.png";
import Star from "../../assets/img/smallStar.svg";

export const Profile = () => {
  return (
    <div className='work__block-item orange'>
      <div className='profile-block'>
        <div className='profile-item'>
          <div className='profile-list'>
            <img
              className='profile-img'
              src={profile}
              alt='profile'
            />
            <div className='profile-block-text'>
              <div className='profile-name'>
                <p>Игорь</p>{" "}
                <img
                  src={Star}
                  className='star-img'
                  alt='star'
                />
                5,0
              </div>
              <div className='name-text'>
                Добрый день готов помочь!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='profile-block'>
        <div className='profile-item'>
          <div className='profile-list'>
            <img
              className='profile-img'
              src={profile}
              alt='profile'
            />
            <div className='profile-block-text'>
              <div className='profile-name'>
                <p>Игорь</p>{" "}
                <img
                  src={Star}
                  className='star-img'
                  alt='star'
                />
                5,0
              </div>
              <div className='name-text'>
                Добрый день готов помочь!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='profile-block'>
        <div className='profile-item'>
          <div className='profile-list'>
            <img
              className='profile-img'
              src={profile}
              alt='profile'
            />
            <div className='profile-block-text'>
              <div className='profile-name'>
                <p>Игорь</p>{" "}
                <img
                  src={Star}
                  className='star-img'
                  alt='star'
                />
                5,0
              </div>
              <div className='name-text'>
                Добрый день готов помочь!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
