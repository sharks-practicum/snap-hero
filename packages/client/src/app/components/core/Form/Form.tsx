import React, {ReactNode, FC} from 'react'
import styles from './Form.module.scss'
import { HTMLAttributes } from 'react'
import classnames from 'classnames'


interface Props  extends HTMLAttributes<HTMLFormElement>{
    children?: ReactNode;
    action?: string;
}

const Form: FC<Props> = ({ className, action, onSubmit, children }) => {

    const classForm = classnames(styles.form, className)

    return (
        <form action={action} onSubmit={onSubmit} className={classForm}>
            {children}
        </form>
    )
}

export default Form
