import React from 'react'
import './styles/Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = () => {
  /* const switchers = [...document.querySelectorAll('.switcher')] */


  function handleClick(e){

    const switchers = [...document.getElementsByClassName('switcher')]
    console.log(switchers); 

    switchers.forEach(item => {
      console.log('отработал цикл switchers.forEach');
      item.addEventListener('click', function() {
        console.log('кликнули на нужном элеменете и включился метод item.addEventListener');
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active');
        console.log('Произошло событие')
      })
    })
  }
/* function handleClick(e){
  console.log('Вызвана функция')
  switchers.forEach(item => {
    console.log('отработал цикл switchers.forEach');
    item.addEventListener('click', function() {
      console.log('кликнули на нужном элеменете и включился метод item.addEventListener');
      switchers.forEach(item => item.parentElement.classList.remove('is-active'))
      this.parentElement.classList.add('is-active');
      console.log('Произошло событие')
    })
  })

} */
  

/* switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active');
    console.log('Произошло событие')
	})
}) */
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