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


function App() {
  const [rooms, setRooms] = useState([])
  const [feedback, setFeedback] = useState([])
  useEffect (()=>{
    async function axiosData(){
      const roomsData = await axios.get('https://64775eca9233e82dd53b8a86.mockapi.io/rooms')
      const feedbackData = await axios.get('https://64775eca9233e82dd53b8a86.mockapi.io/feedback');
      setRooms(roomsData.data)
      setFeedback(feedbackData.data)
    }
    axiosData();
  },[]);

  let myId=0;
  feedback.map((item) => {if (item.id>myId) {myId=item.id}});

  const editPost=(id)=>{
    axios.delete(`https://64775eca9233e82dd53b8a86.mockapi.io/feedback/${id}`);
    
    /* setFeedback((feed)=>feed.filter(item=>item.id !== id)); */
    
    feedback.map((item) => {if (item.id===id) {
      item.moderator='on';
      axios.post('https://64775eca9233e82dd53b8a86.mockapi.io/feedback', item);
      }})
    setFeedback(feedback); 
  }

  return (
    <AppContext.Provider
    value={
      { rooms,
        setRooms,
        feedback,
        setFeedback,
        editPost
      }
    }>
      <div>
        <Router>
          <Header/>
            <Routes>
              <Route path='/' element={<Home item={rooms}/>}/>
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
                                                  editPost={(id)=>{editPost(id)}}
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

