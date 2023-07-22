import React, {useState} from 'react'
import '../styles/Feedback.css';



const StartRatig = (props) => {

  const [rating,setRating] = useState(null);
  const [hover,setHover] = useState(null);


  return (

    <div><p>Оценка:
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
      <p>{props.ratingStar}</p>
    
    </div>

  )
}

export default StartRatig