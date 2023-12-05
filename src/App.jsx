import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Gallery from './components/Gallery';
import About from './components/About';
import Feedback from './components/Feedback';
import Contacts from './components/Contacts';
import Restoran from './components/Restoran';
import AdminForm from './components/AdminForm';





export const AppContext = React.createContext({});

const switchers = [...document.querySelectorAll('.switcher')]
console.log('.switcher: '+switchers)

function App() {
  const [rooms, setRooms] = useState([

  ])
  const [feedback, setFeedback] = useState([])
  const [user, setUser] = useState([
    {
      "id": 1,
      "myId": 1,
      "name": "Алексей",
      "login": "admin",
      "password": "admin",
      "phone": "+79833113111",
      "role": "admin"
    },
    {
      "id": 4,
      "myId": 4,
      "name": "Николай",
      "login": "user3",
      "phone": "+79833113111",
      "password": "user",
      "role": "user"
    },
    {
      "name": "Сергей Витальевич",
      "login": "Serg",
      "phone": "+7(983) 311-31-11",
      "password": "1",
      "role": "user",
      "id": 5
    },
    {
      "name": "Виталий Сергеевич",
      "login": "Vital",
      "phone": "+7(983) 311-31-11",
      "password": "1",
      "role": "user",
      "id": 6
    },
    {
      "name": "Молоко",
      "login": "user4",
      "phone": "+7(983) 311-31-11",
      "password": "1",
      "role": "user",
      "id": 7
    },
    {
      "name": "Антон Сергеевич",
      "login": "Anton",
      "phone": "+7(983) 311-31-11",
      "password": "1",
      "role": "user",
      "id": 8
    },
    {
      "name": "Владимир Николаевич",
      "login": "vlad",
      "phone": "+7(983) 311-31-11",
      "password": "1",
      "role": "user",
      "id": 9
    },
    {
      "name": "Молоко",
      "login": "sadfasdf",
      "phone": "+7(983) 311-31-11",
      "password": "1",
      "role": "user",
      "id": 10
    },
    {
      "name": "Сметана",
      "login": "Brother",
      "phone": "+7(983) 311-31-11",
      "password": "1",
      "role": "admin",
      "id": 11
    }
  ])
  const [authenticated, setAuthenticated] = useState(false);
  const [pathPage, setPathPage] = useState('/form');
  let LoginRegisteredUser = null;

  useEffect (()=>{
    async function axiosData(){
      const roomsData = await axios.get('https://64775eca9233e82dd53b8a86.mockapi.io/rooms') //таблица с номерами
      const feedbackData = await axios.get('https://64775eca9233e82dd53b8a86.mockapi.io/feedback'); // таблица с отзывами
      /* const userData =  await axios.get('http://localhost:3001/users/'); */ //таблица с регистрированными пользователями
      /* setUser(userData.data) */
      setRooms(roomsData.data)
      setFeedback(feedbackData.data)
    }
    axiosData();
  },[]);

  let myId=0;
  feedback.map((item) => {if (item.id>myId) {myId=item.id}});

  const editPost=(id)=>{
    feedback.map((item) => {if (item.id===id) {
      item.moderator='on';
      axios.put(`https://64775eca9233e82dd53b8a86.mockapi.io/feedback/${item.id}`, item);
      }})
    setFeedback(feedback); 
  }
  const ChangeRole=(id)=>{
    user.map((item) => {if (item.id===id) {
      if (item.role==='admin') {item.role = 'user'}else{item.role = 'admin'}
      /* axios.put(`http://localhost:3001/users/${item.id}`, item); */
      }})
    console.log('изменена роль пользователя');
  }

  return (
    <AppContext.Provider
    value={
      { rooms,
        setRooms,
        feedback,
        setFeedback,
        editPost,
        user,
        setUser,
        ChangeRole,
        authenticated,
        setAuthenticated,
        pathPage,
        setPathPage,
        LoginRegisteredUser
      }
    }>
      <div>
        <Router>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/form' element={<Form/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/feedback' element={
                                                <Feedback 
                                                  feedback={feedback}
                                                  setFeedback={setFeedback}
                                                  myId={myId}
                                                />
                                              }/>
              <Route path='/gallery' element={<Gallery/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
              <Route path='/restoran' element={<Restoran/>}/>
              <Route path='/admin' element={<AdminForm
                                                  feedback={feedback}
                                                  setFeedback={setFeedback}
                                                  user={user}
                                                  setUser={setUser}
                                                  editPost={(id)=>{editPost(id)}}
                                                  ChangeRole={(id)=>{ChangeRole(id)}}
                                                />
                                              }/>

            </Routes>
          <Footer/>
        </Router>
      </div>
    </AppContext.Provider>

  );
}

export default App;

