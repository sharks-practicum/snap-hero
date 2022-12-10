import React from 'react';
import styles from './Layout.module.scss'
import { HTMLAttributes } from "react";

interface Props  extends HTMLAttributes<HTMLDivElement>{
    children: React.ReactNode;
    gradient?: boolean;
}

// const Input:FC<IInputProps> = ({ value, error, onChange, className, ...rest}) =>{
const Layout: React.FC<Props> = ({ className, gradient, children }) => {
    return (
        <div className = {`${styles.layout} ${gradient? styles.layout_gradient : ''} ${className || ''}`} >
            {children}
        </div>
    )
}

export default Layout
