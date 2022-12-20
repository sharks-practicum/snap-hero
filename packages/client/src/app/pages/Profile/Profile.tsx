import React, {FormEventHandler, MouseEventHandler} from 'react'
import styles from './Profile.module.scss'
import Button, {ButtonVariant} from '../../components/core/Button/Button'

import {useNavigate} from 'react-router-dom'
import Avatar from "../../components/core/Avatar/Avatar";
import {profile, ProfileDataList} from "./components/ProfileDataList/ProfileDataList";


export interface ProfileData {
    id: number,
    name: string,
    surname: string,
    login: string,
    email: string,
    phone: string,
    avatar: string,
}

const getRandomInt = () => {
    return Math.floor(Math.random() * 50);
}

export function getProfileData(): ProfileData {
    const index = getRandomInt()

    return {
        id: index,
        name: `Пользователь ${index}`,
        surname: `Пользователь ${index}`,
        login: `user${index}`,
        email: `${index}@ya.ru`,
        phone: `88885535353`,
        avatar: `https://sun9-28.userapi.com/s/v1/ig2/kH1ublZYEF07y-zgLMTkYXcQ6vZdDik8kuT8Oq92SobalHF5m_E1H9o2cKqRBUv5X8kBziXDa_JkSfsm8KX6Rcnj.jpg?size=899x899&quality=96&crop=0,0,899,899&ava=1`,
    }
}

const Profile = () => {

    const submitHandler:FormEventHandler<HTMLFormElement> = (event): void => {
        event.preventDefault()
        console.log("Форма отправлена")
    }

    const submitBntClickHandler:MouseEventHandler<HTMLButtonElement>= (): void => {
        console.log("Кнопка оправки нажата")
    }

    const navigate = useNavigate();
    const navigateToProfileHandler = () => {
        navigate('/profile')
    }


    return (
        <div className={styles['profile-wrap']}>
            <div className={styles.profile}>
                <div className={styles['profile-form-wrap']}>
                    <div className={styles['profile-form-wrap__header']}>

                        <div className={styles['profile-form-wrap__header_left']}>
                            <Button onClick={navigateToProfileHandler}
                                    variant={ButtonVariant.back} className={styles['profile-form__button-back']}>Профиль</Button>
                        </div>

                        <Avatar edit avatar={profile.avatar} size="standard"/>

                        <div className={styles['profile-form-wrap__header_right']}></div>
                    </div>
                    <div className={styles['profile-form-wrap__body']}>

                        <form action='' onSubmit={submitHandler} className={styles['profile-form']}>

                            {ProfileDataList}
                            <Button onClick={submitBntClickHandler} variant={ButtonVariant.secondary} className={styles['profile-form__button-form']}>Сохранить</Button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
