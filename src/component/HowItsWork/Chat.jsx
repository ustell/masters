import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../scss/components/howItsWork.scss";
import profile from "../../assets/img/profile.png";
import Star from "../../assets/img/smallStar.svg";

const messages = [
  { id: "message-1", text: "Все вместе 1000 лир" },
  { id: "message-2", text: "Когда вам удобно?" },
];

export const Chat = () => {
  const [visibleMessageIndex, setVisibleMessageIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 1800);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="chat">
      <div className="chat__user">
        <div className="chat__contact">
          <div className="chat__avatar">
            <img className="chat__avatar-img" src={profile} alt="avatar" />
          </div>
          <div className="chat__name">
            <p className="chat__name-title">Игорь</p>
            <div className="chat__evaluation">
              <span className="chat__evaluation-star">
                <img className="chat__evaluation-img" src={Star} alt="" />
              </span>
              <span className="chat__evaluation-count">5,0</span>
              <span>34 отзывов</span>
            </div>
          </div>
        </div>
        <div className="chat__message">
          <AnimatePresence initial={false}>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                className="chat__text"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: visibleMessageIndex === index ? 2 : 0,
                  y: visibleMessageIndex === index ? 0 : 20,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 1,
                  type: "spring",
                }}
                exit={{ opacity: 0, y: -20 }}
              >
                {message.text}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
