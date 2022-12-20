import styles from './UIKit.module.scss'
import Button from '../../components/core/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '../../components/core/TextField/TextField'
import PasswordField from '../../components/core/PasswordField/PasswordField'

const UIKit = () => {
  const navigate = useNavigate();
  const navigateToLoginHandler = () => {
    navigate('/login')
  }

  return (
    <div className="center">
      <h1>Страничка UIKit</h1>
      Меню для переключения между страницами
      <nav>
        <Link to="/login">Login(переход по ссылке)</Link>
        <Button onClick={navigateToLoginHandler}>Login(переход по кнопке)</Button>
      </nav>

      <div className={styles.ui}>
        <Button>Кнопка</Button>
        <TextField label="Поле ввода текста"/>
        <PasswordField label="Поле ввода пароля"/>
      </div>
    </div>
  )
}

export default UIKit
