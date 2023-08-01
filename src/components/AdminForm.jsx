import React from 'react'
import { AppContext } from '../App';
import FeedbackCardAdmin from './admin/FeedbackCardAdmin';
import axios from 'axios';


const AdminForm = (props) => {

  const onDeletePost = (id)=>{
    axios.delete(`https://64775eca9233e82dd53b8a86.mockapi.io/feedback/${id}`);
    props.setFeedback((feed)=>feed.filter(item=>item.id !== id));
    console.log('запись удалена');
  }
  const onModering = (id) =>{
    props.editPost(id);
  }

  return (

    <div className="d-flex flex-row">
      <div className="p-2 col-3 bg-primary">
        <h6 className="text-center">Блок с отзывами</h6>
        <div className="d-flex flex-row justify-content-between">
          <div className="p-2 col-12 bg-light">{props.feedback.map(obj=>{
                                                  return(
                                              <FeedbackCardAdmin
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
                                              onDeletePost={(id)=>{onDeletePost(id)}}
                                              onModering={(id)=>{onModering(id)}}
                                              />
                                                  )
                                              })}
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

  );
}

export default AdminForm