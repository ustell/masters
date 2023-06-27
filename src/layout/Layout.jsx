/** @format */

import React from "react";
import Header from "../component/Header/Header";
import { Footer } from "../component/Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
