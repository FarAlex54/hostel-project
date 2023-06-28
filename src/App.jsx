import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Bron from './components/Bron';
import Prevfooter from './components/Prevfooter';
import CardItem from './components/cart/CardItem';
import { useState, useEffect } from 'react';
import axios from 'axios';





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
       <Header/>
       <Banner/>
       <Bron/>
      <CardItem item={rooms}/>
      <br/>
       <Prevfooter />
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
