import React from 'react';
import WeekCard from './WeekCard';
import '../styles/WeekCard.css';

/* const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27"; */
const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=44.32&lon=38.63&appid=6ece2656158d8fe8f55b878ab81b996a&units=metric&lang=ru";
class WeekContainer extends React.Component {
  
  state = {
    days: []
  }

  componentDidMount = () => {
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({days: dailyData})
    })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <WeekCard className='cardWeek' day={day} key={index}/>)
  }

  render() {
    return (
      <div className="container">
{/*         <p className="display-4 jumbotron">Прогноз погоды на 5 дней</p>
        <p className="display-4 text-muted">Бжид</p> */}
        <div className="d-flex flex-column">
          {this.formatCards()}
        </div>
      </div>
    )
  }
}

export default WeekContainer


