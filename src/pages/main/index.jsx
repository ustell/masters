/** @format */

import Connection from "../../component/Connection/Connection";
import { Footer } from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import HowWork from "../../component/HowItsWork/HowItsWork";
import MainBLock from "../../component/MainBlock/MainBlock.jsx";
import Popular from "../../component/Popular/Popular.jsx";
import Region from "../../component/Region/Region";
import Reviews from "../../component/Reviews/Reviews";

function Main() {
  return (
    <>
      <Header />
      <MainBLock />
      <Popular />
      <Region />
      <Connection />
      <HowWork />
      <Reviews />
      <Footer />
    </>
  );
}

export default Main;
