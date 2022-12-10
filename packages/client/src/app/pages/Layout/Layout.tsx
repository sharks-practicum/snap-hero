import React,{ ReactNode, FC } from 'react';
import styles from './Layout.module.scss'
import { HTMLAttributes } from "react";

interface Props  extends HTMLAttributes<HTMLDivElement>{
    children?: ReactNode;
    gradient?: boolean;
}

const Layout: FC<Props> = ({ className, gradient, children }) => {
    return (
        <div className = {`${styles.layout} ${gradient? styles.layout_gradient : ''} ${className || ''}`} >
            {children}
        </div>
    )
}

export default Layout
