import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';




const FeedbackCardAdmin = (props) => {
  const containerAdd = {visibility: (props.moderator === 'off' ? 'visible' : 'hidden' )}
  const onDelete=()=>{
    props.onDeletePost(props.id);
    console.log('удаляем запись ' + props.id);
  }
  const onChange=()=>{
    /* props.moderator='on'; */
    props.onModering(props.moderator);
/*     props.setFeedback(prevState => ({moderator:'on'})); */
    console.log('меняем запись ' + props.id+' moderator: '+props.moderator);
  }
  return (
    <div class="py-2">
          <Card>
            <Card.Body>
            <p class="fs-5 px-3">{props.name}</p>
            <p className="small"><i class="bi bi-plus-circle-fill feedbackIcon_plus"></i> {props.plus}</p> 
            <p className="small"><i class="bi bi-dash-circle-fill feedbackIcon_minus"></i> {props.minus}</p>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="p-1 col-8">
                    {[...Array(5)].map((star,i)=>{
                      const ratingValue = i + 1;
                      const container ={
                        color: (ratingValue <= (props.rating) ? '#ffc107' : '#e4e5e9'),             
                      }
                      return <label>
                              <i class="bi-star-fill px-1" style={container}></i>
                            </label>
                    })}
                </div>  
                <div className='p-1 col-4'>
                  <div className="d-flex flex-row justify-content-between align-items-center">

                      <div className='p-1' style={containerAdd}>
                        <Button variant="outline-success" size="sm" onClick={onChange}><i className="bi bi-cart-check-fill adminFeedbackIcon_add" ></i>
                        </Button>
                      </div>
                      <div className='p-1' >
                        <Button variant="outline-danger" size="sm" onClick={onDelete}><i className="bi bi-cart-dash-fill adminFeedbackIcon_delete"></i></Button>
                      </div>


                  </div>
                </div>
              </div>
            </Card.Footer>
          </Card>
  </div>

  )
}

export default FeedbackCardAdmin