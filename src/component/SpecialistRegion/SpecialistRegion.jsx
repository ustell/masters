import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {  animated } from 'react-spring';

import '../../scss/components/SpecialistRegion.scss';

import WorkSheet from '../Region/Worksheet';
import Counter from './count';

function SpecialistRegion() {
  const controls = useAnimation();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const footerElement = document.getElementById('region');

      if (scrollPosition > footerElement.offsetTop - windowHeight * 0.8) {
        controls.start('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  //  анимация
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const elementRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const { top } = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (top < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Проверяем видимость при загрузке страницы

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animationDuration = 2000; // Длительность анимации в миллисекундах
      const framesPerSecond = 60; // Количество кадров в секунду
      const totalFrames = animationDuration / (3000 / framesPerSecond);
      const increment = Math.ceil(12008492 / totalFrames);

      const animation = setInterval(() => {
        if (count < 12008492) {
          setCount((prevCount) => prevCount + increment);
        } else {
          setCount(12008492);
          clearInterval(animation);
        }
      }, 1000 / framesPerSecond);

      return () => clearInterval(animation);
    }
  }, [count, isVisible]);

  return (
    <motion.section className="region" id="region">
      <motion.p className="region__title" ref={elementRef}>
        <animated.span>{count.toLocaleString()} </animated.span>
        клиента доверили дела мастерам
      </motion.p>
      <WorkSheet />
    </motion.section>
  );
}

export default SpecialistRegion;
