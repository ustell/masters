/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserName } from "../../redux/features/authSlice";
import Header from "../../component/Header/Header";

import "./style.scss";

import { AsideNav } from "../FilterPages/AsideNav";
import { NotClient } from "./notClient";
import OrderProfile from "../orderProfile/index";

function OrderCreateProfile() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const userName = useSelector(
    (state) => state.auth.userName?.data?.name,
  );
  const userID = useSelector(
    (state) => state.auth.userName?.data?.id,
  );

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(fetchUserName({ token }));
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className='conteiner__time'>
        <AsideNav />
        <section className='main__aside'>
          {token ? (
            <OrderProfile
              userName={userName}
              userID={userID}
            />
          ) : (
            <NotClient />
          )}
        </section>
      </div>
    </>
  );
}

export default OrderCreateProfile;
