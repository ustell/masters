import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';



function SpecialistHowWorkBlock() {
  const controlsLeft1 = useAnimation();
  const controlsLeft2 = useAnimation();
  const controlsRight1 = useAnimation();
  const controlsRight2 = useAnimation();
  const specialistHowWorkBlock = useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = specialistHowWorkBlock.current;

      if (scrollPosition > element.offsetTop - windowHeight * 0.8) {
        controlsLeft1.start('visible');
        controlsLeft2.start('visible');
        controlsRight1.start('visible');
        controlsRight2.start('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controlsLeft1, controlsLeft2, controlsRight1, controlsRight2]);

  return (
    <section className="specialistHowWorkBlock" ref={specialistHowWorkBlock}>
      <motion.h3
        initial={{ opacity: 0, x: -100 }}
        animate={controlsLeft1}
        transition={{ duration: 0.5 }}
        variants={{
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        className="section__title">
        Как это работает?
      </motion.h3>

      <div className="specialistHowWorkBlock__content">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={controlsLeft1}
          transition={{ duration: 0.5 }}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          className="specialistHowWorkBlock__steps">
          <h3 className="specialistHowWorkBlock__count">1</h3>
          <p className="specialistHowWorkBlock__text">
            Клиенты создают заказы описывают детали и предлагают цену
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controlsLeft2}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          className="specialistHowWorkBlock__steps">
          <h3 className="specialistHowWorkBlock__count">2</h3>
          <p className="specialistHowWorkBlock__text">Вы выбираете интересные заказы</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={controlsRight1}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          className="specialistHowWorkBlock__steps">
          <h3 className="specialistHowWorkBlock__count">3</h3>
          <p className="specialistHowWorkBlock__text">
            Откликаетесь и договариваетесь с клиентами о цене и деталях в чате
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={controlsRight2}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          className="specialistHowWorkBlock__steps">
          <h3 className="specialistHowWorkBlock__count">4</h3>
          <p className="specialistHowWorkBlock__text">
            Выполняете заказы и получаете оплату напрямую от клиентов
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default SpecialistHowWorkBlock;
