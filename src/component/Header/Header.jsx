/** @format */

import React, { useEffect } from "react";
import DropdownMenu from "./DropDown";
import { DropDownProfile } from "./DropDownProfile";
import { DropdownSpecialist } from "./DropdownSpecialist";
import { DropdownSpecialistProfile } from "./DropdownSpecialistProfile";
import Logo from "../../assets/img/МАСТЕРА.svg";
import { Link } from "react-router-dom";
import { Path } from "../../path";
import { useDispatch } from "react-redux";
import { fetchUpdatedUserName } from "../../redux/features/authSlice";
import axios from "axios";
import { fetchCategories } from "../../redux/features/orderSlice";

function Header() {
  const [useUser, setUseUser] = React.useState(true);
  const [useFio, setUseFio] = React.useState(
    "Александр Курчаков",
  );
  const dispatch = useDispatch();
  const cities = [
    {
      id: 1,
      sity: "Стамбул",
    },
    {
      id: 2,
      sity: "Анкара",
    },
    {
      id: 3,
      sity: "Измир",
    },
    {
      id: 4,
      sity: "Бурса",
    },
    {
      id: 5,
      sity: "Конья",
    },
    {
      id: 6,
      sity: "Бодрум",
    },
    {
      id: 7,
      sity: "Кемер",
    },
    {
      id: 8,
      sity: "Анталия",
    },
    {
      id: 9,
      sity: "Мармарис",
    },
  ];

  useEffect(() => {
    const telephone = localStorage.getItem("telephone");
    if (telephone) {
      dispatch(fetchUpdatedUserName(telephone))
        .then((action) => {
          const updatedUserName = action.payload.name;
          setUseFio(updatedUserName);
          setUseUser(false);
        })
        .catch((error) => {
          console.error(
            "Error fetching updated user name:",
            error,
          );
        });
    }
  }, [dispatch]);

  return (
    <header className='header'>
      <nav className='header__menu'>
        <ul className='header__menu-left'>
          <li>
            <Link to={Path.home}>
              <img src={Logo} alt='logo' />
            </Link>
          </li>
          <li>
            <DropdownMenu
              text={"Стамбул"}
              cities={cities}
            />
          </li>
        </ul>
        {useUser ? (
          <ul className='header__menu-rigth'>
            <li>
              <DropdownSpecialist text={"Специалисты"} />
            </li>
            <li>
              <Link to={Path.register}>Войти</Link>
            </li>
          </ul>
        ) : (
          <ul className='header__menu-rigth'>
            <li>
              <DropdownSpecialistProfile
                text={"Специалисты"}
              />
            </li>
            <li>
              <Link to={Path.myOrder}>Мои заказы</Link>
            </li>
            <li className='header__menu-user'>
              <a href='/'> </a>
              <DropDownProfile
                Fio={useFio}
                profileWord={useFio}
              />
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
