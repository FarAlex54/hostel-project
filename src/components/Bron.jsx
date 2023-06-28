import React from 'react'
import Button from 'react-bootstrap/Button';
import DtPicker from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'
import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './styles/Bron.css';



const Bron = () => {
  const [date, setDate] = useState(null);
  const dateNow = new Date();
  const minDate = {
    year: dateNow.getFullYear(),
    month: dateNow.getMonth() + 1,
    day: dateNow.getDate()
  }


  
  return (

    <div class="d-flex">
      <div class='col-2'></div>
      <div class="col-8 d-flex justify-content-center align-items-center bd-highlight p-3 mb-5 bg-light rounded shadow">
        <div class="p-2 h2 bd-highlight">Бронирование номеров</div>
        <div class="p-2 bd-highlight">

        </div>
        <div class="p-2 bd-highlight">
          <DtPicker placeholder='Дата заезда' className='calendar' selected={date} onChange={setDate} minDate={minDate} showWeekend/>
        </div>
        <div class="p-2 bd-highlight">
          <DtPicker placeholder='Дата выезда' className='calendar' selected={date} onChange={setDate} showWeekend isDisabled/>
        </div>
        <div class="p-2 bd-highlight">
          <DropdownButton className={"d-grid"} id="dropdown-item-button" title="Гостей" variant="outline-success" size='sm'>

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