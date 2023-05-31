import './AllFront.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imgLogo from './img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NumberPage from './pages/Form'



export default function Allfront() {
  return (
    <div>
      <Navbar expand="lg" className='Navbar'>
        <Container>
          <Navbar.Brand href="/" className="deets">
            <img src={imgLogo} alt='' />
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
                <a  className='buttonVxd' href='/NumberPage'>
              <button className='buttonVxd'>
                  Kirish
              </button>
                </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/NumberPage" element={<NumberPage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  )
}
