import React from 'react';
import ReactPlayer from "react-player";
import WeatherButton from './WeatherButton';
import './styles/Banner.css';


const Banner = () => {
  return (

    <div className="mainBanner"> 
      <div className='videoWrap'>
        <div className='mainBanner_container'>
          <img className="img_b" src="./img/logo1.png" width='auto' height='50%' alt="" />
           <WeatherButton/>
          <div className="mainBanner_img"></div>       
        </div>
        <ReactPlayer width='100%' height="auto" url="./video/header.mp4" playing='true' muted loop='true'/>
      </div>
    </div>
 

  )
}

export default Banner