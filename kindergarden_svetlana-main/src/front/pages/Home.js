import "../css/Home.css";
import "../media/HomeMedia.css";
import Img1 from "../img/Screenshot_20230204_051501_com.vkontakte 1.png";
import Img2 from "../img/img2.png";
import Img3 from "../img/Screenshot_20230204_051440_com.vkontakte 1.png";
import Img4 from "../img/image 11.png";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import modalImg from "../img/Group 10.png";
import "react-phone-input-2/lib/style.css";
function App() {
  const [phone2, usePhone2] = useState();
  function modalOpens() {
    document.querySelector(".modalZyav").style = "display: block";
    setTimeout(() => {
      document.querySelector(".modalZyav").style = "display: none";
    }, 1000);
  }
  return (
    <div className="App">
      {/* <div className="modalZyav" id="modl">
        <img src={modalImg} />
        <h1>
          Ваша заявка <br /> отправлена!
        </h1>
        <br />
        <h4>Спасибо, мы с Вами свяжемся в ближайшее время</h4>
      </div>
      <h1 className="novs">Новости</h1>
      <div className="cards-home">
        <div className="card-home">
          <img src={Img3} alt="" />
          <h1>Экскурсия в историческом парке “Россия - моя история”</h1>
          <p>
          Сегодня мы были в историческом парке “Россия - моя история” на мастер-классе “Монетный двор”. Ребята узнали историю монеты и ее значение для археологии, попробовали сами чеканить монеты и ....
          </p>
          <a href="/news">
            <button>подробнее</button>
          </a>
        </div>
        <div className="card-home">
          <img src={Img2} alt="" />
          <h1>Черепашки-ниндзя в гостях у волшебников</h1>
          <p>
          Сегодня к нам в гости заходили настоящие Черепашки Ниндзя!
Провели день весело и вкусно ...
          </p>
          <a href="/news">
            <button>подробнее</button>
          </a>
        </div>
        <div className="card-home">
          <img src={Img1} alt="" />
          <h1>Волшебный новый год</h1>
          <p>
          Вот и настал долгожданный и волшебный праздник! Наши маленькие волшебники встретили Деда Мороза и Снегурочку и получили сказочные подарки ...
          </p>
          <a href="/news">
            <button>подробнее</button>
          </a>
        </div>
      </div> */}
      <div className="btn-01">
        <a href="/news">
          <button className="smotr-et">смотреть еще новости</button>
        </a>
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
              {/* <PhoneInput
                id="userNumber2"
                className="userNumber2"
                country={"ru"}
                value={phone2}
                onChange={(phone2) => usePhone2}
              /> */}
              <button onClick={() => modalOpens()}>отправить</button>
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

    </div>
  );
}

export default App;
