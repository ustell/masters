/** @format */

import React from "react";

import "../../scss/components/meeting.scss";
import "../../scss/components/howItsWork.scss";
import { CheckBox } from "../ui/CheckBox";
function Meeting() {
  return (
    <div className='work__block-item red'>
      <div className='work__block-content'>
        <div className='items'>
          <p className='items-text'>
            Когда вам удобно встретиться
          </p>
          <CheckBox text={"Утром"} />
          <CheckBox text={"Днем "} />
          <CheckBox text={"Вечером"} />
        </div>
      </div>
    </div>
  );
}

export default Meeting;
