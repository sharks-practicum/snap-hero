import React, {ButtonHTMLAttributes, FC, PropsWithChildren} from 'react'
import styles from './Button.module.scss'
import classnames from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  back = 'back',
}

const Button: FC<PropsWithChildren<Props>> = ({variant, className, children, ...props}) => {

  const classButton = classnames(styles.button, className, {
    [styles.primary]: variant === ButtonVariant.primary,
    [styles.secondary]: variant === ButtonVariant.secondary,
    [styles.tertiary]: variant === ButtonVariant.tertiary,
    [styles.back]: variant === ButtonVariant.back,
  })

  return (
    <button className={classButton} {...props}>
      {children}
    </button>
  )
}

export default Button
