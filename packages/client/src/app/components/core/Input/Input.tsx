import { FC } from "react";
import { IInputProps } from "./types";
import s from "./Input.module.scss"

const Input:FC<IInputProps> = ({ value, error, onChange, showType, ...rest}) =>{
    // Добавить обработку других типов пропсов
    return(
        <div className={s.input__wrapper}>
            <input 
                className = {
                    showType==="primary"
                    ?`${s.input_primary}`
                    :`${s.input_secondary}`
                } 
                onChange={onChange}
                value={value}
                {...rest}  
            />
            {!!error && <span className={s.input__error}>{error}</span>}
        </div>
    )
}
export default Input;