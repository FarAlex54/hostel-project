import React from 'react'
import Card from 'react-bootstrap/Card';


const FeedbackCardAdmin = (props) => {

  return (
    <div class="py-2">
          <Card>
            <Card.Body>
            <p class="fs-5 px-3">{props.name}</p>
            <p className="small"><i class="bi bi-plus-circle-fill feedbackIcon_plus"></i> {props.plus}</p><br/> 
            <p className="small"><i class="bi bi-dash-circle-fill feedbackIcon_minus"></i> {props.minus}</p>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="p-1 col-9">
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
                <div className='p-1 col-3'>
                  <div className="d-flex flex-row justify-content-between align-items-center">

                    {()=>{ console.log(props.moderator);
                      const containerAdd = {
                        visibility: (props.moderator === 'on' ? 'visible' : 'hidden' )

                      }
                      console.log(props.moderator);
                      return <i className="bi bi-cart-dash-fill adminFeedbackIcon_delete" style={containerAdd}></i>
                    }}
{/*                     <i className="bi bi-cart-dash-fill adminFeedbackIcon_delete"></i>
                    <i className="bi bi-cart-check-fill adminFeedbackIcon_add"></i> */}
{/*                     {() => {
                    {const containerAdd ={
                      visibility: (props.moderator ==='on' ? 'visible' : 'hidden')
                      }
                      return <i className="bi bi-cart-dash-fill adminFeedbackIcon_delete" style={containerAdd}></i>
                    }}}
 */}

   {/*                  {props.moderator ==='on' ? <i className="bi bi-cart-dash-fill adminFeedbackIcon_delete"></i> : (<i className="bi bi-cart-check-fill adminFeedbackIcon_add"></i>,<i className="bi bi-cart-dash-fill adminFeedbackIcon_delete"></i>
                    )
                    } */}
 
                  </div>
                </div>
              </div>
            </Card.Footer>
          </Card>
  </div>

  )
}

export default FeedbackCardAdmin