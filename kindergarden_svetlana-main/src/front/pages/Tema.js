import React, { Component, useState } from "react";
import "../css/Tema.css";
import "../media/NewsMedia.css";
// import HomeImg1 from ' ../img/Homeimg1.png'
import HomeImg1 from "../img/Homeimg1.png";
import HomeImg2 from "../img/homeimg-2.png";
import HomeImg3 from "../img/About-news.png";
import HomeImg4 from "../img/image 11.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Tema() {
  const [phone, usePhone] = useState();
  const [phone2, usePhone2] = useState();
  return (
    <div className="asos">
      <div className="card">
        <div className="acch1">
          <h1>Частые вопросы</h1>
        </div>
        <div className="acc">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  onclick="accc()"
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Чем занят ребёнок в детском саду?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Для оформления в детский сад необходимо предоставить
                    следующие документы: <br />
                    1. Заявление бланк можно скачать в разделе О нас/ Документы
                    <br />
                    2. Паспорта родителей; <br />
                    3. Свидетельство о рождении ребенка; <br />
                    4. СНИЛС ребенка и родителей; <br />
                    5. Медицинская карта Ф26; <br />
                    6. Договор (заключается в детском саду). <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  onclick="accc()"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseseven"
                  aria-expanded="false"
                  aria-controls="collapseseven"
                >
                  Сколько детей в группах детского сада?
                </button>
              </h2>
              <div
                id="collapseseven"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Для оформления в детский сад необходимо предоставить
                    следующие документы: <br />
                    1. Заявление (бланк можно скачать в разделе О нас/
                    Документы); <br />
                    2. Паспорта родителей; <br />
                    3. Свидетельство о рождении ребенка; <br />
                    4. СНИЛС ребенка и родителей; <br />
                    5. Медицинская карта Ф26; <br />
                    6. Договор (заключается в детском саду). <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  onclick="accc()"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsesix"
                  aria-expanded="false"
                  aria-controls="collapsesix"
                >
                  Кто занимается медицинским обслуживанием детей?
                </button>
              </h2>
              <div
                id="collapsesix"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Для оформления в детский сад необходимо предоставить
                    следующие документы: <br />
                    1. Заявление (бланк можно скачать в разделе О нас/
                    Документы); <br />
                    2. Паспорта родителей; <br />
                    3. Свидетельство о рождении ребенка; <br />
                    4. СНИЛС ребенка и родителей; <br />
                    5. Медицинская карта Ф26; <br />
                    6. Договор (заключается в детском саду). <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  onclick="accc()"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefive"
                  aria-expanded="false"
                  aria-controls="collapsefive"
                >
                  Какие документы нужны для оформления в детский сад?
                </button>
              </h2>
              <div
                id="collapsefive"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Для оформления в детский сад необходимо предоставить
                    следующие документы: <br />
                    1. Заявление (бланк можно скачать в разделе О нас/
                    Документы); <br />
                    2. Паспорта родителей; <br />
                    3. Свидетельство о рождении ребенка; <br />
                    4. СНИЛС ребенка и родителей; <br />
                    5. Медицинская карта Ф26; <br />
                    6. Договор (заключается в детском саду). <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  onclick="accc()"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefour"
                  aria-expanded="false"
                  aria-controls="collapsefour"
                >
                  Про питаниe
                </button>
              </h2>
              <div
                id="collapsefour"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Для оформления в детский сад необходимо предоставить
                    следующие документы: <br />
                    1. Заявление (бланк можно скачать в разделе О нас/
                    Документы); <br />
                    2. Паспорта родителей; <br />
                    3. Свидетельство о рождении ребенка; <br />
                    4. СНИЛС ребенка и родителей; <br />
                    5. Медицинская карта Ф26; <br />
                    6. Договор (заключается в детском саду). <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  onclick="accc()"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsethree"
                  aria-expanded="false"
                  aria-controls="collapsethree"
                >
                  Какие кружки входят в оплату, а какие нужно оплачивать
                  дополнительно?
                </button>
              </h2>
              <div
                id="collapsethree"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Для оформления в детский сад необходимо предоставить
                    следующие документы: <br />
                    1. Заявление (бланк можно скачать в разделе О нас/
                    Документы); <br />
                    2. Паспорта родителей; <br />
                    3. Свидетельство о рождении ребенка; <br />
                    4. СНИЛС ребенка и родителей; <br />
                    5. Медицинская карта Ф26; <br />
                    6. Договор (заключается в детском саду). <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  onclick="accc()"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Как отслеживается развитие ребенка?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Для оформления в детский сад необходимо предоставить
                    следующие документы: <br />
                    1. Заявление (бланк можно скачать в разделе О нас/
                    Документы); <br />
                    2. Паспорта родителей; <br />
                    3. Свидетельство о рождении ребенка; <br />
                    4. СНИЛС ребенка и родителей; <br />
                    5. Медицинская карта Ф26; <br />
                    6. Договор (заключается в детском саду). <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="bgs">
          <div className="blogs">
            <h1>Остались вопросы? Получите бесплатную консультацию</h1>
            <p>
              Оставьте телефон и мы перезвоним и расскажем все подробности о
              филиале
            </p>
            <div className="forms">
              <PhoneInput
                id="userNumber"
                country={"ru"}
                value={phone}
                onChange={(phone) => usePhone}
              />
              <button className="opens">отправить</button>
            </div>
          </div>
          <div className="blogs">
            <img src={HomeImg4} alt="" />
          </div>
        </div>
      </div>
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.7861001880665!2d46.011060176536894!3d51.535482971819754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c7b706714d39%3A0xfcfe98f6fcfc6cdb!2z0YPQuy4g0J_Rg9Cz0LDRh9GR0LLQsCDQlS4g0JgsIDk4LzEwMCwg0KHQsNGA0LDRgtC-0LIsINCh0LDRgNCw0YLQvtCy0YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCA0MTAwMTI!5e0!3m2!1sru!2s!4v1684586014215!5m2!1sru!2s" 
        height="450"
        style={{
          border: "0",
          width: "90%",
          marginLeft: "5%",
          marginTop: "10px",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
