import { FC } from "react";
import { IInputProps } from "./types";
import s from "./Input.module.scss"

const Input:FC<IInputProps> = ({ value, error, onChange, className, ...rest}) =>{
    // Добавить обработку других типов пропсов
    return(
        <div className={s.input__wrapper}>
            <input className = {`${s.input} ${className || ''}`} onChange={onChange} {...rest} value={value} />
            {!!error && <span className={s.input__error}>{error}</span>}
        </div>
    )
}
export default Input;