import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap'
import accountImg from '../img/free-icon-user-149071 1.png'
import logoimg from '../img/Group 109.png'
import './AllPages.css'
import { FaPhone } from 'react-icons/fa'
import { TbBrandTelegram } from 'react-icons/tb'
import { SlSocialVkontakte } from 'react-icons/sl'
import ImgScrol from '../img/free-icon-news-5995360 1.png'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Page7 from './Page7'
import PageProfilr from './PageProfilr'
import { AiFillCaretUp } from 'react-icons/ai';
import { BsFillCaretDownFill } from 'react-icons/bs';
import imgLogo from '../img/logo.png'
import url from '../host'
import { CgDetailsMore } from 'react-icons/cg'
import user from '../img/profile-icon-orange-symbol-soccer-ball-football-team-sport-transparent-png-1014106-removebg-preview.png'
import { MdOutlinePlaylistRemove } from 'react-icons/md'



export default function App() {
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/person`)
        const filteredData = response.data.filter(
          person => person.email === localStorage.getItem('name')
        )
        setData(filteredData)
        localStorage.setItem("personid", filteredData[0].personid)
        /* console.log(filteredData) */
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()

    const fetchData2 = async () => {
      try {
        const response = await axios.get(`${url}/employee`);
        const filteredData2 = response.data.filter(
          person => person.personid === parseInt(localStorage.getItem("personid"))
        );
        localStorage.setItem("employ", filteredData2[0].employeeid)
        // console.log(filteredData2[0]);
      } catch (error) {
        console.log(error);
      }


    }
    fetchData2()


  }, [])
  function openModal11() {
    document.querySelector('.pageUser11').style = 'display:block'
    document.querySelector('.pageUser112').style = 'display:block'
  }
  function closeModal11() {
    document.querySelector('.pageUser11').style = 'display:none'
    document.querySelector('.pageUser112').style = 'display:none'
  }

  function otke1() {
    var navigation = document.querySelector('.BottomNavigation')
    navigation.style = 'bottom: 0;'
    document.querySelector('.och').style = 'display: none;'
    document.querySelector('.yop').style = 'display: block;'
  }
  function otke2() {
    var navigation = document.querySelector('.BottomNavigation')
    navigation.style = ' bottom: -110px'

    document.querySelector('.och').style = 'display: block;'
    document.querySelector('.yop').style = 'display: none;'
  }

  function openSansOpen() {
    document.querySelector('.ScrollBar').style = 'left: 0'
    document.querySelector('.closeDmodl').style = 'display: block'
    document.querySelector('.openScrollBar').style = 'display: none'
  }
  function closeSansOpen() {
    document.querySelector('.ScrollBar').style = 'left: -100%'
    document.querySelector('.closeDmodl').style = 'display: none'
    document.querySelector('.openScrollBar').style = 'display: block'
  }
  function kali() {
    sessionStorage.setItem("page", 1);
    window.location = "/";
  }
  return (
    <BrowserRouter>
      <div className='The-Big'>
        {' '}
        <Navbar expand="lg" className='Navbar'>
          <div className='divBtnn'>
            <CgDetailsMore className='closeDmodl' onClick={() => closeSansOpen()} />
            <button className='openScrollBar' onClick={() => openSansOpen()}><CgDetailsMore /></button>
          </div>
          <Container>
            <Navbar.Brand href="/" className="deets">
              <img onClick={() => kali()} src={imgLogo} alt='' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#Malumot">Malumot</Nav.Link>
                <Nav.Link href="#aloqa">Aloqa</Nav.Link>
                <Nav.Link href="#Aloqa2">Aloqa2</Nav.Link>
              </Nav>
              <Nav className='navbarNav'>
                <Nav.Link className="deets" id='deeets'>
                  8 800 550-03-74
                </Nav.Link>
                <a className='buttonVxd2' href='/PageProfilr'>
                  <img src={user} />
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='BigNavs'>
          <div className='ScrollBar'>
            <a href='/'>
              <div className='ScrollBar-h2'>
                <img src={ImgScrol} alt='' />
                <h2>ЛЕНТА НОВОСТЕЙ</h2>
              </div>
            </a>
            <a href='/page3'>
              <div className='ScrollBar-h2'>
                <img src={ImgScrol} alt='' />
                <h2>Video darsliklar</h2>
              </div>
            </a>
            <a href='/page4'>
              <div className='ScrollBar-h2'>
                <img src={ImgScrol} alt='' />
                <h2>Onlayn Test</h2>
              </div>
            </a>
          </div>
          <div className='Pages'>
            <Routes>
              <Route path='/' element={<Page1 />} />
              <Route path='/Page2' element={<Page2 />} />
              <Route path='/Page3' element={<Page3 />} />
              <Route path='/Page4' element={<Page4 />} />
              <Route path='/Page5' element={<Page5 />} />
              <Route path='/Page6' element={<Page6 />} />
              <Route path='/Page7' element={<Page7 />} />
              <Route path='/PageProfilr' element={<PageProfilr />} />
            </Routes>
          </div>
        </div>
        <div className="otke" title='Open BottomNavigation'>
          <h1 className='och' onClick={() => otke1()}>
            <AiFillCaretUp />
          </h1>
          <h1 className='yop' onClick={() => otke2()}>
            <BsFillCaretDownFill />
          </h1>
        </div>
        <div className="BottomNavigation">
          <a className='Page-a' href="/">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className='Page-a' href="/page2">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className='Page-a' href="/page3">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className='Page-a' href="/page4">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className='Page-a' href="/page5">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className='Page-a' href="/page6">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
          <a className='Page-a' href="/page7">
            <img src={ImgScrol} alt="" />
            <h4>home</h4>
          </a>
        </div>
      </div>
    </BrowserRouter>
  )
}