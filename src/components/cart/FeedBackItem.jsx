import React from 'react'
import FeedbackCard from './cardsForm/FeedbackCard';
import axios from 'axios';

const FeedBackItem = (props) => {

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
                <FeedbackCard
                key={obj.id}
                id={obj.id}
                myId={obj.myId}
                name={obj.name}
                plus={obj.plus}
                minus={obj.minus}
                rating={obj.rating}

                feedBackBtn={
                  (feedbackObj)=>{
                    onAddFeedback(feedbackObj)
                  }
                }
                />
              )
            })
          }
    </div>
  )
}

export default FeedBackItem