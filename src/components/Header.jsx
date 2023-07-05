import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Header = () => { 

  const locale = 'en';
  const [today, setDate] = useState(new Date());

  useEffect(() => {
      const timer = setInterval(() => { 
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);
  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
        <Navbar.Brand><Link className='aLink' to={'/'}>{time}</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className='aLink' to={'/'}>Об отеле</Link></Nav.Link>
            <Nav.Link className='aLink' href="#contact">Контакты</Nav.Link>
            <Nav.Link><Link className='aLink' to={'/'}>Фотогалерея</Link></Nav.Link>
            <Nav.Link><Link className='aLink' exact to={'/form'}>Отзывы</Link></Nav.Link>
          </Nav>
          <Nav class='small text-light text-end justify-content-end'>
            <Nav.Link href="#position">Краснодарский край, село Бжид, ул.Лазурная, 10</Nav.Link>
          </Nav>
          <Navbar.Text className="p-4">Что-то еще</Navbar.Text>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header