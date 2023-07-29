import React from 'react'
import FeedbackCardAdmin from './FeedbackCardAdmin';
import axios from 'axios';

const FeedBackItemAdmin = (props) => {

  const onAddFeedback = async (obj)=>{
    try{
      const {data} = await axios.post('https://64775eca9233e82dd53b8a86.mockapi.io/feedback', obj)
      props.setFeedback([...props.feedback,data])
    }
    catch{
      alert('Произошла ошибка')
    }  

  }

  return (
    <div>
          {
            props.feedback.map(obj=>{
              return(
                <FeedbackCardAdmin
                key={obj.id}
                id={obj.id}
                myId={obj.myId}
                name={obj.name}
                plus={obj.plus}
                minus={obj.minus}
                rating={obj.rating}
                moderator={obj.moderator}
                />
              )
            })
          }
    </div>
  )
}

export default FeedBackItemAdmin