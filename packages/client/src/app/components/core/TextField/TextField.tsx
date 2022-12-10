import React, { InputHTMLAttributes, PropsWithChildren } from 'react'
import Field from '../Field/Field'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
}

const TextField: React.FC<PropsWithChildren<Props>> = (props) => {

  return (
    <Field type="" {...props}/>
  )
}

export default TextField


