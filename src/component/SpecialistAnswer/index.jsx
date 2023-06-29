import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Reading from '../../assets/img/reading.png';



function SpecialistAnswerBlock() {
  const controls = useAnimation();
  const specialistAnswerBlock = useRef(null);
  const [elementRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const element = specialistAnswerBlock.current;
    const elementPosition = element.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition > elementPosition - windowHeight * 0.8) {
      controls.start('visible');
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="specialistAnswerBlock">
      <div ref={elementRef}>
        <motion.h3
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.3 }} // Добавляем задержку в 0.3 секунды
          variants={{
            visible: {
              x: 0,
            },
          }}
          className="section__title specialistAnswerBlock__title">
          Остались вопросы?
          <span>Сейчас всё расскажем</span>
        </motion.h3>
        <div className="specialistAnswerBlock__chat" ref={specialistAnswerBlock}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 0.5 }} // Добавляем задержку в 0.5 секунды
            variants={{
              visible: {
                x: 100,
              },
            }}
            className="specialistAnswerBlock__item">
            <p className="specialistAnswerBlock__text">
              Как с вами зарабатывать?
              <span>11:50</span>
              <img className="specialistAnswerBlock__img" src={Reading} alt="" />
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.7 }} // Добавляем задержку в 0.7 секунды
            variants={{
              visible: {
                x: -100,
              },
            }}
            className="specialistAnswerBlock__item">
            <p className="specialistAnswerBlock__text">
              Выберите подходящий заказ на сайте или в приложении.
              <span>11:50</span>
              <img className="specialistAnswerBlock__img" src={Reading} alt="" />
            </p>
            <motion.p
              className="specialistAnswerBlock__text"
              initial={{ opacity: 0, x: -200 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
              transition={{ duration: 1, delay: 0.9 }} // Добавляем задержку в 0.9 секунды
              variants={{
                visible: {
                  x: -200,
                },
              }}>
              Отправьте отклик — своё предложение клиенту.
              <span>11:50</span>
              <img className="specialistAnswerBlock__img" src={Reading} alt="" />
            </motion.p>
            <motion.p
              className="specialistAnswerBlock__text"
              initial={{ opacity: 0, x: -300 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
              transition={{ duration: 1, delay: 1.1 }} // Добавляем задержку в 1.1 секунды
              variants={{
                visible: {
                  x: -300,
                },
              }}>
              Выберите подходящий заказ на сайте или в приложении.
              <span>11:50</span>
              <img className="specialistAnswerBlock__img" src={Reading} alt="" />
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1,
              },
            },
            hidden: {
              opacity: 0,
              scale: 0.8,
            },
          }}
          transition={{ duration: 1, delay: 1.1 }}
          className="specialistAnswerBlock__hint">
          <div className="specialistAnswerBlock__hint-content">
            <p className="specialistAnswerBlock__text">Кто без отзывов меня выберет?</p>
            <p className="specialistAnswerBlock__text">А если клиент пропадёт?</p>
            <p className="specialistAnswerBlock__text">Я в минусе не останусь?</p>
            <p className="specialistAnswerBlock__text">Точно заказ достанется мне?</p>
            <p className="specialistAnswerBlock__text">Зачем вам платить?</p>
            <p className="specialistAnswerBlock__text">
              Если я плачу отклик, а заказ мне не подходит
            </p>
            <p className="specialistAnswerBlock__text">Как именно платить?</p>
            <p className="specialistAnswerBlock__text">Стоп, а мне кто платит?</p>
            <p className="specialistAnswerBlock__text">Клиенты настоящие?</p>
            <p className="specialistAnswerBlock__text">
              Зачем скачивать приложение? Чем оно лучше сайта?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SpecialistAnswerBlock;
