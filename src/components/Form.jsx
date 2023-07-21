import React from 'react'
import './styles/Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = () => {
  const switchers = [...document.querySelectorAll('.switcher')]
  console.log('Открылась форма')
switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active');
    console.log('Произошло событие')
	})
})
  return (
    <div className="forms-section">
        <div className="forms">
          <div className="form-wrapper is-active">
            <button type="button" className="switcher switcher-login">
              <p className='text-dark'>Личный кабинет</p>
              <span className="underline"></span>
            </button>
            <form className="form form-login">
              <fieldset>
                <legend>Please, enter your email and password for login.</legend>
                <div className="input-block">
                  <label for="login-email">Логин</label>
                  <input id="login-email" type="text" required/>
                </div>
                <div className="input-block">
                  <label for="login-password">Пароль</label>
                  <input id="login-password" type="password" required/>
                </div>
              </fieldset>
              <button type="submit" className="btn-login">Войти</button>
            </form>
          </div>
          <div className="form-wrapper">
            <button type="button" className="switcher switcher-signup">
            <p className='text-dark'>Регистрация</p>
              <span className="underline"></span>
            </button>
            <form className="form form-signup">
              <fieldset>
                <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                <div className="input-block">
                  <label for="signup-email">Логин</label>
                  <input id="signup-email" type="text" required/>
                </div>
                <div className="input-block">
                  <label for="signup-password">Телефон</label>
                  <input id="signup-password" type="text" required/>
                </div>
                <div className="input-block">
                  <label for="signup-password-confirm">Пароль</label>
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