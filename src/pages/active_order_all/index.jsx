/** @format */
import React from "react";
import "./style.scss";
import Plus from "../../assets/img/plus.png";
import Eyes from "../../assets/img/eyes.svg";
import { Hint } from "../../component/MainBlock/Hint";
import Btn from "../../component/Btn/Btn";
import Input from "../../component/input/Input";
import { useNavigate } from "react-router-dom";
import { Path } from "../../path";

import { useDispatch, useSelector } from "react-redux";
import Google from "../../assets/img/google.svg";
import { Layout } from "../../layout/Layout";
import { fetchCategories } from "../../redux/features/orderSlice";
import ScrollToTop from "../../service/scrollTop";

function ActiveOrdersAll() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("telephone");
  const res = useSelector((state) => state.user?.data);
  const order = Array.isArray(res?.orders)
    ? res.orders
    : [];
  console.log(order);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleBlockClick = (content) => {
    setInputValue(content);
    dispatch(fetchCategories(content));
    setTimeout(() => {
      // Перенаправление пользователя через React Router
      navigate(Path.filterStepOne);
    }, 1000);
  };
  ScrollToTop();
  return (
    <Layout>
      <section className='createOrder'>
        {order && order.length === 0 ? (
          <>
            <section className='activeOrders'>
              <h3 className='activeOrders__title'>
                Мои заказы
              </h3>
              <div className='activeOrders__block'>
                <div className='activeOrders__item'>
                  <div className='activeOrders__item-group'>
                    <h3 className='activeOrders__item-title'>
                      Заказы
                    </h3>
                  </div>
                  <div className='activeOrders__item-group'>
                    <p className='activeOrders__item-order'>
                      У вас сейчас нет заказов
                    </p>
                  </div>
                  <div className='activeOrders__item-group'>
                    <button className='activeOrders__btn'>
                      <a
                        href='/'
                        className='activeOrders__link'
                      >
                        <img
                          className='activeOrders__link-icon'
                          src={Google}
                          alt=''
                        />
                        <p className='activeOrders__link-text'>
                          Вход через Google
                        </p>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className='createOrder__block'>
            <div className='createOrder__item  createOrder__create'>
              <div
                className='createOrder__item-btn'
                onClick={toggleMenu}
              >
                <h3 className='createOrder__create-title'>
                  Создать заказ
                </h3>
                <img
                  className={`createOrder__create-plus ${
                    isOpen ? "display" : ""
                  }`}
                  src={Plus}
                  alt=''
                />
              </div>
              <div className='drop-menu'>
                {isOpen && (
                  <div className='createOrder-menu-list'>
                    <div className='mainsearch'>
                      <Input
                        inputValue={inputValue}
                        value={inputValue}
                        onChange={(e) =>
                          setInputValue(e.target.value)
                        }
                      />
                      <Btn text={"Найти"} />
                    </div>
                    <div className='mainhint'>
                      <Hint
                        content='Мастера по ремонту'
                        onClick={() =>
                          handleBlockClick(
                            "Мастера по ремонту",
                          )
                        }
                      />
                      <Hint
                        content='Репетиторы'
                        onClick={() =>
                          handleBlockClick("Репетиторы")
                        }
                      />
                      <Hint
                        content='Фрилансеры'
                        onClick={() =>
                          handleBlockClick("Фрилансеры")
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {order &&
              order.map((item, index) => (
                <article
                  className='createOrder__item'
                  key={index + Date.now()}
                >
                  <div className='createOrder__item-content'>
                    <p className='createOrder__item-name'>
                      {item.title}
                    </p>
                    <p className='createOrder__item-option'>
                      {item.selectedOption}
                    </p>
                    <p className='createOrder__item-option'>
                      {item.option}
                    </p>
                    <div className='createOrder__item-subtitle'>
                      Заказ открыт для откликов
                      <div className='createOrder__item-visiting'>
                        <img
                          className='createOrder__item-visiting--eyes'
                          src={Eyes}
                          alt=''
                        />
                        <p className='createOrder__item-visiting--count'>
                          0
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className='price'>
                        {item.minPrice && item.maxPrice
                          ? `${item.minPrice}лир - ${item.maxPrice}лир`
                          : null}
                      </p>
                    </div>
                  </div>
                  <div className='status'>Активен </div>
                </article>
              ))}
            <div className='createOrder__item-data'></div>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default ActiveOrdersAll;
