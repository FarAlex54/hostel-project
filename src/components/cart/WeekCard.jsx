import React from 'react';
import '../styles/WeekCard.css';

class WeekCard extends React.Component {

  render() {    
    const ms = this.props.day.dt * 1000;
    const weekDate = new Date(ms).toLocaleString('ru', {year: 'numeric', month: 'long', day: 'numeric' });
    const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});

    const imgURL = "https://openweathermap.org/img/wn/"+ this.props.day.weather[0].icon +"@2x.png"
    return (
  
      <div className="col">
        <div className="card-body cardWeek text-dark small rounded p-1 ">
          <div class="d-flex flex-row justify-content-evenly iWeek">
            <div><p className="card-text iWeek">{weekdayName}</p></div>
            <div><p className="card-text">{weekDate}</p></div>
          </div>
          <div class="d-flex flex-row justify-content-evenly align-items-center iWeek">
            <div><img className='iWeek' src={imgURL} alt="" /></div>
            <div><p class='fs-2 fw-bold'>{Math.round(this.props.day.main.temp)} °C</p></div>
          </div>
          <div class="d-flex flex-row justify-content-evenly align-items-center iWeek">
            <p className="card-text">{this.props.day.weather[0].description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default WeekCard