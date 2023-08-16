import React, { useState, useContext, useEffect } from 'react'
import './styles/Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { AppContext } from '../App';


const Form = () => {
  const formContext = useContext(AppContext);
  const [switchers, setSwitchers] = useState([]);
  const navigate = useNavigate(); 
  const {register, handleSubmit, formState:{errors}, getValues, setValue, reset}=useForm();
  const {register:registerLogin, handleSubmit:handleSubmitLogin, formState:{errors:errorsLogin}, getValues:getValuesLogin, setValue:setValuesLogin, reset:resetLogin}=useForm();

  useEffect(() => {const switchersData = [...document.getElementsByClassName('switcher')];setSwitchers(switchersData);}, [])    
  function handleClick(e){
    e.preventDefault();
    switchers.forEach(item => {     
        if (item.parentElement.classList.toString().includes('is-active')){item.parentElement.classList.remove('is-active')}
        else {item.parentElement.classList.add('is-active');}})
  }
  const onSubmitRegister = (data) => {
    setValue('role','user');
    let values = getValues();
    let flag = false;
    formContext.user.map((userLogin) => {if (userLogin.login===values.signupLogin) {flag = true;alert('Такой логин существует в базе')}});
    if (!flag) {
                console.log('Такого Logina нет в базе: '+ values.login);
                formContext.setUser([...formContext.user, values]);
                formContext.setAuthenticated(true);
                formContext.LoginRegisteredUser=values.login;
                axios.post('http://localhost:3001/users/', values);
              }
              else{
                console.log('Такой Login есть в базе: '+values.login); 
                formContext.setAuthenticated(false);            
              }
    console.log('setAuthenticated: '+formContext.authenticated);  
    console.log('LoginRegisteredUser: '+formContext.LoginRegisteredUser); 
    reset();
    navigate("/");
  }
  const onSubmitLogin = (data) => {
    formContext.user.map((userLogin) => {if (userLogin.login===data.login && userLogin.password===data.password) {
                                                                            formContext.setAuthenticated(true);
                                                                            formContext.setPathPage('/');
                                                                            formContext.LoginRegisteredUser=userLogin.login;
                                                                            if (userLogin.role==='admin'){navigate("/admin")}
                                                                                                     else{navigate("/")}
                                                                           }                               
                                        });
    console.log('LoginRegisteredUser: '+formContext.LoginRegisteredUser);                                 
    resetLogin();
  }
  return (
    <div className="forms-section">
        <div className="forms">
          <div className="form-wrapper">
            <button type="button" class="switcher switcher-login" onClick={handleClick}>
              <p className='text-dark'>Личный кабинет</p>
              <span className="underline"></span>
            </button>
             <form className="form form-login" onSubmit={handleSubmitLogin(onSubmitLogin)}>
              <fieldset>
                <legend>Please, enter your email and password for login.</legend>
                <div className="input-block">
                  <label htmlFor="login-login">Логин</label>
                  <input id="login-login" type="text" {...registerLogin('login')} required/>
                </div>
                <div className="input-block">
                  <label htmlFor="login-password">Пароль</label>
                  <input id="login-password" type="password" {...registerLogin('password')} required/>
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
              <form className="rounded p-2 form form-signup" onSubmit={handleSubmit(onSubmitRegister)}>
                <fieldset>
                  <div className="input-block">
                                <label htmlFor="signup-name">Ваше имя</label>
                                <input id="signup-name" type="text" {...register('name')} required/>
                  </div>
                  <div className="input-block">
                                <label htmlFor="signup-login">Логин</label>
                                <input id="signup-login" type="text" {...register('login')} required/>
                  </div>
                  <div className="input-block">
                                <label htmlFor="signup-phone">Телефон</label>
                                <input id="signup-phone" type="text" {...register('phone')} required/>
                  </div>
                  <div className="input-block">
                                <label htmlFor="signup-password">Пароль</label>
                                <input id="signup-password" type="password" {...register('password')} required/>
                  </div>
                  <button type="submit" className="btn-signup">Зарегистрироваться</button>
                </fieldset>
              </form>
          </div>
        </div>

    </div>
  )
}
export default Form