import React from 'react';
import DtPicker from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'
import './styles/Bron.css';

const CalendarOut = ({ isChecked, handleInputChange }) => (
  <DtPicker placeholder='Дата выезда' className='calendar' onChange={handleInputChange} showWeekend isDisabled={isChecked}/>
)

export default CalendarOut;