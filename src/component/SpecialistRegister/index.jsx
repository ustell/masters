import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../../scss/components/SpecialistPrice.scss';

function SpecialistPriceBlock() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const specialistPriceBlock = useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = specialistPriceBlock.current;

      if (scrollPosition > element.offsetTop - windowHeight * 0.8) {
        controlsLeft.start('visible');
        controlsRight.start('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controlsLeft, controlsRight]);

  return (
    <section ref={specialistPriceBlock} className="specialistPriceBlock">
      <motion.h3
        initial={{ opacity: 0, x: -100 }}
        animate={controlsLeft}
        transition={{ duration: 0.5 }}
        variants={{
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        className="section__title specialistPriceBlock__title"
        id="specialistPriceBlock">
        Тарифы
      </motion.h3>
      <motion.div className="specialistPriceBlock__block">
        <motion.ul
          initial={{ opacity: 0, x: -100 }}
          animate={controlsLeft}
          transition={{ duration: 0.5 }}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          className="specialistPriceBlock__list specialistPriceBlock__pink">
          <li>
            <p className="specialistPriceBlock__list-title">Плата за отклик</p>
          </li>
          <li>
            <p>Вы платите сразу, за предложение услуг.</p>
            <p>Больше комиссий нет, но не каждый отклик приводит к заказу.</p>
          </li>
          <li>
            <p>Для первого заказа обычно нужно 7-10 откликов</p>
          </li>
        </motion.ul>

        <motion.ul
          initial={{ opacity: 0, x: 100 }}
          animate={controlsRight}
          transition={{ duration: 0.5 }}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          className="specialistPriceBlock__list specialistPriceBlock__yellow">
          <li>
            <p className="specialistPriceBlock__list-title">Комиссия за заказ</p>
          </li>
          <li>
            <p>Вы платите потом, если получите заказ.</p>
            <p>Откликнуться можно бесплатно.</p>
          </li>
          <li>
            <p>Тариф откроется после 10 платных откликов</p>
          </li>
        </motion.ul>
      </motion.div>
    </section>
  );
}

export default SpecialistPriceBlock;
