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
        <div className="cardWeek text-dark small rounded">
          <p className="card-title iWeek">{weekdayName}</p>
          <p className="card-title">{weekDate}</p>
          <img className='iWeek' src={imgURL} alt="" />
          <p>{Math.round(this.props.day.main.temp)} °C</p>
          <div className="card-body">
            <p className="card-text">{this.props.day.weather[0].description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default WeekCard