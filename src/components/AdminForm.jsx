import React from 'react'

const AdminForm = () => {
  return (
    <div className="d-flex flex-row">
      <div className="p-2 col-3 bg-primary">
        <h6 className="text-center">Блок с отзывами</h6>
        <div className="d-flex flex-row">
          <div className="p-2 col-5 bg-light"></div>
          <div className="p-2 col-2 bg-primary"></div>
          <div className="p-2 col-5 bg-light"></div>
        </div>
      </div>  

      <div className="p-2 col-3 bg-danger">
        <h6 className="text-center">Блок с пользователями</h6>
        <div className="d-flex flex-row">
          <div className="p-2 col-5 bg-light"></div>
          <div className="p-2 col-2 bg-danger"></div>
          <div className="p-2 col-5 bg-light"></div>
        </div>
      </div>
      <div className="p-2 col-3 bg-info">
        <h6 className="text-center">Блок с номерами</h6>
        <p className="text-center  small">Описание, фотографии общая инфа</p>
        <div className="d-flex flex-row">
          <div className="p-2 col-5 bg-light"></div>
          <div className="p-2 col-2 bg-info"></div>
          <div className="p-2 col-5 bg-light"></div>
        </div>
      </div>
      <div className="p-2 col-3 bg-danger">
        <h6 className="text-center">Блок с номерами</h6>
        <div className="d-flex flex-row">
          <div className="p-2 col-5 bg-light"></div>
          <div className="p-2 col-2 bg-info"></div>
          <div className="p-2 col-5 bg-light"></div>
        </div>
      </div>
    </div>

  )
}

export default AdminForm