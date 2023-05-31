import React, { Component, useState } from "react";
import "../css/Prog.css";
import "../media/ProgMedia.css";
import ImgProg1 from "../img/image 26.png";
import ImgProg2 from "../img/image 27.png";
import ImgProg3 from "../img/image 28.png";

import Img4 from "../img/image 11.png";
import screen from "../img/screen.png";
import PhoneInput from "react-phone-input-2";
import { Swiper, SwiperSlide } from "swiper/react";

import "react-phone-input-2/lib/style.css";

export default function Prog() {
  const [phone2, usePhone2] = useState();
  return (
    <>
      <h1 className="Prog-h1">Программа</h1>
      <div className="Progdiv-1">
        <img src={ImgProg1} alt="" />
        <div className="kotta">
          <h1>Волшебник 3 уровня</h1>
          <p>
            Группа для детей 3-4 лет
            <br />
            <br />В этой программе мы учим родителей наблюдать за их детьми и
            даем навыки организации домашней среды в соответствии с
            потребностями ребенка. Занятия служат хорошей площадкой социализации
            для родителей.<br /> Неполный день| 8:30 - 12:00 - 8 000 р. <br />Полный день |
            8:30 - 18:45 - 13 000 р.<br />
          </p>
        </div>
      </div>
      <div className="Progdiv-1">
        <div className="kotta">
          <h1>Волшебник 2 уровня</h1>
          <p>
            Группа для детей 4 -5 лет
            <br />
            <br />
            Пятидневная программа, рассчитанная на установление отношений с
            другими детьми и взрослыми, освоение базовых навыков
            самообслуживания (одевание и раздевание, использование туалета,
            приготовление еды и т.д.).<br /> Неполный день| 8:30 - 12:00 - 8 000 р.<br />
            Полный день | 8:30 - 18:45 - 13 000 р.<br />
          </p>
        </div>
        <img src={ImgProg2} alt="" />
      </div>
      <div className="Progdiv-1">
        <img src={ImgProg3} alt="" />
        <div className="kotta">
          <h1>Волшебник 1 уровня</h1>
          <p>
            Группа для детей 5-7 лет
            <br />
            <br />

Среда в этой программе устроена таким образом, чтобы, используя естественный интерес ребенка, обеспечить развитие социальных, математических и языковых навыков. Свобода и индивидуальный план обучения ребенка - эти факторы закладывают навыки принятия решений и основы уверенности в себе.<br />

Неполный день| 8:30 - 12:00 - 10 000 р.<br />
Полный день | 8:30 - 18:45 - 16 000 р.<br />
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
                id="userNumber2"
                className="userNumber2"
                country={"ru"}
                value={phone2}
                onChange={(phone2) => usePhone2}
              />
              <button>отправить</button>
            </div>
          </div>
          <div className="blogs">
            <img src={Img4} alt="" />
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
      {/* <img src={screen} alt="" /> */}
    </>
  );
}
