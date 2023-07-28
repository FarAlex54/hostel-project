import React from 'react'
import './styles/Feedback.css';
import FeedBackItem from './cart/FeedBackItem';
import DtPicker from 'react-calendar-datetime-picker'
import { useState, useRef } from 'react';
import { AppContext } from '../App';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const Feedback = (props) => {
  
  const context = React.createContext(AppContext)

  const [showModal, setShowModal] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [dateVisit,setDateVisit] = useState(null);
  const [rating,setRating] = useState(0);
  const [hover,setHover] = useState(null);
  const [plus,setPlus] = useState('');
  const [minus,setMinus] = useState('');
  const [name,setName] = useState('Модуляр');

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  let timelessVar=0;

  function handleSubmit(e){
    e.preventDefault()  // без перезагрузки страницы
       axios.post('https://64775eca9233e82dd53b8a86.mockapi.io/feedback', {
        name:name,
        plus:plus,
        minus:minus,
        rating:rating,
        living_date:dateVisit.day+'/'+dateVisit.month+'/'+dateVisit.year
      })
      setPlus(''); setMinus(''); setRating(0); setDateVisit(null);setIsReadOnly(true);setShowModal(true);

  }

   return (

      <div class="d-flex flex-row">
        <div class="p-2 col-1"></div>  
        <div class="p-2 col-7"><FeedBackItem feedback={props.feedback}
                                             setFeedback={props.setFeedback}
                                             addFeedback={props.addFeedback}
                               /> 
        </div>
        <div class="p-2 col-4">
          <form class="rounded p-2" id='feedbackForm' onChange={()=>{(timelessVar&&plus.length) > 0 ? setIsReadOnly(false) : setIsReadOnly(true)}} onSubmit={handleSubmit}>
            <h5 class=''>Оставте Ваш отзыв</h5>
                <div class="form-floating">
                   <textarea class="form-control" style={{height: 15 +'em'}} id="Plus" value={plus} onChange={(e) => {setPlus(e.target.value)}}></textarea>
                  <label for="Plus">Что понравилось?</label>
                </div>
                <div class="form-floating py-2">
                  <textarea class="form-control" style={{height: 10 +'em'}} id="Minus" value={minus} onChange={(e) => {setMinus(e.target.value)}}></textarea>

                  <label for="Minus">Что не понравилось?</label>
                </div>
                <div class='d-flex flex-row justify-content-between align-items-center'>
                  <div>
                    <p class='px-2' >Оценка: 
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
                                  onClick={()=>{timelessVar=ratingValue;setRating(ratingValue)}}
                                />
  
                                <i class="bi-star-fill star"
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

                  <input type="submit" class='btn btn-info' disabled={isReadOnly}/>


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