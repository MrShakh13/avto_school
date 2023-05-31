import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import accountImg from "../img/free-icon-user-149071 1.png";
import logoimg from "../img/Group 109.png";
import "./AllPages2.css";
import { FaPhone } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { SlSocialVkontakte } from "react-icons/sl";
import ImgScrol from "../img/free-icon-news-5995360 1.png";
import ImgScrol2 from "../img/free-icon-family-3597788 1.png";
import ImgScrol3 from "../img/free-icon-file-968545 1.png";
import ImgScrol4 from "../img/free-icon-business-report-7087350 1.png";
import ImgScrol5 from "../img/free-icon-stats-1274370 1.png";


import { AiFillCaretUp } from "react-icons/ai";
import { BsFillCaretDownFill } from "react-icons/bs";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import ProfilPage from "./PageProfil.js";
import url from "../host";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/person`);
        const filteredData = response.data.filter(
          (person) => person.phone === localStorage.getItem("num")
        );
        parseInt(localStorage.setItem("adressid", filteredData[0].addressid));
        parseInt(localStorage.setItem("personid", filteredData[0].personid));
        setData(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  function openModal11() {
    document.querySelector(".pageUser11").style = "display:block";
    document.querySelector(".pageUser112").style = "display:block";
  }
  function closeModal11() {
    document.querySelector(".pageUser11").style = "display:none";
    document.querySelector(".pageUser112").style = "display:none";
  }

  function otke1() {
    var navigation = document.querySelector(".BottomNavigation");
    navigation.style = "bottom: 0;";
    document.querySelector(".och").style = "display: none;";
    document.querySelector(".yop").style = "display: block;";
  }
  function otke2() {
    var navigation = document.querySelector(".BottomNavigation");
    navigation.style = " bottom: -110px";

    document.querySelector(".och").style = "display: block;";
    document.querySelector(".yop").style = "display: none;";
  }
  return (
    <BrowserRouter className="only_you">
      <div className="only_you">
        {" "}
        <Navbar className="Navbar11" expand="lg">
          <Container>
            <Navbar.Brand>
              <img
                className="logoimg11"
                onClick={() => {
                  sessionStorage.setItem("page", 1);
                  window.location = "/";
                }}
                src={logoimg}
                alt=""
              />{" "}
            </Navbar.Brand>
            <div id="pageUser112" className="minimodal11">
              <img alt="" onMouseEnter={() => openModal11()} src={accountImg} />
              <div onMouseLeave={() => closeModal11()} className="pageUser112">
                <p>
                  {/*      {data.map((data) => 
                  <div className='user'>{data.personid}</div>
                  )} */}
                  <img src={accountImg} alt="" />
                </p>
                <a
                  className="abu"
                  onClick={() => {
                    window.location = "/page1";
                  }}
                  href="/ProfilPage"
                >
                  <p>Настройки</p>
                </a>
                <p
                  onClick={() => {
                    sessionStorage.setItem("page", 1);
                    window.location = "/";
                  }}
                >
                  Выйти
                </p>
              </div>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="m-auto my-2 my-lg-0" navbarScroll>
                <NavDropdown title="О нас" id="navbarScrollingDropdown">
                  <NavDropdown.Item
                    onClick={() => {
                      sessionStorage.setItem("page", 1);
                      window.location = "/";
                    }}
                  >
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      sessionStorage.setItem("page", 1);
                      window.location = "/";
                    }}
                  >
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => {
                      sessionStorage.setItem("page", 1);
                      window.location = "/";
                    }}
                  >
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Расписание" id="navbarScrollingDropdown">
                  <NavDropdown.Item
                    onClick={() => {
                      sessionStorage.setItem("page", 1);
                      window.location = "/";
                    }}
                  >
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    onClick=
                    {() => {
                      sessionStorage.setItem("page", 1);
                      window.location = "/";
                    }}
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => {
                      sessionStorage.setItem("page", 1);
                      window.location = "/";
                    }}
                  >
                    dddd
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  onClick={() => {
                    sessionStorage.setItem("page", 1);
                    window.location = "/";
                  }}
                >
                  Программа
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    sessionStorage.setItem("page", 1);
                    window.location = "/";
                  }}
                >
                  Новости
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    sessionStorage.setItem("page", 1);
                    window.location = "/";
                  }}
                >
                  Команда
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    sessionStorage.setItem("page", 1);
                    window.location = "/";
                  }}
                >
                  Контакты
                </Nav.Link>
                <Nav.Link id="pageUser111" className="minimodal11">
                  <img
                    alt=""
                    onMouseEnter={() => openModal11()}
                    src={accountImg}
                  />
                  <a href="/ProfilPage">
                    <div
                      onMouseLeave={() => closeModal11()}
                      className="pageUser11"
                    >
                      <div className="prfl">
                        {data.map((element) => (
                          <h2 className="h2_elem">{element.personlastname}</h2>
                        ))}
                        {/* олнцева Татьяна Николаевна{' '} */}
                        <img src={accountImg} alt="" />
                      </div>

                      <Link to="/ProfilPage" className="abu">
                        <p>Настройки</p>
                      </Link>
                      <p
                        onClick={() => {
                          sessionStorage.setItem("page", 1);
                          window.location = "/";
                        }}
                      >
                        Выйти
                      </p>
                    </div>
                  </a>
                </Nav.Link>
              </Nav>
              <Form className="d-block">
                <span>Саратов, ул. Пугачева д.98/100</span>

                <div className="cantact11">
                  <FaPhone />
                  <a href="tel:+7 (8452) 57 79 35">+7 (8452) 57 79 35</a>
                  <a href="">
                    <TbBrandTelegram />
                  </a>
                  <a href="">
                    <SlSocialVkontakte />
                  </a>
                </div>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="BigNavs">
          <div className="ScrollBar">
            <a href="/">
              <div className="ScrollBar-h2">
                <img src={ImgScrol} alt="" />
                <h2>ЛЕНТА НОВОСТЕЙ</h2>
              </div>
            </a>
            <a href="/page2">
              <div className="ScrollBar-h2">
                <img src={ImgScrol2} alt="" />
                <h2>ДЕТИ</h2>
              </div>
            </a>
            <a href="/page3">
              <div className="ScrollBar-h2">
                <img src={ImgScrol3} alt="" />
                <h2>ЗАПИСИ О ПРОПУСКАХ</h2>
              </div>
            </a>
            <a href="/page4">
              <div className="ScrollBar-h2">
                <img src={ImgScrol4} alt="" />
                <h2>РАСПИСАНИЕ</h2>
              </div>
            </a>
            <a href="/page5">
              <div className="ScrollBar-h2">
                <img src={ImgScrol5} alt="" />
                <h2>ДИНАМИКА РАЗВИТИЯ</h2>
              </div>
            </a>
          </div>
          <div className="Pages">
            <Routes>
              <Route path="/" element={<Page1 />} />
              <Route path="/profilpage" element={<ProfilPage />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
              <Route path="/page4" element={<Page4 />} />
              <Route path="/page5" element={<Page5 />} />
            </Routes>
          </div>
        </div>
        <div className="otke" title="Open BottomNavigation">
          <h1 className="och" onClick={() => otke1()}>
            <AiFillCaretUp />
          </h1>
          <h1 className="yop" onClick={() => otke2()}>
            <BsFillCaretDownFill />
          </h1>
        </div>
        <div className="BottomNavigation">
          <a className="Page-a" href="/">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className="Page-a" href="/page2">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className="Page-a" href="/page3">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className="Page-a" href="/page4">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className="Page-a" href="/page5">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className="Page-a" href="/page6">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className="Page-a" href="/page7">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}
