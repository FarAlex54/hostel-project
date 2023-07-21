import React from 'react'
import FeedbackCard from './cardsForm/FeedbackCard';

const FeedBackItem = (props) => {
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
                />
              )
            })
          }
    </div>
  )
}

export default FeedBackItem