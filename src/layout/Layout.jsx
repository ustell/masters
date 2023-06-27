/** @format */

import React from "react";
import Header from "../component/Header/Header";
import { Footer } from "../component/Footer/Footer";
import { Path } from "../path";

export const Layout = ({ children }) => {
  const currentPath = window.location.pathname;

  let footerComponent = null;
  if (currentPath === "/" || currentPath === "/home") {
    footerComponent = <Footer />;
  }

  return (
    <>
      <Header />
      {children}
      {footerComponent}
    </>
  );
};
