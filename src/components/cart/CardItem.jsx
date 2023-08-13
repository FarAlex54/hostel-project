import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { AppContext } from '../../App';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const CardItemTest = () => {
  const cardItemContext = useContext(AppContext);
  const current = new Date();
  const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  const day = `${current.getDate()}`;
  const month = `${monthNames[current.getMonth()]}`;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='row justify-content-center'>
      <div className='col-9 bg-light rounded'>
        <div className='cardGrid'> 
          {cardItemContext.rooms.map(obj=>{
            return (
              <>
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
                 <Card.Img className='rounded' variant="top" src={obj.img1} />
                </Carousel.Item> 
                <Carousel.Item>
                 <Card.Img className='rounded' variant="top" src={obj.img2} />
                </Carousel.Item> 
                <Carousel.Item>
                 <Card.Img className='rounded' variant="top" src={obj.img3} />
                </Carousel.Item> 
                <Carousel.Item>
                 <Card.Img className='rounded' variant="top" src={obj.img4} />
                </Carousel.Item> 
              </Carousel>
        
              <Card.Body onClick={handleShow}>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Text class='lh-1'><p class='fs-3 text-danger'>от {obj.price} &#8381;</p><p>за 1 ночь {day} {month}</p></Card.Text>
                {/* <Card.Text>{props.description}</Card.Text> */}
              </Card.Body>
              <Card.Footer>
                <div className='d-flex justify-content-center'>
                  <Button variant="secondary" className='cardButton'>Узнать цену на другие даты</Button>
                </div>
              </Card.Footer>
            </Card>
                <Modal className='modal-xl' show={show} onHide={handleClose}>
                <Modal.Header closeButton> <Modal.Title>{obj.title}</Modal.Title></Modal.Header>
                <Modal.Body>
                  <Container fluid='xxl'>
                    <Row className='py-1'>
                      <Col className='px-1'>
                        <Image className='rounded' variant="top" src={obj.img1} fluid='true' />
                      </Col>
                      <Col className='px-1'>
                        <Image className='rounded' variant="top" src={obj.img2} fluid='true' />
                      </Col>
                      <Col className='px-1'>
                        <Image className='rounded' variant="top" src={obj.img3} fluid='true'/>
                      </Col>
                    </Row>
        
                    <Row className='py-1'>
                      <Col className='px-1'>
                        <Image className='rounded' variant="top" src={obj.img4} fluid='true'/>
                      </Col>
                      <Col>
                        {obj.description}
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary">
                    Бронировать
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                  </Button>
                </Modal.Footer>
              </Modal>
              </>
          )
      })}
        </div>
      </div>
    </div>
  )
}

export default CardItemTest