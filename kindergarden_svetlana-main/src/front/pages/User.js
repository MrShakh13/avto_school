import React, { Component, useState } from "react";
import "../css/User.css";
import "../media/UserMedia.css";
import ImgUser from "../img/image 19.png";
import imgvd from "../img/image 22.png";
import IcnImg from "../img/Снимок экрана 2023-04-13 153505.png";
import Img4 from "../img/image 11.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import wizard from "../Images/hazard.png";
import clock from "../Images/clock.png";
import babyFace from "../Images/BabyFace.png";
import book from "../Images/book.png";
import spoon from "../Images/spoon.png";
import comments from "../Images/comments.png";
import baby from "../Images/Baby.png";
import vector1 from "../img/image 23.png";
import vector2 from "../img/image 24.png";
import vector3 from "../Images/Vector (6).png";
import vector4 from "../Images/Vector (7).png";
import vector5 from "../Images/Vector (8).png";
import vector6 from "../Images/Vector (9).png";
import vector7 from "../Images/Vector (10).png";
import vector8 from "../Images/Vector (11).png";
import vector9 from "../Images/Group 23.png";
import modalImg from "../img/Group 10.png";
import "react-phone-input-2/lib/style.css";
export default function User() {
  const [phone, usePhone] = useState();
  const [phone2, usePhone2] = useState();
  function modalOpens() {
    document.querySelector(".modalZyav").style = "display: block";
    setTimeout(() => {
      document.querySelector(".modalZyav").style = "display: none";
    }, 1000);
  }

  return (
    <div>
      <>
        <div className="modalZyav" id="modl">
          <img src={modalImg} />
          <h1>
            Ваша заявка <br /> отправлена!
          </h1>
          <br />
          <h4>Спасибо, мы с Вами свяжемся в ближайшее время</h4>
        </div>
        <h1 className="User-h1">О центре</h1>
        <div className="User-div">
          <img src={ImgUser} alt="" />
          <div className="user-txt">
            <h1>РуководительШколы Волшебников</h1>
            <h3>Абрикосова</h3>
            <p className="user-name">Анастасия Алексанровна</p>
            <p>Педагог - психолог</p>
            <p>Стаж 11 лет</p>
          </div>
        </div>
        <div className="user-biz">
          <p className="Biz">
            Мы понимаем, что вам, родителям, важно знать и быть уверенными в
            том, что в детском саду ребенок находится в безопасности, что о нем
            заботятся, уделяют внимание, развивают и обучают. Именно поэтому мы
            регулярно предоставляем информацию о прогрессе и успехах наших ребят
            в их электронных дневниках. Наши двери открыты для деток от 3-х до
            7-ми лет. Основная наша миссия: заложить основы гармоничного и
            успешного развития ребенка. Выбирая развивающий центр для своего
            ребенка, Вы во многом определяете его будущее. «Школа волшебников» -
            станет отличным стартом для будущих успехов Вашего ребенка.
            <br />{" "}
            <span>
              Наша задача — сделать так, чтобы каждый день в Школе Волшебников
              был для наших маленьких волшебников счастливым.
            </span>
          </p>
          <p className="Biz">
            В нашем детском саду мы используем современные методики и учебные
            пособия. Мы подчеркиваем необходимость подготовки детей к жизни в
            мультикультурной среде, в которой открытость и коммуникабельность
            играют значительную роль. Наш детский сад обеспечивает детям тесный
            контакт с английским языком. Начиная с самого начала
            образовательного приключения, мы хотим подготовить наших учеников к
            смелому и открытому взгляду на мир, пробудить их любопытство и
            показать, насколько увлекательным может быть обучение.{" "}
          </p>
        </div>
        <h1 className="user-vd">Видео из жизни нашего сада</h1>
        <div className="user-video">
          <img src={imgvd} alt="" />
          <img src={vector1} alt="" />
          <img src={vector2} alt="" />
        </div>
        <div className="factorsHome">
          <div className="factorHome ">
            <div className="imgFactor orange">
              <img src={clock} alt="photo" />
            </div>
            <p>
              <strong>Часы работы:</strong> с 7:30 до 19:00
            </p>
          </div>
          <div className="factorHome ">
            <div className="imgFactor pink">
              <img src={babyFace} alt="photo" />
            </div>
            <p>
              <strong>Группы:</strong> до 15 человек
            </p>
          </div>
          <div className="factorHome ">
            <div className="imgFactor purple">
              <img src={book} alt="photo" />
            </div>
            <p>
              <strong>Контроль развития:</strong> электронный дневник развития с
              графическими отчетами
            </p>
          </div>
          <div className="factorHome ">
            <div className="imgFactor purple">
              <img src={spoon} alt="photo" />
            </div>
            <p>
              <strong>Питание:</strong> 5-разовое, с учетом индивидуальных
              особенностей ребенка
            </p>
          </div>
          <div className="factorHome ">
            <div className="imgFactor orange">
              <img src={comments} alt="photo" />
            </div>
            <p>
              <strong>Занятия:</strong> разностороннее развитие
            </p>
          </div>
          <div className="factorHome ">
            <div className="imgFactor pink">
              <img src={baby} alt="photo" />
            </div>
            <p>
              <strong>Возраст детей:</strong> с 3 до 7 лет
            </p>
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
                <button onClick={() => modalOpens()}>отправить</button>
              </div>
            </div>
            <div className="blogs">
              <img src={Img4} alt="" />
            </div>
          </div>
        </div>
      </>{" "}
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
