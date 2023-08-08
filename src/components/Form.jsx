import React, { useState } from 'react'
import './styles/Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminForm from './AdminForm';
import {useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form'
import axios from 'axios';

const Form = (props) => {
  const navigate = useNavigate(); 
  const {register,handleSubmit, watch, formState:{errors}, getValues, setValue, reset}=useForm();

  function handleClick(e){
    e.preventDefault();
    console.log('Кликнули');
    const switchers = [...document.getElementsByClassName('switcher')]
    console.log('получили switchers: '+switchers);
    switchers.forEach(item => { 
      item.addEventListener('click', function() {
        console.log('перебрали все itemы в switchers: '+item);
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active');
      })
    })
  }
/*   function CheckLogin(e){
    e.preventDefault();
    setLogin(document.getElementById('login-email').value);
    setPass(document.getElementById('login-password').value);
  } */
  const onSubmit = (data) => {
    setValue('role','user');
    let values = getValues();
    axios.post('https://faralex54.free.beeceptor.com/users', values);
    console.log('Values ',values);
 /*    props.setUser([...props.user, values]); */
    reset();
  }
  return (
    <div className="forms-section">
        <div className="forms">
          <div className="form-wrapper">
            <button type="button" class="switcher switcher-login" onClick={handleClick}>
              <p className='text-dark'>Личный кабинет</p>
              <span className="underline"></span>
            </button>
             <form className="form form-login">
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
              <form className="rounded p-2 form form-signup" onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                  <div className="input-block">
                                <label htmlFor="signup-email">Ваше имя</label>
                                <input id="signup-email" type="text" {...register('name')} required/>
                  </div>
                  <div className="input-block">
                                <label htmlFor="signup-email">Логин</label>
                                <input id="signup-email" type="text" {...register('login')} required/>
                  </div>
                  <div className="input-block">
                                <label htmlFor="signup-password">Телефон</label>
                                <input id="signup-password" type="text" {...register('phone')} required/>
                  </div>
                  <div className="input-block">
                                <label htmlFor="signup-password-confirm">Пароль</label>
                                <input id="signup-password-confirm" type="password" {...register('password')} required/>
                  </div>
                  <button type="submit" className="btn-signup">Войти</button>
                </fieldset>
              </form>
          </div>
        </div>
    </div>
  )
}

export default Form