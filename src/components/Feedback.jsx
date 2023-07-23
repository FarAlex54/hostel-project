import React from 'react'
import './styles/Feedback.css';
import FeedBackItem from './cart/FeedBackItem';
import { useForm } from "react-hook-form"
import DtPicker from 'react-calendar-datetime-picker'
import { useState, useRef } from 'react';
import { AppContext } from '../App';
import axios from 'axios';



const Feedback = (props) => {
  
  const context = React.createContext(AppContext)

 

  const onSubmit = data => console.log(data)
  const [dateVisit,setDateVisit] = useState(null);
  const [rating,setRating] = useState(0);
  const [hover,setHover] = useState(null);
  const [plus,setPlus] = useState('');
  const [minus,setMinus] = useState('');
  const [name,setName] = useState('Модуляр');
  function handleSubmit(e){
    e.preventDefault()  // без перезагрузки страницы
    if (plus===''){
      console.log('Plus is null')

    }
    else{
      console.log('Plus is NOT null')
      /* axios.post('https://64775eca9233e82dd53b8a86.mockapi.io/feedback', {
        name:name,
        plus:plus,
        minus:minus,
        rating:rating,
        living_date:dateVisit.day+'/'+dateVisit.month+'/'+dateVisit.year
      }) */
    }
    setPlus(''); setMinus(''); setRating(''); setDateVisit(null);
  }
  


   return (

      <div class="d-flex flex-row">
        <div class="p-2 col-1"></div>  
        <div class="p-2 col-7"><FeedBackItem feedback={props.feedback}
                                             setFeedback={props.setFeedback}
                                             addFeedback={props.addFeedback}
                               /> 
        </div>
        <div class="p-2 col-4">
          <form class="rounded p-2" id='feedbackForm' onSubmit={handleSubmit}>
            <h5 class=''>Оставте Ваш отзыв</h5>
                <div class="form-floating">
                  <textarea class="form-control" style={{height: 15 +'em'}} id="Plus" value={plus} onChange={(e) => {setPlus(e.target.value)}}></textarea>
                  <label for="Plus">Что понравилось?</label>
                </div>
                <div class="form-floating py-2">
                  <textarea class="form-control" style={{height: 10 +'em'}} id="Minus" value={minus} onChange={(e) => {setMinus(e.target.value)}}></textarea>
                  <label for="Minus">Что не понравилось?</label>
                </div>
                <div>
                  <p class='px-2'>Оценка:
                    {[...Array(5)].map((star, i)=>{
                      const ratingValue = i + 1;
                      const container ={
                        color: (ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9')             
                      }
                      return <label>
                              <input 
                                type="radio" 
                                name="rating" 
                                value={ratingValue} 
                                onClick={()=>setRating(ratingValue)}
                              />
                              <i class="bi-star-fill star"
                                style={container}
                                onMouseEnter={()=>setHover(ratingValue)}
                                onMouseLeave={()=>setHover(null)}
                              ></i>
                            </label>
                    })}
                  </p>
                </div>              
                <DtPicker placeholder='Дата заезда' className='calendar' onChange={setDateVisit} showWeekend/>
            <input type="submit"/>

                        
          </form>
        </div>  
      </div>

  )
}

export default Feedback