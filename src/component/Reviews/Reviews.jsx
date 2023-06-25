import React from "react";

import Star from "../../assets/img/Star.svg";
import BgStar from "../../assets/img/bgstars.svg";
import masters from "../../assets/img/imgRevews/Avatar (1).png";
import masters_two from "../../assets/img/imgRevews/Avatar (2).png";
import masters_three from "../../assets/img/imgRevews/Avatar (3).png";
import masters_four from "../../assets/img/imgRevews/Avatar (4).png";
import masters_five from "../../assets/img/imgRevews/Avatar (5).png";
import masters_six from "../../assets/img/imgRevews/Avatar (6).png";
import masters_seven from "../../assets/img/imgRevews/Avatar (7).png";
import masters_eight from "../../assets/img/imgRevews/Avatar (8).png";
import masters_nine from "../../assets/img/imgRevews/Avatar (9).png";

function Reviews() {
  const reviewsData = [
    {
      masters_name: "Эмель Айкач",
      masters_avatar: masters,
      reviews_stat: 4.9,
      reviews_count: 32,
      user_name: "Юлия оставила отзыв",
      user_star: 5,
      user_text: "Всё отлично! Спасибо!",
      user_grade: "Хорошо",
      user_proffection: "Перевод",
      id: "1",
    },
    {
      masters_name: "Марина Петрова Сергеевна",
      masters_avatar: masters_two,
      reviews_stat: 4.5,
      reviews_count: 20,
      user_name: "Анна оставила отзыв",
      user_star: 4,
      user_text: "Очень профессионально!",
      user_grade: "Хорошо",
      user_proffection: "Психология",
      id: "2",
    },
    {
      masters_name: "Артём Комаров Кириллович",
      masters_avatar: masters_three,
      reviews_stat: 4.7,
      reviews_count: 28,
      user_name: "Петр оставил отзыв",
      user_star: 5,
      user_text: "Рекомендую всем!",
      user_grade: "Очень хвалят",
      user_proffection: "Маркетинг",

      id: "3",
    },
    {
      masters_name: "Елизавета Белова Сергеевна",
      masters_avatar: masters_four,
      reviews_stat: 4.8,
      reviews_count: 25,
      user_name: "Ольга оставила отзыв",
      user_star: 4.5,
      user_text: "Отличное обслуживание!",
      user_grade: "Хорошо",
      user_proffection: "Математика",

      id: "4",
    },
    {
      masters_name: "Жуков Андрей Романович",
      masters_avatar: masters_five,
      reviews_stat: 4.1,
      reviews_count: 15,
      user_name: "Дмитрий оставил отзыв",
      user_star: 4.5,
      user_text: "Всё было отлично!",
      user_grade: "Нормально",
      user_proffection: "Музыка",

      id: "5",
    },
    {
      masters_name: "Ферид Оралоглу Надиевич",
      masters_avatar: masters_six,
      reviews_stat: 4.8,
      reviews_count: 64,
      user_name: "Анна оставил отзыв",
      user_star: 4.8,
      user_text: "Очень доволен результатом!",
      user_grade: "Хорошо",
      user_proffection: "Фотограф",

      id: "6",
    },
    {
      masters_name: "Алексей Кудрявцев Алексеевич",
      masters_avatar: masters_seven,
      reviews_stat: 4.9,
      reviews_count: 21,
      user_name: "Максим оставил отзыв",
      user_star: 4.9,
      user_text: "Рекомендую этого мастера!",
      user_grade: "Очень хвалят",
      user_proffection: "Электрик",

      id: "7",
    },
    {
      masters_name: "Яна Бондарева Владимировна",
      masters_avatar: masters_eight,
      reviews_stat: 4.3,
      reviews_count: 29,
      user_name: "Елена оставила отзыв",
      user_star: 4.6,
      user_text: "Профессиональная работа!",
      user_grade: "Хорошо",
      user_proffection: "Прически",

      id: "8",
    },
    {
      masters_name: "Малышева Анна Олеговна",
      masters_avatar: masters_nine,
      reviews_stat: 4.8,
      reviews_count: 25,
      user_name: "Александр оставил отзыв",
      user_star: 4.5,
      user_text: "Спасибо за отличное обслуживание!",
      user_grade: "Нормально",
      user_proffection: "Лечение кошек",

      id: "9",
    },
  ];

  return (
    <section className="reviews">
      <h3 className="reviews__title">Отзывы</h3>
      <p className="reviews__subtitle">
        733 отзывов оставили клиенты за последние 12 месяцев. Из них 1 598 —
        положительные.
      </p>
      <div className="reviews__block">
        {/* block reviews */}

        {reviewsData.map((avatar) => (
          <div className="reviews__item">
            <div className="reviews__users">
              <div className="reviews__avatar">
                <img className="reviews__img" src={avatar.masters_avatar} alt="avatar" />
              </div>
              <div className="reviews__info">
                <p className="reviews__name">{avatar.masters_name}</p>
                <span className="reviews__state">
                  <span>
                    <img className="revoews__state-star" src={Star} alt="" />
                    {avatar.user_star}
                  </span>
                  <span>{avatar.reviews_count} отзывов</span>
                  <span>{avatar.user_grade}</span>
                </span>
              </div>
            </div>
            <div className="reviews__content">
              <div className="reviews__content-title">
                {avatar.user_name}
                <div className="reviews__content-stars">
                  <img src={BgStar} alt="star" />
                  <img src={BgStar} alt="star" />
                  <img src={BgStar} alt="star" />
                  <img src={BgStar} alt="star" />
                  <img src={BgStar} alt="star" />
                </div>
              </div>
              <p className="reviews__content-subtitle">{avatar.user_text}</p>
              <a href="/" className="reviews__content-translate">
                {avatar.user_proffection}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
