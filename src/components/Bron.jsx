import React from 'react'
import Button from 'react-bootstrap/Button';
import DtPicker, { Day } from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './styles/Bron.css';
import { useState } from 'react';




const dateNow = new Date();

const minDate = {
  year: dateNow.getFullYear(),
  month: dateNow.getMonth() + 1,
  day: dateNow.getDate()
};

const Bron = () => {
  const [dateIn,setDateIn] = useState({});
  const [dateOut,setDateOut] = useState({});
  const [dateOutCalendar, setDateOutCalendar] = useState(true);


  return (
    <div className="d-flex justify-content-center">
      <div className="col-8 d-flex justify-content-center align-items-center bd-highlight p-3 mb-5 bg-light rounded shadow">
        <div className="p-2 h2 bd-highlight">Бронирование номеров</div>
        <div className="p-2 bd-highlight">
          <DtPicker type="single" placeholder='Дата заезда' className='calendar' onChange={(dateIn)=>{setDateIn(dateIn);/* setDateOutCalendar(false); */console.log('dateIn: '+dateIn);console.log('dateOutCalendar: '+dateOutCalendar);}} minDate={minDate} showWeekend/>
        </div>
        <div className="p-2 bd-highlight">
          <DtPicker type="single" placeholder='Дата выезда' className='calendar' onChange={(dateOut)=>{setDateOut(dateOut);console.log('dateOut: '+dateOut)}} minDate={dateIn} showWeekend isDisabled={dateOutCalendar}/>
        </div>
        <div className="p-2 bd-highlight">
          <Dropdown autoClose="outside">
            <Dropdown.Toggle variant="outline-success" title="Гостей">
              Гостей
            </Dropdown.Toggle>
            <Dropdown.Divider />
            <Dropdown.Menu className='dropdown-menu'>
              <p className='text-center small'>Количество гостей
                <div className="d-flex justify-content-around">
                  <div className="col-5">
                    <p className='text-center small'>Взрослые</p>
                    <label htmlFor='older'></label>
                    <input type='number' id='older' style={{width:100}}></input>
                  </div>
                  <div className="col-5">
                    <p className='text-center small'>Дети</p>
                    <label htmlFor='younger'></label>
                    <input type='number' id='younger' style={{width:100}}></input>
                  </div>
                </div>
              </p>
              <div className="d-flex justify-content-end px-2">
                <Button variant="primary" size='sm'>Готово</Button>
              </div>
            </Dropdown.Menu>
          </Dropdown> 
        </div>
        <div className="p-2 bd-highlight">
          <Button variant="success" size='lg'>Поиск</Button>
        </div>
      </div>
    </div> 


  )
  
}

export default Bron