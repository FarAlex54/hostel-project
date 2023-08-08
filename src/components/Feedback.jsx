import React from 'react'
import './styles/Feedback.css';
import DtPicker from 'react-calendar-datetime-picker'
import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FeedbackCard from './cart/cardsForm/FeedbackCard';
import { AppContext } from '../App';
import { useForm } from 'react-hook-form'

const Feedback = (props) => {

  const FeedbackContext = React.createContext(AppContext);

  let name = 'Вася';
  const {register,handleSubmit, watch, formState:{errors}, getValues, setValue, reset}=useForm();
  const onSubmit = (data) => {
    var today = new Date();
    today = String(today.getDate()).padStart(2, '0') + '/' + String(today.getMonth() + 1).padStart(2, '') + '/' + today.getFullYear();
    setValue('moderator', 'off');
    setValue('name', name);
    setValue('living_date', ((typeof dateVisit === 'undefined')||(dateVisit ===null)) ? today : (dateVisit.day+'/'+dateVisit.month+'/'+dateVisit.year));
    setValue('myId',props.myId);
    let values = getValues();
    axios.post('https://64775eca9233e82dd53b8a86.mockapi.io/feedback', values);
    console.log('Values ',values);
    props.setFeedback([...props.feedback, values]);
    reset();
    setShowModal(true);
  }


  const [showModal, setShowModal] = useState(false);
 
  const [dateVisit,setDateVisit] = useState(new Date());
  const [rating,setRating] = useState(0);
  const [hover,setHover] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

   return (

      <div className="d-flex flex-row">
        <div className="p-2 col-1"></div>  
        <div className="p-2 col-7">{props.feedback.map(obj=>{
                                                  return(
                                              <FeedbackCard
                                              key={obj.id}
                                              id={obj.id}
                                              myId={obj.myId}
                                              name={obj.name}
                                              plus={obj.plus}
                                              minus={obj.minus}
                                              description={obj.description}
                                              living_date={obj.living_date}
                                              rating={obj.rating}
                                              moderator={obj.moderator}
                                              />
                                                  )
                                              })}
        </div>
        <div className="p-2 col-4">
          <form className="rounded p-2" id='feedbackForm' onSubmit={handleSubmit(onSubmit)}>

            <h5 className=''>Оставте Ваш отзыв</h5>
                <div className="form-floating">
                   <textarea className="form-control" style={{height: 15 +'em'}} id="Plus" {...register('plus')}></textarea>
                  <label htmlFor="Plus">Что понравилось?</label>
                </div>
                <div className="form-floating py-2">
                  <textarea className="form-control" style={{height: 10 +'em'}} id="Minus" {...register('minus')}></textarea>

                  <label htmlFor="Minus">Что не понравилось?</label>
                </div>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                  <div>
                    <p className='px-2' >Оценка: 
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
                                  onClick={()=>{setRating(ratingValue);}}
                                  {...register('rating')}
                                />
                                <i className="bi-star-fill star"
                                  style={container}
                                  onMouseEnter={()=>setHover(ratingValue)}
                                  onMouseLeave={()=>setHover(null)}
                                ></i>
                              </label>
                      })}
                    </p>
                  </div>
                  <div>
                    <DtPicker placeholder='Дата проживания' className='calendar' onChange={setDateVisit} showWeekend />  
                  </div>
                </div>
                  <input type="submit" className='btn btn-info' /* disabled={isReadOnly} *//>
          </form>
        </div>  
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Спасибо, {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ваш отзыв принят в проверку</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
  )
}

export default Feedback

/* return (

  <div className="d-flex flex-row">
    <div className="p-2 col-1"></div>  
    <div className="p-2 col-7">{props.feedback.map(obj=>{
                                              return(
                                          <FeedbackCard
                                          key={obj.id}
                                          id={obj.id}
                                          myId={obj.myId}
                                          name={obj.name}
                                          plus={obj.plus}
                                          minus={obj.minus}
                                          description={obj.description}
                                          living_date={obj.living_date}
                                          rating={obj.rating}
                                          moderator={obj.moderator}
                                          />
                                              )
                                          })}
    </div>
    <div className="p-2 col-4">
      <form className="rounded p-2" id='feedbackForm' onChange={()=>{((timelessVar&&plus.length) > 0) ? setIsReadOnly(false) : setIsReadOnly(true)}} onSubmit={handleSubmit}>

        <h5 className=''>Оставте Ваш отзыв</h5>
            <div className="form-floating">
               <textarea className="form-control" style={{height: 15 +'em'}} id="Plus" value={plus} onChange={(e) => {setPlus(e.target.value)}}></textarea>
              <label htmlFor="Plus">Что понравилось?</label>
            </div>
            <div className="form-floating py-2">
              <textarea className="form-control" style={{height: 10 +'em'}} id="Minus" value={minus} onChange={(e) => {setMinus(e.target.value)}}></textarea>

              <label htmlFor="Minus">Что не понравилось?</label>
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center'>
              <div>
                <p className='px-2' >Оценка: 
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
                              onClick={()=>{timelessVar=ratingValue;setRating(ratingValue);}}
                            />

                            <i className="bi-star-fill star"
                              style={container}
                              onMouseEnter={()=>setHover(ratingValue)}
                              onMouseLeave={()=>setHover(null)}
                            ></i>
                          </label>
                  })}
                </p>
              </div>
              <div>
                <DtPicker placeholder='Дата проживания' className='calendar' onChange={setDateVisit} showWeekend/>  
              </div>
            </div>

              <input type="submit" className='btn btn-info' disabled={isReadOnly}/>


      </form>
    </div>  
    <Modal show={showModal} onHide={handleClose}>
    <Modal.Header>
      <Modal.Title>Спасибо, {name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>Ваш отзыв принят в проверку</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  </div>
)
}

export default Feedback */