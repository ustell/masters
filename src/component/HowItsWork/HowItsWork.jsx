/** @format */

import React, { useState, useEffect } from "react";

import "../../scss/components/howItsWork.scss";
import Meeting from "./Meeting";
import { CheckBox } from "../ui/CheckBox";
import { Profile } from "./Profile";
import { Chat } from "./Chat";

function HowWork() {
  return (
    <div className='work'>
      <h3 className='work__title'>Как это работает</h3>

      <div className='work__block'>
        <Meeting />
        <Profile />
        <div className='work__block-item pink'>
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default HowWork;
