import React from "react";
import { motion } from "framer-motion";
import "../../scss/components/checkBox.scss";

export const CheckBox = ({ text, checked, onClick }) => {
  const checkBoxVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleChange = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.div
      className={`block-checkbox ${checked ? "activeCheckBox" : ""}`}
      initial="hidden"
      animate="visible"
      variants={checkBoxVariants}
      transition={{ duration: 0.3 }}
    >
      <label className="custom-checkbox">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className="checkmark"></span>
      </label>
      <motion.p className="text" variants={checkBoxVariants}>{text}</motion.p>
    </motion.div>
  );
};