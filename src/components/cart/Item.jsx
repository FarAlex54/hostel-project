import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';



const Item = (props) => {
  const current = new Date();
  const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  const day = `${current.getDate()}`;
  const month = `${monthNames[current.getMonth()]}`;

  return (

    <Card className='cardRoom' style={{ width: '28rem' }}>
      <Card.Title className='cardTitle'>
        <div class='bg-secondary rounded d-flex justify-content-center'>
          <img class='p-2' width='10%' height='1%' src='/img/icons/tv.png' title='Сплит система' alt='Сплит система'/>
          <img class='p-2' width='10%' height='1%' src='/img/icons/teapot.png' title='Чайная станция' alt='Чайная станция'/>
          <img class='p-2' width='10%' height='1%' src='/img/icons/hair-dryer.png' title='Фен' alt='Фен'/>
          <img class='p-2' width='10%' height='1%' src='/img/icons/utug.png' title='Утюг' alt='Утюг'/>
          <img class='p-2' width='10%' height='1%' src='/img/icons/cofe.png' title='Кофемашина' alt='Кофемашина'/>
          <img class='p-2' width='10%' height='1%' src='/img/icons/mini-bar.png' title='Минибар' alt='Минибар'/>
          <img class='p-2' width='10%' height='1%' src='/img/icons/conditioner.png' title='Кондиционер' alt='Кондиционер'/>
          <img class='p-2' width='10%' height='1%' src='/img/icons/seif.png' title='Сейф' alt='Сейф'/>
        </div></Card.Title>
      <Carousel interval={null} controls={false}>
        <Carousel.Item>
         <Card.Img className='rounded' variant="top" src={props.img1} />
        </Carousel.Item> 
        <Carousel.Item>
         <Card.Img className='rounded' variant="top" src={props.img2} />
        </Carousel.Item> 
        <Carousel.Item>
         <Card.Img className='rounded' variant="top" src={props.img3} />
        </Carousel.Item> 
        <Carousel.Item>
         <Card.Img className='rounded' variant="top" src={props.img4} />
        </Carousel.Item> 
      </Carousel>

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text class='lh-1'><p class='fs-3 text-danger'>от {props.price} &#8381;</p><p>за 1 ночь {day} {month}</p></Card.Text>
        {/* <Card.Text>{props.description}</Card.Text> */}
        <div className='d-flex justify-content-center'>
          <Button variant="secondary" className='cardButton'>Узнать цену на другие даты</Button>
        </div>
      </Card.Body>
    </Card>

  )
}

export default Item