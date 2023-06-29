import React from 'react';



import QR from '../../assets/img/QR.png';

import Input from '../input/Input';
import Btn from '../Btn/Btn';

function SpecialistRegisterBlock() {
  return (
    <section className="SpecialistRegisterBlock">
      <div className="SpecialistRegisterBlock__block">
        <h3 className="SpecialistRegisterBlocktitle sectiontitle">
          Зарегестрируйтесь по номеру телефона
        </h3>
        <div className="SpecialistRegisterBlock__reg">
        <input
        className='search__input Input'
        type='text'
        value={''}
        onChange={''}
        placeholder={'+7 777 777 777'}
          />
          <button className='search__btn search__spectialist'>{'Зарегестрироваться'}</button>
        </div>
      </div>
      <div className="SpecialistRegisterBlock-block">
        <div className="SpecialistRegisterBlock__content">
          <img src={QR} alt="" className="SpecialistRegisterBlock__img" />
          <p className="SpecialistRegisterBlock__subtitle"> Наведите камеру телефона, чтобы отсканировать QR- код и скачать приложение </p>
        </div>
      </div>
    </section>
  );
}

export default SpecialistRegisterBlock;