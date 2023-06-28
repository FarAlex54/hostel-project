import React from 'react';
import '../styles/WeekCard.css';

class WeekCard extends React.Component {

  render() {    
    const ms = this.props.day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});

    const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x icon-style"

    return (
      <div className="col">
        <div className="cardWeek text-dark small rounded">
          <p className="card-title">{weekdayName}</p>
          <i className={imgURL}></i>
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