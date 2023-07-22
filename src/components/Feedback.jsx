import React from 'react'
import './styles/Feedback.css';
import FeedBackItem from './cart/FeedBackItem';
import { useForm } from "react-hook-form"
import DtPicker from 'react-calendar-datetime-picker'
import { useState } from 'react';




const Feedback = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
 
  const [dateVisit,setDateVisit] = useState(null);
  const onSubmit = (data) => console.log(data)
  console.log(watch("example"))


  const [rating,setRating] = useState(null);
  const [hover,setHover] = useState(null);



   return (

      <div class="d-flex flex-row">
        <div class="p-2 col-1"></div>  
        <div class="p-2 col-7"><FeedBackItem feedback={props.feedback}
                                             setFeedback={props.setFeedback}
                                             addFeedback={props.addFeedback}
                               /> 
        </div>
        <div class="p-2 col-4">
          <form class="rounded p-2" id='feedbackForm' onSubmit={handleSubmit(onSubmit)}>
            <h5 class=''>Оставте Ваш отзыв</h5>
                <div class="form-floating">
                  <textarea class="form-control" style={{height: 15 +'em'}} id="floatingTextarea" ></textarea>
                  <label for="floatingTextarea">Ваш отзыв</label>
                </div>
                <div>
                  <p class='px-2'>Оценка:
                    {[...Array(5)].map((star, i)=>{
                      const ratingValue = i + 1;
                      const container ={
                        color: (ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'),             
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
                  <p>{rating}</p> 
                </div>              
                <DtPicker placeholder='Дата заезда' className='calendar' onChange={setDateVisit} showWeekend/>
                <p>{}</p> 
            <input type="submit" />
            
          </form>
        </div>  
      </div>

  )
}

export default Feedback