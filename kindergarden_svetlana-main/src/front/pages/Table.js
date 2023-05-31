import React, { useState } from "react";

import "../css/Table.css";
import "../media/TableMedia.css";
import Img4 from "../img/image 25.png";
import { Swiper, SwiperSlide } from "swiper/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default function Table() {
  const [phone2, usePhone2] = useState();

  return (
    <>
      <h1 class="Table-h1">Расписание доп. занятий</h1>
      <div className="helloAmirxan">
        <div className="ras_bigblock">
          <table className="body1_tabl_block1">
            <tr>
              <th className="th2_block1_body1">Название услуги</th>
              <th className="th1_block1_body1">Пн</th>
              <th className="th1_block1_body1">Вт</th>
              <th className="th1_block1_body1">Ср</th>
              <th className="th1_block1_body1">Чт</th>
              <th className="th1_block1_body1">Пт</th>
              <th className="th1_block1_body1">Сб</th>
              <th className="th1_block1_body1">Вс</th>
            </tr>
            <tr>
              <td className="td2_block1_body1">Хореография</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">Лепка из глины</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">ИЗО-студия</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">Ментальная арифметика</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">Шахматы</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">Английский язык</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>

              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">Йога</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">ОФП</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">Театральная мастерская</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">Конструирование</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
          </table>
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
    </>
  );
}
