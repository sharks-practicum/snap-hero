import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import styles from './Button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<PropsWithChildren<Props>> = (props) => {

  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  )
}

export default Button
