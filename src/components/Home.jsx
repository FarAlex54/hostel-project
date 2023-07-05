import React from 'react'
import Banner from './Banner'
import Bron from './Bron'
import Prevfooter from './Prevfooter';
import CardItem from './cart/CardItem'

const Home = (props) => {
  return (
    <div>
      <Banner/>
      <Bron/>
      <CardItem item={props.item}/>
      <br/>
      <Prevfooter />
      <br/>
    </div>
  )
}

export default Home