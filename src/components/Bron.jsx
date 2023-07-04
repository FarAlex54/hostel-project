import React from 'react'
import Button from 'react-bootstrap/Button';
import DtPicker from 'react-calendar-datetime-picker'
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


/*   const [change,setChange] = useState(true); */


const Bron = () => {
  const [dateIn,setDateIn] = useState(null);
  const [dateOut,setDateOut] = useState(null);
  const [text, setText] = useState('');
  let [proper, setProper] = useState(true);

  function handleChange(e) {
      console.log('setProper = '+proper);
      return false;
  }
  
  function togleOn(e){  
    if (!e) {console.log('Not null = '+e);return true;}else{console.log(e);return false;}
    console.log('togleOn(e) = '+dateIn);
  }
  
  return (
    
    <div class="d-flex">
      <div class='col-2'></div>
      <div class="col-8 d-flex justify-content-center align-items-center bd-highlight p-3 mb-5 bg-light rounded shadow">
        <div class="p-2 h2 bd-highlight">Бронирование номеров</div>
        <div class="p-2 bd-highlight"></div>
        <div class="p-2 bd-highlight">
          <DtPicker placeholder='Дата заезда' className='calendar' onChange={setDateIn} minDate={minDate} showWeekend/>
        </div>
        <div class="p-2 bd-highlight">
          <DtPicker placeholder='Дата выезда' className='calendar' onChange={setDateOut} minDate={dateIn} showWeekend isDisabled={true}/>
        </div>
        <div class="p-2 bd-highlight">
          <DropdownButton className="d-grid" id="dropdown-item-button" title="Гостей" variant="outline-success" size='sm'>

            <Dropdown.Header><div class="text-center">Количество гостей</div></Dropdown.Header><Dropdown.Divider />
            <Dropdown.ItemText>
              <div class="text-center">
                <div>
                  <label class="form-label" for="typeNumberOld"><p class='small'>Взрослые</p></label>
                  <input step="1" value="1" type="number" id="typeNumberOld" class="form-control" />
                </div>
                
                <div>
                    <label class="form-label" for="typeNumberYang"><p class='small'>Дети младше 18 лет</p></label>
                    <input step="1" value="0" type="number" id="typeNumberYang" class="form-control" />  
                </div>
              </div>

                <Button variant="primary" size='sm'>Готово</Button>

            </Dropdown.ItemText>

          </DropdownButton>   
        </div>
        <div class="p-2 bd-highlight">
          <Button variant="success" size='lg'>Поиск</Button>
        </div>
      </div>
      <div class='col-2'></div>

    </div> 


  )
  
}

export default Bron