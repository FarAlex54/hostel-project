import React from 'react'
import Card from 'react-bootstrap/Card';

const FeedbackCard = (props) => {
  return (
    <div class="py-2">
          <Card>
            <Card.Title className='px-2'>
              {props.name}
            </Card.Title>
            <Card.Body>
              Плюсы: {props.plus}<br/> 
              Минусы: {props.minus}
            </Card.Body>
            <Card.Footer>
              оценка в звездах
            </Card.Footer>
          </Card>
  </div>

  )
}

export default FeedbackCard