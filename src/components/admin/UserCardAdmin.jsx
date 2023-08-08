import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

const UserCardAdmin = (props) => {
  const onDelete=()=>{props.onDeleteUser(props.id);}
  return (
    <div class="py-2">


    <Card>
      <Card.Body>
      <p class="fs-5 px-3">{props.name}</p>
      <p className="small"><i class="bi bi-plus-circle-fill feedbackIcon_plus"></i> {props.login}</p> 
      <p className="small"><i class="bi bi-dash-circle-fill feedbackIcon_minus"></i> {props.password}</p>
      <p className="small"><i class="bi bi-dash-circle-fill feedbackIcon_minus"></i> {props.phone}</p>
      </Card.Body>
      <Card.Footer>
        <div className="d-flex flex-row justify-content-between align-items-center">
        </div>  
          <div className='p-1 col-4'>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className='p-1'>
                  <Button variant="outline-success" size="sm">Сменить роль</Button>
                </div>
                <div className='p-1' >
                  <Button variant="outline-danger" size="sm" onClick={onDelete}>Удалить</Button>
                </div>
            </div>
          </div>
      </Card.Footer>
    </Card>
</div>
  )
}

export default UserCardAdmin