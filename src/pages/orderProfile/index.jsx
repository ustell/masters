/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Path } from "../../path";
import arrowBlack from "../../assets/img/iconFilter/arrowBlack.png";
import arrowWhite from "../../assets/img/iconFilter/arrow.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./style.scss";
import { fetchCreateOrder } from "../../redux/features/orderSlice";

function OrderProfile({ userName, userID }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profile =
    typeof userName === "string"
      ? userName.charAt(0).toUpperCase()
      : "";
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const data = localStorage.getItem("order");

  const title = localStorage.getItem("title");

  const orderCreate = async () => {
    await dispatch(
      fetchCreateOrder({
        id: userID,
        title: title,
        service: title,
      }),
    );
    navigate(Path.myOrder);
  };

  return (
    <div className='orderProfile'>
      <h2 className='orderProfile__title'>
        Заказ почти создан
      </h2>

      <div className='orderProfile__user'>
        <div className='orderProfile__user-content'>
          <div className='orderProfile__user-content-ava'>
            <p className='orderProfile__user-content--avatar'>
              {profile}
            </p>
            <div className='orderProfile__user-content--online'></div>
          </div>
          <div className='orderProfile__user-content--name'>
            <p className='orderProfile__user-content--title'>
              {userName}
            </p>
            <p className='orderProfile__user-content--subtitle'>
              на сервисе с 2023 г.
            </p>
          </div>
        </div>
        <a
          onClick={logout}
          className='orderProfile__user-relog'
        >
          Сменить аккаунт
        </a>
      </div>

      <div className='filter__Goback'>
        <Link
          className='filter__Goback--link'
          to={Path.aside}
        >
          <img src={arrowBlack} alt='arrow' />
        </Link>
        <button
          onClick={orderCreate}
          className='filter__btn'
        >
          Опубликовать заказ
          <img src={arrowWhite} alt='arrow' />
        </button>
      </div>
    </div>
  );
}

export default OrderProfile;
