/** @format */

import Connection from "../../component/Connection/Connection";

import HowWork from "../../component/HowItsWork/HowItsWork";
import MainBLock from "../../component/MainBlock/MainBlock.jsx";
import Popular from "../../component/Popular/Popular.jsx";
import Region from "../../component/Region/Region";
import Reviews from "../../component/Reviews/Reviews";
import { Layout } from "../../layout/Layout";

function Main() {
  return (
    <Layout>
      <MainBLock />
      <Popular />
      <Region />
      <Connection />
      <HowWork />
      <Reviews />
    </Layout>
  );
}

export default Main;
