/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../component/Header/Header";

import "./style.scss";

import { AsideNav } from "../FilterPages/AsideNav";
import { NotClient } from "./notClient";
import OrderProfile from "../orderProfile/index";

function OrderCreateProfile() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const name = "name";
  const id = 1;
  console.log(name);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
    }
  }, []);

  return (
    <>
      <Header />
      <div className='conteiner__time'>
        <AsideNav />
        <section className='main__aside'>
          {token ? (
            <OrderProfile userName={name} userID={id} />
          ) : (
            <NotClient />
          )}
        </section>
      </div>
    </>
  );
}

export default OrderCreateProfile;
