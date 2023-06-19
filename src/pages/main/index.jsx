/** @format */

import Connection from "../../component/Connection/Connection";
import HowWork from "../../component/HowItsWork/HowItsWork";
import MainBLock from "../../component/MainBlock/MainBlock.jsx";
import Popular from "../../component/Popular/Popular.jsx";
import Region from "../../component/Region/Region";
import Reviews from "../../component/Reviews/Reviews";

function Main() {
  return (
    <div className='Main'>
      <div className='container'>
        <MainBLock />
        <Popular />
        <Region />
        <Connection />
        <HowWork />
        <Reviews />
      </div>
    </div>
  );
}

export default Main;
