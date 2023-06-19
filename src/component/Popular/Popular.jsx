/** @format */

import React from "react";

import Psiholog from "../../assets/img/psiholog.png";
import Block from "./PopularBlock";

import "../../scss/components/Popular.scss";

function Popular() {
  return (
    <div className='actual'>
      <Block
        text={"Психология"}
        img={Psiholog}
        alt={"психология"}
      />
      <Block
        text={"Психология"}
        img={Psiholog}
        alt={"психология"}
      />
      <Block
        text={"Психология"}
        img={Psiholog}
        alt={"психология"}
      />
      <Block
        text={"Психология"}
        img={Psiholog}
        alt={"психология"}
      />
      <Block
        text={"Психология"}
        img={Psiholog}
        alt={"психология"}
      />
    </div>
  );
}

export default Popular;
