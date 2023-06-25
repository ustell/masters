import { useSpring, animated } from 'react-spring';

function Counter() {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: 100000 },
    config: { duration: 5000, easing: getEasing },
  });

  return <animated.span>{number.interpolate((value) => Math.floor(value))}</animated.span>;
}

function getEasing(value) {
  if (value < 90000) {
    return (t) => t; // Без замедления до счета 90000
  } else {
    return (t) => 1 - (1 - t) * 0.1; // Замедление на 90% после счета 90000
  }
}

export default Counter;
