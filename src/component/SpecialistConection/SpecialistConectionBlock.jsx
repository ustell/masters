import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';


import Phone from '../../assets/img/Masters (2).png';
import Google from '../../assets/img/google.png';
import Appstore from '../../assets/img/appstore.png';

function SpecialistConectionBlock() {
  const controls = useAnimation();
  const specialistConectionBlock = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const element = specialistConectionBlock.current;

    if (element) {
      // Проверка на наличие значения element
      const elementPosition = element.offsetTop;
      const windowHeight = window.innerHeight;

      if (scrollPosition > elementPosition - windowHeight * 0.8) {
        controls.start('visible');
      }
    }
  };

  return (
    <section className="specialistConectionBlock">
      <motion.div className="specialistConectionBlock__block">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          className="specialistConectionBlock__phone">
          <img className="specialistConectionBlock__img" src={Phone} alt="" />
        </motion.div>
        <div className="specialistConectionBlock__content">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="specialistConectionBlock__title__end">
            <h2 className="specialistConectionBlock__title">
              С приложением <span>Для Специалистов</span>
            </h2>
            <h2 className="specialistConectionBlock__title">ещё удобнее</h2>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="specialistConectionBlock__subtitle">
            Установите по ссылке из СМС
          </motion.span>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="specialistConectionBlock__feedback">
            <input
              className="specialistConectionBlock__feedback-inp"
              placeholder="+7 123-456-78-90"
              type="tel"
              name=""
              id=""
            />
            <button className="specialistConectionBlock__feedback-btn">Получить ссылку</button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="specialistConectionBlock__download">
            <img className="specialistConectionBlock__download-link" src={Google} alt="" />
            <img className="specialistConectionBlock__download-link" src={Appstore} alt="" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default SpecialistConectionBlock;
