import React,{ ReactNode, FC } from 'react'
import styles from './Layout.module.scss'
import { HTMLAttributes } from 'react'
import classnames from 'classnames'

interface Props  extends HTMLAttributes<HTMLDivElement>{
    children?: ReactNode;
    gradient?: boolean;
}

const Layout: FC<Props> = ({ className, gradient, children }) => {

    const classLayot = classnames(styles.layout, className, {[styles['layout_layout-background_gradient']]: gradient})

    return (
        <div className = {classLayot} >
            {children}
        </div>
    )
}

export default Layout
