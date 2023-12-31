import React from 'react';
import './styles/Footer.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <div className='box'>
      <footer className='md-3 border-top'>
        <div class="d-flex justify-content-between bd-highlight text-secondary text-muted">
          <div class="p-2 bd-highlight">©2023 – НАО «Клуб путешественников» – Официальный сайт Отеля Клуб путешественников</div>
          <div class="p-2 bd-highlight">
            <ul class='ulFooter'>
              <li class='liFooter'><a class="aFooter" href="#"><i class="bi bi-facebook" aria-hidden="true"></i></a></li>
              <li class='liFooter'><a class="aFooter" href="#"><i class="bi bi-twitter" aria-hidden="true"></i></a></li>
              <li class='liFooter'><a class="aFooter" href="#"><i class="bi bi-google" aria-hidden="true"></i></a></li>
              <li class='liFooter'><a class="aFooter" href="#"><i class="bi bi-youtube" aria-hidden="true"></i></a></li>
            </ul>
          </div>
          <div class="p-2 bd-highlight"><a href="#" class="text-decoration-none">Сайт разработан - FarAlex</a></div>
        </div>
      </footer>
    </div>
  )
}

export default Footer