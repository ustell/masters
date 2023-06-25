/** @format */

import React, { useEffect } from "react";
import DropdownMenu from "./DropDown";
import { DropDownProfile } from "./DropDownProfile";
import { DropdownSpecialist } from "./DropdownSpecialist";
import { DropdownSpecialistProfile } from "./DropdownSpecialistProfile";
import Logo from "../../assets/img/МАСТЕРА.svg";
import { Link } from "react-router-dom";
import { Path } from "../../path";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserName } from "../../redux/features/authSlice";

function Header() {
  const dispatch = useDispatch();

  const [useUser, setUseUser] = React.useState(true);
  const [useFio, setUseFio] = React.useState(
    "Александр Курчаков",
  );

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(fetchUserName({ token }));
      setUseUser(false);
    }
  }, [dispatch]);
  const userName = useSelector(
    (state) => state.auth.userName,
  );
  const name = userName?.data?.data?.name;
  console.log(name);

  useEffect(() => {
    setUseFio(name);
  }, [name]);

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
            <DropdownMenu text={"Анталия"} />
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
