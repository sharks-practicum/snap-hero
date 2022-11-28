import React, { FormEventHandler, MouseEventHandler } from 'react'
import styles from './Login.module.css'
import Button from '../../components/core/Button/Button'
import TextField from '../../components/core/TextField/TextField'
import PasswordField from '../../components/core/PasswordField/PasswordField'
import { Link } from 'react-router-dom'

const Login = () => {

  const submitHandler:FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault()
    console.log("Форма отправлена")
  }

  const submitBntClickHandler:MouseEventHandler<HTMLButtonElement>= (): void => {
    console.log("Кнопка оправки нажата")
  }

  return (
    <div className={styles.login}>
      <h1>Страничка логина</h1>
      <form action='' onSubmit={submitHandler}>
        <TextField label="Логин"/>
        <PasswordField label="Пароль"/>
        <Button onClick={submitBntClickHandler}>Войти</Button>
        <Link to="/">Вернуться на UIKit</Link>
      </form>
    </div>
  )
}

export default Login
