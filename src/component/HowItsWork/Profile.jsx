/** @format */

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import profile from "../../assets/img/profile.png";
import profiletwo from "../../assets/img/imgAnimation/profile (1).png";
import profilethree from "../../assets/img/imgAnimation/profile (2).png";
import Star from "../../assets/img/smallStar.svg";

const profiles = [
  {
    id: 1,
    img: profile,
    name: "Игорь",
    rating: "5,0",
    text: "Добрый утро готов помочь!",
  },
  {
    id: 2,
    img: profiletwo,
    name: "Маша",
    rating: "4,3",
    text: "Здравствуйте! Живу не далеко",
  },
  {
    id: 3,
    img: profilethree,
    name: "Гарик",
    rating: "4,8",
    text: "Добрый вечер! Когда нужна услуга?",
  },
];

export const Profile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    }, 1800);

    return () => clearInterval(intervalId);
  }, [profiles.length]);

  return (
    <div className="work__block-item orange">
      <AnimatePresence >
        {profiles.map((profileData, index) => (
          <motion.div
            key={profileData.id}
            initial={{ opacity: 1 }}
            animate={{
              opacity: activeIndex === index ? 1 : 0,
              y: activeIndex === index ? 0 : 1,
            }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 1 }}
            style={{ position: "absolute" }}
          >
            <div className="profile-block">
              <div className="profile-item">
                <div className="profile-list">
                  <img
                    className="profile-img"
                    src={profileData.img}
                    alt="profile"
                  />
                  <div className="profile-block-text">
                    <div className="profile-name">
                      <p>{profileData.name}</p>{" "}
                      <img
                        src={Star}
                        className="star-img"
                        alt="star"
                      />
                      {profileData.rating}
                    </div>
                    <div className="name-text">
                      {profileData.text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};