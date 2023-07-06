import React from 'react'
import './styles/Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = () => {
  const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})
  return (
    <div class="forms-section">
        <div class="forms">
          <div class="form-wrapper is-active">
            <button type="button" class="switcher switcher-login">
              <p class='text-dark'>Личный кабинет</p>
              <span class="underline"></span>
            </button>
            <form class="form form-login">
              <fieldset>
                <legend>Please, enter your email and password for login.</legend>
                <div class="input-block">
                  <label for="login-email">Логин</label>
                  <input id="login-email" type="text" required/>
                </div>
                <div class="input-block">
                  <label for="login-password">Пароль</label>
                  <input id="login-password" type="password" required/>
                </div>
              </fieldset>
              <button type="submit" class="btn-login">Войти</button>
            </form>
          </div>
          <div class="form-wrapper">
            <button type="button" class="switcher switcher-signup">
            <p class='text-dark'>Регистрация</p>
              <span class="underline"></span>
            </button>
            <form class="form form-signup">
              <fieldset>
                <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                <div class="input-block">
                  <label for="signup-email">Логин</label>
                  <input id="signup-email" type="text" required/>
                </div>
                <div class="input-block">
                  <label for="signup-password">Телефон</label>
                  <input id="signup-password" type="text" required/>
                </div>
                <div class="input-block">
                  <label for="signup-password-confirm">Пароль</label>
                  <input id="signup-password-confirm" type="password" required/>
                </div>
              </fieldset>
              <button type="submit" class="btn-signup">Войти</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Form