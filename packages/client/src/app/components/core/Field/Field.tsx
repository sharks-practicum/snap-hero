import React, { InputHTMLAttributes, PropsWithChildren } from 'react'
import styles from './Field.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Field: React.FC<PropsWithChildren<Props>> = ({label, ...props}) => {
  return (
    <label className={styles.label}>
      <span className={styles.text}>{label}</span>
      <input className={styles.input} {...props}/>
    </label>
  )
}

export default Field
