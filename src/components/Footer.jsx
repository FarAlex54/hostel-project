import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className='md-3 border-top'>
        <div class="d-flex justify-content-between bd-highlight text-secondary text-muted">
          <div class="p-2 bd-highlight">©2023 – НАО «Клуб путешественников» – Официальный сайт Отеля Клуб путешественников</div>
          <div class="p-2 bd-highlight">
            <ul class='ulFooter'>
              <li class='liFooter'><a class="aFooter" href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
              <li class='liFooter'><a class="aFooter" href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
              <li class='liFooter'><a class="aFooter" href="#"><i class="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
              <li class='liFooter'><a class="aFooter" href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
              <li class='liFooter'><a class="aFooter" href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
          </div>
          <div class="p-2 bd-highlight"><a href="#" class="text-decoration-none">Сайт разработан - FarAlex</a></div>
        </div>
      </footer>
    </div>
  )
}

export default Footer