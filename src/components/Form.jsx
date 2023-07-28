import React, { useState } from 'react'
import './styles/Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminForm from './AdminForm';
import {useNavigate} from 'react-router-dom';

const Form = () => {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate(); 

  function handleClick(e){
    e.preventDefault();
    const switchers = [...document.getElementsByClassName('switcher')]
    switchers.forEach(item => {
      item.addEventListener('click', function() {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active');
      })
    })
  }
  function CheckLogin(e){
    e.preventDefault();
    setLogin(document.getElementById('login-email').value);
    setPass(document.getElementById('login-password').value);
  }

  return (
    <div className="forms-section">
        <div className="forms">
          <div className="form-wrapper">
            <button type="button" class="switcher switcher-login" onClick={handleClick}>
              <p className='text-dark'>Личный кабинет</p>
              <span className="underline"></span>
            </button>
            <form className="form form-login" onChange={CheckLogin} onSubmit={(e)=>{e.preventDefault();(login&&pass) === 'admin' ? navigate("/admin")  : console.log('данные НЕЕЕЕ совпадают с админскими')}}>
              <fieldset>
                <legend>Please, enter your email and password for login.</legend>
                <div className="input-block">
                  <label htmlFor="login-email">Логин</label>
                  <input id="login-email" type="text" required/>
                </div>
                <div className="input-block">
                  <label htmlFor="login-password">Пароль</label>
                  <input id="login-password" type="password" required/>
                </div>
              </fieldset>
              <button type="submit" className="btn-login">Войти</button>
            </form>
          </div>
          <div className="form-wrapper is-active">
            <button type="button" class="switcher switcher-signup" onClick={handleClick}>
            <p className='text-dark'>Регистрация</p>
              <span className="underline"></span>
            </button>
            <form className="form form-signup">
              <fieldset>
                <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                <div className="input-block">
                  <label htmlFor="signup-email">Логин</label>
                  <input id="signup-email" type="text" required/>
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password">Телефон</label>
                  <input id="signup-password" type="text" required/>
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password-confirm">Пароль</label>
                  <input id="signup-password-confirm" type="password" required/>
                </div>
              </fieldset>
              <button type="submit" className="btn-signup">Войти</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Form