import './styles/Prevfooter.css';
import React from 'react'
import 'leaflet/dist/leaflet.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import {Link} from 'react-router-dom';

const Prevfooter = () => {
  return (
    <div className='row'>
      <div className='col-2'></div>
       <div className='col-6 d-flex flex-row bg-light rounded justify-content-between'>
         <div className='p-4'>
          <h3>МЕНЮ</h3>
          <Link className='aLink' to={'/about'}><p class="text-danger">Об отеле</p></Link>
          <a class="text-decoration-none" href='#'><p class="text-danger">Номера</p></a>
          <Link className='aLink' to={'/restoran'}><p class="text-danger">Ресторан</p></Link>
          <a class="text-decoration-none" href='#'><p class="text-danger">Услуги</p></a>
          <a class="text-decoration-none" href='#'><p class="text-danger">Мероприятия</p></a>
          <Link className='aLink' to={'/gallery'}><p class="text-danger">Фотогалерея</p></Link>
          <Link className='aLink' to={'/contacts'}><p class="text-danger">Контакты</p></Link>
        </div>
        <div className='p-4' id='contact'>
          <h3>КОНТАКТЫ</h3>
          <p class="text-danger">Адрес:</p><p>Краснодарский край, село Бжид, ул. Лазурная, 10</p>
          <p class="text-danger">Телефон:</p><p>+7 (495) 888 88 88</p>
          <p class="text-danger">Email:</p><p>Raimov88@yandex.ru</p>
        </div>
         
        <div className='p-2 maps' id='position'>
          <YMaps>
              <Map className='maps' defaultState={{ center: [44.326060, 38.639837], zoom: 15 }} modules={["control.ZoomControl", "control.FullscreenControl"]}>
                <Placemark 
                  modules={["geoObject.addon.balloon"]}
                  defaultGeometry={[44.326060, 38.639837]}
                  properties={{
                    balloonContentBody:
                      "Бжид, ул.Лазурная, 10",
                  }}/>
              </Map>
          </YMaps>
        </div>
      </div>
      <div className='col-4'>
      </div>
    </div>
  
  )
}

export default Prevfooter