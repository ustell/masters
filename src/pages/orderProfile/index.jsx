/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Path } from "../../path";
import arrowBlack from "../../assets/img/iconFilter/arrowBlack.png";
import arrowWhite from "../../assets/img/iconFilter/arrow.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../layout/Layout";

import "./style.scss";
import { fetchUpdatedUser } from "../../redux/features/authSlice";

function OrderProfile({ userName, userID }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profile =
    typeof userName === "string"
      ? userName.charAt(0).toUpperCase()
      : "";
  const logout = () => {
    localStorage.removeItem("telephone");
    window.location.reload();
  };

  const data = JSON.parse(localStorage.getItem("orderAll"));
  const minPrice = data?.minPrice;
  const maxPrice = data?.maxPrice;
  const selectedOption = data?.selectedOption;
  const option = data?.selectedOption2;
  console.log(option);
  const title = useSelector(
    (state) => state.order?.categories[0]?.category,
  );
  console.log(title);
  const telephone = localStorage.getItem("telephone");

  const orderCreate = async () => {
    await dispatch(
      fetchUpdatedUser({
        telephone,
        title,
        minPrice,
        maxPrice,
        selectedOption,
        option,
      }),
    );
    navigate(Path.myOrder);
  };

  return (
    <>
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
    </>
  );
}

export default OrderProfile;
