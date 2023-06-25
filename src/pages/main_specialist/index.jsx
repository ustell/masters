/** @format */

import React from "react";

import "./style.scss";

import SpecialistMainBlock from "../../component/spesialistMain";
import SpecialistRegisterBlock from "../../component/SpecialistRegister";
import SpecialistHowWorkBlock from "../../component/SpecialistHowWork";
import SpecialistPriceBlock from "../../component/SpecialistPrice";
import SpecialistAnswerBlock from "../../component/SpecialistAnswer";
import SpecialistConectionBlock from "../../component/SpecialistConection/SpecialistConectionBlock";
import SpecialistRegion from "../../component/SpecialistRegion/SpecialistRegion";
import Header from "../../component/Header/Header";
import { Footer } from "../../component/Footer/Footer";

function MainSpecialist() {
  return (
    <>
      <Header />
      <SpecialistMainBlock />

      <SpecialistRegisterBlock />

      <SpecialistHowWorkBlock />

      <SpecialistPriceBlock />

      <SpecialistAnswerBlock />

      <SpecialistConectionBlock />

      <SpecialistRegion />
      <Footer />
    </>
  );
}

export default MainSpecialist;
