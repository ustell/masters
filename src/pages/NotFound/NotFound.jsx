import React from 'react'
import Image from '../../assets/img/bild.jpg';
import { Link } from 'react-router-dom';


export const NotFound = () => {
  return (
    <div className="NotFound">
    <h1 className="">Страница находится в разработке</h1>
    <img src={Image} alt="" />
    <Link to={'/'}>Назад</Link>
  </div>
  )
}
