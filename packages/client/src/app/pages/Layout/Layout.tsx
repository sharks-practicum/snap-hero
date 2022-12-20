import React,{ ReactNode, FC } from 'react'
import styles from './Layout.module.scss'
import { HTMLAttributes } from 'react'
import classnames from 'classnames'

interface Props  extends HTMLAttributes<HTMLDivElement>{
    children?: ReactNode;
    withGradient?: boolean;
}

const Layout: FC<Props> = ({ className, withGradient, children }) => {

    const classLayot = classnames(styles.layout, className, {[styles['layout_background-gradient']]: withGradient})

    return (
        <div className = {classLayot} >
            {children}
        </div>
    )
}

export default Layout
