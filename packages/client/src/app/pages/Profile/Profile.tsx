import React, {FormEventHandler, MouseEventHandler, useEffect, useState} from 'react'
import styles from './Profile.module.scss'
import Button, {ButtonVariant} from '../../components/core/Button/Button'

import {useNavigate} from 'react-router-dom'
import Avatar from "../../components/core/Avatar/Avatar";
import {ProfileDataList} from "./components/ProfileDataList/ProfileDataList";
import Form from "../../components/core/Form/Form";

export enum ProfileInputLabel {
    id = 'id',
    name = 'Имя',
    surname = 'Фамилия',
    login = 'Логин',
    email = 'Почта',
    phone = 'Телефон',
    avatar = 'avatar',
}

export const emptyProfile = {
    id: 0,
    name: '',
    surname: '',
    login: '',
    email: '',
    phone: '',
    avatar: '',
}

export interface ProfileData {
    id: number,
    name: string,
    surname: string,
    login: string,
    email: string,
    phone: string,
    avatar: string,
}

export const getRandomInt = () => {
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

    const [profile, setProfile] = useState<ProfileData>(emptyProfile);
    useEffect(() => {
        const gotProfile = getProfileData()
        setProfile(gotProfile)
    }, []);

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target
        setProfile({...profile, [name]:value })
    }

    const arr: JSX.Element[] = [];

    const listNodes =
        Object.entries(profile).reduce(function(filtered, [key, value]) {
            const filter: string[] = [ProfileInputLabel.id , ProfileInputLabel.avatar]
            if(!filter.includes(key)) {
                const label = ProfileInputLabel[key as keyof typeof ProfileInputLabel]
                const filteredValue = <ProfileDataList name={label} value={value} onChange={handleChange}/>
                filtered.push(filteredValue);
            }
            return filtered
        }, arr)

    return (
        <div className={styles['profile-wrap']}>
            <div className={styles.profile}>
                <div className={styles['profile-form-wrap']}>
                    <div className={styles['form__header']}>

                        <div className={styles['form__header_left']}>
                            <Button onClick={navigateToProfileHandler}
                                    variant={ButtonVariant.back} className={styles['form__button-back']}>Профиль</Button>
                        </div>

                        <Avatar edit avatar={profile.avatar}/>

                        <div className={styles['form__header_right']}></div>
                    </div>
                    <div className={styles['form__body']}>

                        <Form onSubmit={submitHandler} className={styles['form']}>

                            <ul className={styles['form__list-wrap']}>
                                {listNodes.length ? listNodes : <p className={styles['form__list_empty']}>Список пуст</p>}
                            </ul>

                            <Button onClick={submitBntClickHandler} variant={ButtonVariant.secondary} className={styles['form__button-save']}>Сохранить</Button>
                        </Form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
