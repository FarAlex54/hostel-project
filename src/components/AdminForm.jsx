import React from 'react'
import { useState, useEffect } from 'react';
import FeedBackItemAdmin from './admin/FeedBackItemAdmin';
import axios from 'axios';

const AdminForm = (props) => {
  const [feedback, setFeedback] = useState([])

  useEffect (()=>{
    async function axiosData(){
      const feedbackData = await axios.get('https://64775eca9233e82dd53b8a86.mockapi.io/feedback');
      setFeedback(feedbackData.data)
    }
    axiosData();
  },[]);
  return (
    <div className="d-flex flex-row">
      <div className="p-2 col-3 bg-primary">
        <h6 className="text-center">Блок с отзывами</h6>
        <div className="d-flex flex-row justify-content-between">
          <div className="p-2 col-10 bg-light"><FeedBackItemAdmin feedback={props.feedback}
                                             setFeedback={props.setFeedback}
                                             addFeedback={props.addFeedback}/>
          </div>
          <div className="p-2 col-1 bg-light align-self-center">
            <i class="bi bi-plus-circle-fill feedbackIcon_plus"></i>
            <i class="bi bi-dash-circle-fill feedbackIcon_minus"></i>
          </div>
        </div>
      </div>  

      <div className="p-2 col-3 bg-danger">
        <h6 className="text-center">Блок с пользователями</h6>
        <div className="d-flex flex-row">
          <div className="p-2 col-5 bg-light"></div>
          <div className="p-2 col-2 bg-danger"></div>
          <div className="p-2 col-5 bg-light"></div>
        </div>
      </div>
      <div className="p-2 col-3 bg-info">
        <h6 className="text-center">Блок с номерами</h6>
        <p className="text-center  small">Описание, фотографии общая инфа</p>
        <div className="d-flex flex-row">
          <div className="p-2 col-5 bg-light"></div>
          <div className="p-2 col-2 bg-info"></div>
          <div className="p-2 col-5 bg-light"></div>
        </div>
      </div>
      <div className="p-2 col-3 bg-danger">
        <h6 className="text-center">Блок с номерами</h6>
        <div className="d-flex flex-row">
          <div className="p-2 col-5 bg-light"></div>
          <div className="p-2 col-2 bg-danger"></div>
          <div className="p-2 col-5 bg-light"></div>
        </div>
      </div>
    </div>

  )
}

export default AdminForm