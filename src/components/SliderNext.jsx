import React from 'react'
import CardItem from './cart/CardItem';
import { useState, useEffect } from 'react';
import axios from 'axios';




const SliderNext = () => {
  const [rooms, setRooms] = useState([])
  useEffect(()=>{
   async function axiosData() {
     const roomsData = await axios.get('https://64775eca9233e82dd53b8a86.mockapi.io/rooms');
     setRooms(roomsData.data);
   }
 axiosData();
 },[])
  return (
         

          <CardItem item={rooms}/>

          
/*           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../img/econom3.jpg" />
            <Card.Body>
              <Card.Title>Однокомнатный рум</Card.Title>
              <Card.Text>10000 руб./сут</Card.Text>
              <Button variant="primary">Инфо</Button>
            </Card.Body>
          </Card> */
/*           <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../img/econom4.jpg" />
            <Card.Body>
              <Card.Title>Двухкомнатный рум</Card.Title>
              <Card.Text>20000 руб./сут</Card.Text>
              <Button variant="primary">Инфо</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../img/lyx4.jpg" />
            <Card.Body>
              <Card.Title>Трехкомнатный рум</Card.Title>
              <Card.Text>30000 руб./сут</Card.Text>
              <Button variant="primary">Инфо</Button>
            </Card.Body>
          </Card> */
        


     /*  <Carousel.Item>
        <div className='cards-wrapper'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../img/lyx4.jpg" />
            <Card.Body>
              <Card.Title>Четырехкомнатный рум</Card.Title>
              <Card.Text>40000 руб./сут</Card.Text>
              <Button variant="primary">Инфо</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../img/stand3.jpg" />
            <Card.Body>
              <Card.Title>Пятикомнатный рум</Card.Title>
              <Card.Text>50000 руб./сут</Card.Text>
              <Button variant="primary">Инфо</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../img/econom4.jpg" />
            <Card.Body>
              <Card.Title>Шестикомнатный рум</Card.Title>
              <Card.Text>60000 руб./сут</Card.Text>
              <Button variant="primary">Инфо</Button>
            </Card.Body>
          </Card>
        </div>
      </Carousel.Item> */
     

  );
}

export default SliderNext