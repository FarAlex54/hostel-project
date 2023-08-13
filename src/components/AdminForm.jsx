import React from 'react'
import { AppContext } from '../App';
import FeedbackCardAdmin from './admin/FeedbackCardAdmin';
import axios from 'axios';
import UserCardAdmin from './admin/UserCardAdmin';
import Card from 'react-bootstrap/Card';

const AdminForm = (props) => {

  const onDeletePost = (id)=>{
    axios.delete(`https://64775eca9233e82dd53b8a86.mockapi.io/feedback/${id}`);
    props.setFeedback((feed)=>feed.filter(item=>item.id !== id));
    console.log('запись удалена');
  }
  const onDeleteUser =(id) =>{
    axios.delete(`http://localhost:3001/users/${id}`);
    props.setUser((user)=>user.filter(item=>item.id !== id));
    console.log('пользователь удален');
  }
  const onChangeRole =(id) =>{
    console.log(id);
    props.ChangeRole(id);

  }

  const onModering = (id) =>{
    props.editPost(id);
  }

  return (

    <div className="d-flex flex-row">
      <div className="p-1 col-3 bg-primary"><h6 className="text-center">Блок с отзывами</h6>

                                      {props.feedback.map(obj=>{
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

      <div className="p-1 col-3 bg-danger"><h6 className="text-center">Блок с пользователями</h6>
            <Card>
              <Card.Body>

                <p className="small">
                <p className="small">
                <div className="d-flex flex-row align-items-center fw-bold">
                  <div className="col-1">Id</div>
                  <div className="col-3">Имя</div>
                  <div className="col-2">Login</div>
                  <div className="col-3">Телефон</div>
                  <div className="col-1">роль</div>
                  <div className="col-1"></div>
                  <div className="col-1"></div>
                </div>
                                              {props.user.map(obj=>{
                                                  return(
                                                    <UserCardAdmin
                                                    id={obj.id}
                                                    login={obj.login}
                                                    name={obj.name}
                                                    password={obj.password}
                                                    phone={obj.phone}
                                                    role={obj.role}
                                                    onDeleteUser={(id)=>{onDeleteUser(id)}}
                                                    onChangeRole={(id)=>{onChangeRole(id)}}
                                                    />
                                                  )
                                                })
                                               }
                </p>
                </p>
              </Card.Body>
            </Card>
      </div>
      <div className="p-2 col-3 bg-info"><h6 className="text-center">Блок с номерами</h6>
        <p className="text-center  small">Описание, фотографии общая инфа</p>
        <div className="d-flex flex-row">
          <div className="p-2 col-5 bg-light"></div>
          <div className="p-2 col-2 bg-info"></div>
          <div className="p-2 col-5 bg-light"></div>
        </div>
      </div>
      <div className="p-2 col-3 bg-danger"><h6 className="text-center">Блок с контентом</h6>
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