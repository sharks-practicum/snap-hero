import React, { FC, MouseEventHandler, PropsWithChildren} from 'react'
import styles from './Button.module.scss'
import classnames from 'classnames'

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  back = 'back',
}

interface Props {
  variant?: ButtonVariant;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
}

const Button: FC<PropsWithChildren<Props>> = ({variant, className, onClick, disabled, children, ...props}) => {

  const classButton = classnames(styles.button, className, {
    [styles.primary]: variant === ButtonVariant.primary,
    [styles.secondary]: variant === ButtonVariant.secondary,
    [styles.tertiary]: variant === ButtonVariant.tertiary,
    [styles.back]: variant === ButtonVariant.back,
  })

  return (
      <button className={classButton} disabled={disabled} onClick={onClick} {...props}>
        {children}
      </button>
  )
}

export default Button
