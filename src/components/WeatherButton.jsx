import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './styles/WeatherButton.css';
import WeekContainer from './cart/WeekContainer';



function WeatherButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <Button className='weatherbutton' variant="primary" onClick={handleShow}>
        погода
      </Button>
 
      <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <WeekContainer/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default WeatherButton;