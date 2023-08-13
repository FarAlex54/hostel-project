import React from 'react'
import { useState } from 'react';

const UserCardAdmin = (props) => {
  const [role, setRole] = useState(props.role);
  const onDelete=()=>{props.onDeleteUser(props.id);}
  const onChange=()=>{
    props.onChangeRole(props.id);
    if (role==='user') {setRole('admin')}else{setRole('user')}
  }


  return (
      <p className="small">
        <div className="d-flex flex-row align-items-center">
          <div className="col-1">{props.id}</div>
          <div className="col-3">{props.name}</div>
          <div className="col-2">{props.login}</div>
          <div className="col-3">{props.phone}</div>
          <div className="col-1">{role}</div>
          <div className="col-1"><i className="bi bi-plus-circle-fill feedbackIcon_plus btn" onClick={onChange}></i></div>
          <div className="col-1"><i className="bi bi-dash-circle-fill feedbackIcon_minus btn" onClick={onDelete}></i></div>
        </div>
      </p>

  )
}

export default UserCardAdmin