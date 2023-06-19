/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../scss/components/dropDown.scss";

const DropdownMenu = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cities, setCities] = useState([]);

  const fetchCities = async () => {
    try {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/search?country=Турция&format=json&limit=1000&polygon_geojson=1",
      );
      setCities(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    fetchCities();
  };

  return (
    <div className='dropdown-menu'>
      <div
        className='dropdown-menu-toggle'
        onClick={toggleMenu}
      >
        {text}
        <svg
          className={`rotating-svg ${
            isOpen ? "rotate" : ""
          }`}
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.3332 0.916748L5.16667 5.08341L1 0.916748'
            stroke='black'
            strokeWidth='1.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      {isOpen && (
        <div className='dropdown-menu-list'>
          <input
            type='text'
            className='dropdown-menu-input'
            placeholder='Введите регион или город'
          />
          <div className="line"></div>
          <ul>
            {cities.map((city) => (
              <li
                className='dropdown-menu-item'
                key={city.place_id}
              >
                {city.display_name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
