import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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



function App() {
  const [rooms, setRooms] = useState([])

  useEffect (()=>{
    async function axiosData(){
      const roomsData = await axios.get('https://64775eca9233e82dd53b8a86.mockapi.io/rooms')
      setRooms(roomsData.data)
    }
    axiosData();
  },[]);
  return (
    <div>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<Home item={rooms}/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/restoran' element={<Restoran/>}/>
          </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

