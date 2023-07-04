import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
/* import WeekContainer from './cart/WeekContainer'; */


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
        <Navbar.Brand>{time}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Об отеле</Nav.Link>
            <Nav.Link href="#contact">Контакты</Nav.Link>
            <Nav.Link href="#pricing">Фотогалерея</Nav.Link>
            <Nav.Link href="#feedback">Отзывы</Nav.Link>
          </Nav>
          <Nav class='small text-light text-end justify-content-end'>
            <Nav.Link href="#position">Краснодарский край, село Бжид, ул.Лазурная, 10</Nav.Link>
          </Nav>
          <Navbar.Text className="p-4">Что-то еще</Navbar.Text>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
/*       <Navbar bg="dark" variant="dark">
        <Container className='d-flex justify-content-between'>
        <Navbar.Collapse className='d-flex bd-highlight align-items-center text-light'> */
       
          

/*             <Navbar.Brand>
              <WeekContainer/>
            </Navbar.Brand> */
            /* <Navbar.Brand className="" href="#home"><img src='./img/logo1.png' className="img-fluid" width='50%' alt='logo'/></Navbar.Brand> */
/*             <Nav.Link className="col p-2 m-4 fs-3 border border-secondary rounded text-center" href="#home">Главная</Nav.Link>
            <Nav.Link className="col p-2 m-4 fs-3 border border-secondary rounded text-center" href="#contact">Контакты</Nav.Link>  
            <Nav.Link className="col p-2 m-4 fs-3 border border-secondary rounded text-center" href="#gallery">Фотогалерея</Nav.Link>
            <Nav.Link className="col-3 mх-4 p-4 bd-highlight small" href="#position">Краснодарский край, село Бжид, ул.Лазурная, 10</Nav.Link>
           
           
           
            <Navbar.Text><p class='small text-light text-end'>Текущее время</p></Navbar.Text>
         
          


          </Navbar.Collapse>
        </Container>
      </Navbar> */
/*       https://api.openweathermap.org/data/2.5/weather?lat=44.32&lon=38.63&appid=b3d8c91b9ff1342faa98b755a0a48cb5     - API для прогноза погоды
*/
  );
}

export default Header