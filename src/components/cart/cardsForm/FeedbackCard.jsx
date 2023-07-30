import React from 'react'
import Card from 'react-bootstrap/Card';


const FeedbackCard = (props) => {
  if (props.moderator === 'on') {
  return (
    <div class="py-2">
          <Card>
              <Card.Body>
              <p class="fs-5 px-3">{props.name}</p>
              <p className="small"><i class="bi bi-plus-circle-fill feedbackIcon_plus"></i> {props.plus}</p>
              <p className="small"><i class="bi bi-dash-circle-fill feedbackIcon_minus"></i> {props.minus}</p>
              </Card.Body>
              <Card.Footer>
                      {[...Array(5)].map((star,i)=>{
                        const ratingValue = i + 1;
                        const container ={
                          color: (ratingValue <= (props.rating) ? '#ffc107' : '#e4e5e9'),             
                        }
                        return <label>
                                <i class="bi-star-fill px-1" style={container}></i>
                              </label>
                      })}
              </Card.Footer>
          </Card>
  </div>

  )
 }
}

export default FeedbackCard