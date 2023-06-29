/** @format */

import React, { useMemo } from "react";
import Header from "../component/Header/Header";
import { Footer } from "../component/Footer/Footer";
import { Path } from "../path";

export const Layout = ({ children }) => {
  const currentPath = useMemo(
    () => window.location.pathname,
    [],
  );

  let footerComponent = null;

  if (
    currentPath === "/" ||
    currentPath === "/home" ||
    currentPath === "/specialist" ||
    currentPath === "/notfound" ||
    currentPath === "/order/specialist"
  ) {
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
