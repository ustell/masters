  /** @format */

  import React from "react";
  import { motion } from "framer-motion";
  import { useInView } from "react-intersection-observer";
  import { CheckBox } from "../ui/CheckBox";

  function Meeting() {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

    const checkBoxVariants = {
      hidden: { opacity: 1, x: 0 },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 0 }, // Анимация исчезновения
    };

    const checkboxData = [
      { id: "morning", text: "Утром" },
      { id: "afternoon", text: "Днем" },
      { id: "evening", text: "Вечером" },
    ];

    const [activeId, setActiveId] = React.useState("morning");

    React.useEffect(() => {
      let timeoutId;
      if (inView) {
        timeoutId = setTimeout(() => {
          const currentIndex = checkboxData.findIndex((item) => item.id === activeId);
          const nextIndex = (currentIndex + 1) % checkboxData.length;
          setActiveId(checkboxData[nextIndex].id);
        }, 1800);
      }

      return () => clearTimeout(timeoutId);
    }, [inView, activeId, checkboxData]);

    const handleCheckBoxClick = (id) => {
      setActiveId(id);
    };

    return (
      <motion.div
        className="work__block-item red"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={checkBoxVariants}
        transition={{ duration: 0.3 }}
        ref={ref}
      >
        <div className="work__block-content">
          <div className="items">
            <p className="items-text">Когда вам удобно встретиться</p>
            {checkboxData.map(({ id, text }) => (
              <CheckBox
                key={id}
                text={text}
                checked={activeId === id}
                onClick={() => handleCheckBoxClick(id)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  export default Meeting;
