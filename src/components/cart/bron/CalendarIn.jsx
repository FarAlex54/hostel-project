import React from 'react';
import DtPicker from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'
import './styles/Bron.css';

const minDate = {
  year: dateNow.getFullYear(),
  month: dateNow.getMonth() + 1,
  day: dateNow.getDate()
};
const CalendarIn = ({ handleButtonClick }) => (
  <div>
    <DtPicker placeholder='Дата заезда' className='calendar' onChange={handleButtonClick} minDate={minDate} showWeekend/>
  </div>
)

export default CalendarIn;