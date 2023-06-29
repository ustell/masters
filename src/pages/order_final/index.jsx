/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../component/Header/Header";

import "./style.scss";

import { AsideNav } from "../FilterPages/AsideNav";
import { NotClient } from "./notClient";
import OrderProfile from "../orderProfile/index";
import { Layout } from "../../layout/Layout";

function OrderCreateProfile() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("telephone");

  const name = "name";
  const id = 1;
  console.log(name);
  const res = useSelector(
    (state) => state.user?.data?.name,
  );

  useEffect(() => {
    const token = localStorage.getItem("telephone");
    console.log(token);
    if (token) {
    }
  }, []);

  return (
    <Layout>
      <div className='conteiner__time'>
        <AsideNav />
        <section className='main__aside'>
          {token ? (
            <OrderProfile userName={res} userID={id} />
          ) : (
            <NotClient />
          )}
        </section>
      </div>
    </Layout>
  );
}

export default OrderCreateProfile;
