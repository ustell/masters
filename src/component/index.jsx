import React, { useState } from 'react';

import { motion, useAnimation } from 'framer-motion';

import SpecialistMain from '../../assets/img/specialist-main.jpg';

import '../../scss/components/SpecialistMain.scss';

function SpecialistMainBlock() {
  const controls = useAnimation();

  return (
    <motion.main className="SpecialistMain">
      <div className="SpecialistMain__content">
        <h1 className="SpecialistMain__title">
          Зарабатывайте <span>на том, что умеете </span>
        </h1>
        <div className="SpecialistMain__subtitle">
          <span className="SpecialistMain__subtitle">
            Более 500 000 заказов в месяц в приложении
          </span>
        </div>
      </div>
      <div className="SpecialistMain__phone">
        <img className="SpecialistMain__img" src={SpecialistMain} alt="iphone" />
      </div>
    </motion.main>
  );
}

export default SpecialistMainBlock;
