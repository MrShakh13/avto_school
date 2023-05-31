import '../AllFront.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imgLogo from '../img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import cardImg from '../img/0_Learning-to-drive-a-car.jpg'
import FormImg from '../img/sj-school-basic900.jpg'
import "react-phone-input-2/lib/style.css";
// import PhoneInput from "react-phone-input-2";
import { BsFacebook, BsMailbox } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { AiOutlineSend } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
import img from '../img/welcome_image.jpg'
import Accordion from 'react-bootstrap/Accordion';
import { BrowserRouter, Routes, Route } from "react-router-dom";





function CollapsibleExample() {
  return (
    <>
      <div className='headers' id='features'>
        <div className='headCards'>
          <h1>Drivers: Online ta'lim va haydovchilik maktablari uchun bepul platforma</h1>
          <p>Biz onlayn ta'limni joriy etish va yo'lga qo'yish, nazariya va haydovchilik imtihonlarini boshqarishni soddalashtirishga yordam beramiz</p>
          <button>Ro'yxatdan o'tish</button>
        </div>
        <div className='headCards'>
          <img src={cardImg} alt='' />
        </div>
      </div>
      <div className='headers2'>
        <div className='blur'></div>
        <div className='headCards2'>
          <div>
            <h1>Drivers: Online ta'lim va haydovchilik maktablari uchun bepul platforma</h1>
            <p>Biz onlayn ta'limni joriy etish va yo'lga qo'yish, nazariya va haydovchilik imtihonlarini boshqarishni soddalashtirishga yordam beramiz</p>
            <button>Ro'yxatdan o'tish</button>
          </div>
        </div>
      </div>
      <div className='liners' id='Malumot'>
        <div className='linearDiv'>
          <div>
            <h1>
              Welcome to Online Traffic School!
            </h1>
            <p>
              Getting a traffic ticket can be scary and stressful. Rarely, do we think about
            </p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  To'liq onlayn
                </Accordion.Header>
                <Accordion.Body>
                  8 soatlik o'quv kurslari
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Bizning oquv markazimizdagi kurslar</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>8 soatlik online darslar</li>
                    <li>Mahoratli</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className='linearDiv'>
          <img src={img} />
        </div>
      </div>
      <div className='Tavsilot' id='aloqa'>
        <h1>Drivers: Online ta'lim va haydovchilik maktablari uchun bepul platforma</h1>
        <p>Biz onlayn ta'limni joriy etish va yo'lga qo'yish, nazariya va haydovchilik imtihonlarini boshqarishni soddalashtirishga yordam beramiz</p>
      </div>
      <div className='homeForm'>
        <div className='Links'>

        </div>
        <div className='forms'>
          <img src={FormImg} alt='' />
        </div>
        <div className='forms'>
          <label>
            name
          </label><br />
          <input type='text' placeholder='Name' /><br />
          <label>
            email
          </label><br />
          <input type='email' placeholder='Email' />
          <br />
          <label>
            nomer
          </label><br />
          <input type='number' placeholder='nomer' />
          <br />
          <button>Jo'natish</button>
        </div>
      </div>
      <div className='iframeDivv' id='Aloqa2'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.7861001880665!2d46.011060176536894!3d51.535482971819754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c7b706714d39%3A0xfcfe98f6fcfc6cdb!2z0YPQuy4g0J_Rg9Cz0LDRh9GR0LLQsCDQlS4g0JgsIDk4LzEwMCwg0KHQsNGA0LDRgtC-0LIsINCh0LDRgNCw0YLQvtCy0YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCA0MTAwMTI!5e0!3m2!1sru!2s!4v1684586014215!5m2!1sru!2s"
          height="400"
          style={{
            border: "0",
            width: "70%",
            marginTop: "10px",
            marginLeft: "2%",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className='faceDiv'>
          <h3>Biz bilan aloqaga chiqing</h3>
          <p>Bizning ijtimoiy tarmoqlardagi sahifalarimiz</p>
          <div className='postion'>
            <button className='btnPosi'>
              <AiOutlineRight className='Aiout' />
            </button>
            <input type='text' placeholder='Enter your Email' className='yourEmail' />
          </div>
          <div className='icnDiv'>
            <h3>
              <BsFacebook className='dvvicn' />
              Facebook
            </h3>
            <h3>
              <BsTelegram className='dvvicn' />
              Telegram
            </h3>
          </div>
          <div className='icnDiv'>
            <h3>
              <SiGmail className='dvvicn' />
              Gmail.com
            </h3>
            <h3>
              <BsFacebook className='dvvicn' />
              Facebook
            </h3>
          </div>
          <a href='tel: +998 (90) 123-45-67'>
            <p className='class'>+998 (90) 123-45-67</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default CollapsibleExample;