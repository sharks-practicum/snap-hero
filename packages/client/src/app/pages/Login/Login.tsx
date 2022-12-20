import React, {FormEvent, FormEventHandler, MouseEventHandler} from 'react'
import styles from './Login.module.scss'
import Button from '../../components/core/Button/Button'
import TextField from '../../components/core/TextField/TextField'
import PasswordField from '../../components/core/PasswordField/PasswordField'
import {Link, useNavigate} from 'react-router-dom'
import {loginUser} from "../../store/user/user";
import {useDispatch} from "react-redux";
import {AnyAction} from "@reduxjs/toolkit";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isAuth} = useAuth()

  const submitHandler:FormEventHandler<HTMLFormElement> = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    const form = event.target as HTMLFormElement

    const loginData = {
      login: form.login.value,
      password: form.password.value
    }

    const action = loginUser({data: loginData}) as unknown as AnyAction
    await dispatch(action);
    navigate('/')
  }

  const submitBtnClickHandler:MouseEventHandler<HTMLButtonElement>= (): void => {
    console.log("Кнопка оправки нажата")
  }


  return (
      <>
        {isAuth ? <span>" Пользователь уже в системе"</span> :
            <div className={styles.login}>
              <h1>Страничка логина</h1>
              <form action='' onSubmit={submitHandler}>
                <TextField label="Логин" name="login"/>
                <PasswordField label="Пароль" name="password"/>
                <Button onClick={submitBtnClickHandler}>Войти</Button>
                <Link to="/">Вернуться на UIKit</Link>
              </form>
            </div>
        }
      </>
  )
}

export default Login
