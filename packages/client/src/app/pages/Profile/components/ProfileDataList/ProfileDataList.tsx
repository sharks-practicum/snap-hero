import styles from "./ProfileDataList.module.scss";
import React, {FC} from "react";
import {Input} from "../../../../components/core";

export interface Props {
    name: string,
    value: string,
    onChange: (event: { target: { name: string; value: string; }; }) => void
}

export const ProfileDataList: FC<Props> = ({ name, onChange, value }) => {

    return (
        <li className={styles['form__input-wrap']}>

            <div className={styles['form__input-label-wrap']}>
                <span className={styles['form__input-label']}>{name}</span>
                <Input name={name} onChange={onChange} className={styles['form__input']}
                       value={value} showType="primary"/>
            </div>
            <div className={styles['form__input-border']}></div>

        </li>
    )
}
