import React, { InputHTMLAttributes, PropsWithChildren } from 'react'
import Field from '../Field/Field'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const PasswordField: React.FC<PropsWithChildren<Props>> = (props) => {

  return (
    <Field type="password" {...props}/>
  )
}

export default PasswordField
