import styles from "../../ProfileDataList.module.scss";
import React, {FC, useEffect, useState} from "react";
import {getProfileData, ProfileData} from "../../Profile";

export enum ProfileInputLabel {
    id = 'id',
    name = 'Имя',
    surname = 'Фамилия',
    login = 'Логин',
    email = 'Почта',
    phone = 'Телефон',
    avatar = 'Аватар',
}

const emptyProfile = {
    id: 0,
    name: '',
    surname: '',
    login: '',
    email: '',
    phone: '',
    avatar: '',
}

const handleChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target
    setProfile({...profile, [name]:value })
}

export const [profile, setProfile] = useState<ProfileData>(emptyProfile);


export const ProfileDataList: FC = () => {

    useEffect(() => {
        const gotProfile = getProfileData()
        setProfile(gotProfile)
    }, []);

    const { listProfile } = useAppSelector(state => state.profile)

    const listNodes =
            Object.entries(profile).filter(([key]) => (key !== "id" && key !== "avatar")).map(([key, value]) => (

                <li className={styles['profile-form__input-wrap']}>

                    <div className={styles['profile-form__input-label-wrap']}>
                        <span className={styles['profile-form__input-label']}>{ProfileInputLabel[key as keyof typeof ProfileInputLabel]}</span>
                        <input name={key} onChange={handleChange}
                               className={styles['profile-form__input']} value={value}/>
                    </div>
                    <div className={styles['profile-form__input-border']}></div>

                </li>
            ))


    return (
        <ul className={styles['profile-form__ul-li-input-wrap']}>
            {listNodes.length ? listNodes : <p className={styles.empty}>Список пуст</p>}
        </ul>
    )
}