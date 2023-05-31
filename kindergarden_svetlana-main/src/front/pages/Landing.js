import React, { Component, useState } from "react";
import img from "../img/do-sert 1.png";
import file from "../img/Group 67.png";
import Img4 from "../img/image 11.png";
import "../css/Landing.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import modalImg from "../img/Group 10.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Landing() {
  const [phone2, usePhone2] = useState();
  function modalOpens() {
    document.querySelector(".modalZyav").style = "display: block";
    setTimeout(() => {
      document.querySelector(".modalZyav").style = "display: none";
    }, 1000);
  }
  return (
    <div>
      <div className="modalZyav" id="modl">
        <img src={modalImg} />
        <h1>
          Ваша заявка <br /> отправлена!
        </h1>
        <br />
        <h4>Спасибо, мы с Вами свяжемся в ближайшее время</h4>
      </div>
      <h1 className="Landing-h1">Документы</h1>
      <div className="File">
        <img src={file} alt="" />
        <h3>Устав</h3>
      </div>
      <div className="File">
        <img src={file} alt="" />
        <h3>Правила внутреннего распорядка</h3>
      </div>
      <div className="File">
        <img src={file} alt="" />
        <h3>Правила внутреннего распорядка</h3>
      </div>
      <div className="File">
        <img src={file} alt="" />
        <h3>Образец заявления о приеме</h3>
      </div>
      <h1 className="Landing-h1-2">Наши сертификаты</h1>
      <Swiper
        navigation={true}
        slidesPerView={4}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="SwiperSlide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <img src={img} alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        navigation={true}
        slidesPerView={2}
        modules={[Navigation]}
        className="mySwiper2"
        id="MySwiper2"
      >
        <SwiperSlide className="SwiperSlide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <img src={img} alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        navigation={true}
        slidesPerView={1}
        modules={[Navigation]}
        className="mySwiper3"
        id="MySwiper3"
      >
        <SwiperSlide className="SwiperSlide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <img src={img} alt="" />
        </SwiperSlide>
      </Swiper>
      <h1 className="Swiper-h1">Последние новости</h1>
      <Swiper
        navigation={true}
        spaceBetween={70}
        slidesPerView={3}
        modules={[Navigation]}
        className="mySwiper-text"
        id="mySwiper-text"
      >
        <SwiperSlide className="SwiperSlide-text">
          <h1>Экскурсия в историческом парке “Россия - моя история”</h1>
          Сегодня мы были в историческом парке “Россия - моя история” на
          мастер-классе “Монетный двор”. Ребята узнали историю монеты и ее
          значение для археологии, попробовали сами чеканить монеты и ....
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide-text">
          <h1>Экскурсия в историческом парке “Россия - моя история”</h1>
          Сегодня мы были в историческом парке “Россия - моя история” на
          мастер-классе “Монетный двор”. Ребята узнали историю монеты и ее
          значение для археологии, попробовали сами чеканить монеты и ....
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide-text">
          <h1>Экскурсия в историческом парке “Россия - моя история”</h1>
          Сегодня мы были в историческом парке “Россия - моя история” на
          мастер-классе “Монетный двор”. Ребята узнали историю монеты и ее
          значение для археологии, попробовали сами чеканить монеты и ....
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide-text">
          <h1>Экскурсия в историческом парке “Россия - моя история”</h1>
          Сегодня мы были в историческом парке “Россия - моя история” на
          мастер-классе “Монетный двор”. Ребята узнали историю монеты и ее
          значение для археологии, попробовали сами чеканить монеты и ....
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide-text">
          <h1>Экскурсия в историческом парке “Россия - моя история”</h1>
          Сегодня мы были в историческом парке “Россия - моя история” на
          мастер-классе “Монетный двор”. Ребята узнали историю монеты и ее
          значение для археологии, попробовали сами чеканить монеты и ....
        </SwiperSlide>
      </Swiper>
      <Swiper
        navigation={true}
        spaceBetween={70}
        slidesPerView={1}
        modules={[Navigation]}
        className="mySwiper-text"
        id="mySwiper-text-2"
      >
        <SwiperSlide className="SwiperSlide-text">
          <h1>Экскурсия в историческом парке “Россия - моя история”</h1>
          Сегодня мы были в историческом парке “Россия - моя история” на
          мастер-классе “Монетный двор”. Ребята узнали историю монеты и ее
          значение для археологии, попробовали сами чеканить монеты и ....
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide-text">
          <h1>Экскурсия в историческом парке “Россия - моя история”</h1>
          Сегодня мы были в историческом парке “Россия - моя история” на
          мастер-классе “Монетный двор”. Ребята узнали историю монеты и ее
          значение для археологии, попробовали сами чеканить монеты и ....
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide-text">
          <h1>Экскурсия в историческом парке “Россия - моя история”</h1>
          Сегодня мы были в историческом парке “Россия - моя история” на
          мастер-классе “Монетный двор”. Ребята узнали историю монеты и ее
          значение для археологии, попробовали сами чеканить монеты и ....
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide-text">
          <h1>Экскурсия в историческом парке “Россия - моя история”</h1>
          Сегодня мы были в историческом парке “Россия - моя история” на
          мастер-классе “Монетный двор”. Ребята узнали историю монеты и ее
          значение для археологии, попробовали сами чеканить монеты и ....
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide-text">
          <h1>Экскурсия в историческом парке “Россия - моя история”</h1>
          Сегодня мы были в историческом парке “Россия - моя история” на
          мастер-классе “Монетный двор”. Ребята узнали историю монеты и ее
          значение для археологии, попробовали сами чеканить монеты и ....
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide-text">
          <h1>Экскурсия в историческом парке “Россия - моя история”</h1>
          Сегодня мы были в историческом парке “Россия - моя история” на
          мастер-классе “Монетный двор”. Ребята узнали историю монеты и ее
          значение для археологии, попробовали сами чеканить монеты и ....
        </SwiperSlide>
      </Swiper>
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
              <button onClick={() => modalOpens()}>отправить</button>
            </div>
          </div>
          <div className="blogs">
            <img src={Img4} alt="" />
          </div>
        </div>
      </div>{" "}
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
