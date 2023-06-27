/** @format */
import React from "react";
import "./style.scss";
import Plus from "../../assets/img/plus.png";
import Eyes from "../../assets/img/eyes.svg";
import { Hint } from "../../component/MainBlock/Hint";
import Btn from "../../component/Btn/Btn";
import { Footer } from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import { useNavigate } from "react-router-dom";
import { Path } from "../../path";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrder } from "../../redux/features/orderSlice";
import { fetchUserName } from "../../redux/features/authSlice";
import Google from "../../assets/img/google.svg";
import { Layout } from "../../layout/Layout";

function ActiveOrdersAll() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchUserName({ token }));
  }, [dispatch, token]);

  const userName = useSelector(
    (state) => state.auth.userName,
  );
  const post = userName?.data?.data?.posts;
  console.log(post);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleBlockClick = (content) => {
    setInputValue(content);
    setTimeout(() => {
      // Перенаправление пользователя через React Router
      navigate(Path.filterStepOne);
    }, 1000);
  };

  return (
    <Layout>
      <section className='createOrder'>
        {userName?.data?.data &&
        userName.data.data.posts?.length === 0 ? (
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
                      <input
                        className='search__input input_search'
                        type='text'
                        value={inputValue}
                        placeholder='Услуга или специалист'
                        onChange={(e) =>
                          setInputValue(e.target.value)
                        }
                      />
                      <Btn text={"Найти"} />
                    </div>
                    <div className='mainhint'>
                      <Hint
                        content='Программист'
                        onClick={() =>
                          handleBlockClick("Программист")
                        }
                      />
                      <Hint
                        content='Копирайтер'
                        onClick={() =>
                          handleBlockClick("Копирайтер")
                        }
                      />
                      <Hint
                        content='Английский язык'
                        onClick={() =>
                          handleBlockClick(
                            "Английский язык",
                          )
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {post &&
              post.map((item) => (
                <article
                  className='createOrder__item'
                  key={item._id}
                >
                  <div className='createOrder__item-content'>
                    <p className='createOrder__item-name'>
                      {item.title}
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
                  </div>
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
