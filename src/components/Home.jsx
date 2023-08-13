import React, { useContext } from 'react'
import Banner from './Banner'
import Bron from './Bron'
import Prevfooter from './Prevfooter';
import CardItem from './cart/CardItem'
import { AppContext } from '../App';

const Home = () => {
  const homeContext = useContext(AppContext);
  return (
    <div>
      <Banner/>
      <Bron/>
      <CardItem/>
      <br/>
      <Prevfooter />
      {console.log('Находимся на Главноей странице со статусом пользователя: ' + homeContext.authenticated )}
      <br/>
    </div>
  )
}

export default Home