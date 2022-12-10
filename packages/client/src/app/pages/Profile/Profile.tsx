import React, {FormEventHandler, MouseEventHandler, useEffect, useState} from 'react'
import styles from './Profile.module.scss'
import Button from '../../components/core/Button/Button'

import {useNavigate} from 'react-router-dom'
import Avatar from "../../components/core/Avatar/Avatar";

interface ProfileData {
    id: number,
    name: string,
    surname?: string,
    login: string,
    email: string,
    phone: string,
    avatar?: string,
}

const getRandomInt = () => {
    return Math.floor(Math.random() * 50);
}

export function getProfileData(): ProfileData[] {
    const index = getRandomInt ()

        return [{
                id: index,
                name: `Пользователь ${index}`,
                surname: `Пользователь ${index}`,
                login: `user${index}`,
                email: `${index}@ya.ru`,
                phone: `88885535353`,
                avatar: `https://sun9-28.userapi.com/s/v1/ig2/kH1ublZYEF07y-zgLMTkYXcQ6vZdDik8kuT8Oq92SobalHF5m_E1H9o2cKqRBUv5X8kBziXDa_JkSfsm8KX6Rcnj.jpg?size=899x899&quality=96&crop=0,0,899,899&ava=1`,
            }]
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

    const [profile, setProfile] = useState<ProfileData[]>([]);
    useEffect(() => {
        const gotProfile = getProfileData()
        setProfile(gotProfile)
    }, []);

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target
        setProfile([{...profile[0], [name]:value }])
    }
    console.log (profile)

    return (
                <div className={styles['profile-wrap']}>
                    <div className={styles.profile}>
                        <div className={styles['profile-form-wrap']}>
                            <div className={styles['profile-form-wrap__header']}>

                                <div className={styles['profile-form-wrap__header_left']}>
                                    <Button onClick={navigateToProfileHandler}
                                            className={styles['profile-form__back-button']}>Профиль</Button>
                                </div>

                                <Avatar edit avatar={profile[0]?.avatar}/>

                                <div className={styles['profile-form-wrap__header_right']}></div>
                            </div>
                            <div className={styles['profile-form-wrap__body']}>
                                <form action='' onSubmit={submitHandler} className={styles['profile-form']}>

                                    <ul className={styles['profile-form__ul-li-input-wrap']}>

                                        <li className={styles['profile-form__input-wrap']}>

                                            <div className={styles['profile-form__input-label-wrap']}>
                                                <span className={styles['profile-form__input-label']}>Имя</span>
                                                <input name="name" onChange={handleChange}
                                                       className={styles['profile-form__input']} value={profile[0]?.name}/>
                                            </div>
                                            <div className={styles['profile-form__input-border']}></div>

                                        </li>
                                        <li className={styles['profile-form__input-wrap']}>

                                            <div className={styles['profile-form__input-label-wrap']}>
                                                <span className={styles['profile-form__input-label']}>Фамилия</span>
                                                <input name="surname" onChange={handleChange}
                                                       className={styles['profile-form__input']}
                                                       value={profile[0]?.surname}/>
                                            </div>
                                            <div className={styles['profile-form__input-border']}></div>

                                        </li>
                                        <li className={styles['profile-form__input-wrap']}>

                                            <div className={styles['profile-form__input-label-wrap']}>
                                                <span className={styles['profile-form__input-label']}>Логин</span>
                                                <input name="login" onChange={handleChange}
                                                       className={styles['profile-form__input']}
                                                       value={profile[0]?.login}/>
                                            </div>
                                            <div className={styles['profile-form__input-border']}></div>

                                        </li>
                                        <li className={styles['profile-form__input-wrap']}>

                                            <div className={styles['profile-form__input-label-wrap']}>
                                                <span className={styles['profile-form__input-label']}>Почта</span>
                                                <input name="email" onChange={handleChange}
                                                       className={styles['profile-form__input']}
                                                       value={profile[0]?.email}/>
                                            </div>
                                            <div className={styles['profile-form__input-border']}></div>

                                        </li>
                                        <li className={styles['profile-form__input-wrap']}>

                                            <div className={styles['profile-form__input-label-wrap']}>
                                                <span className={styles['profile-form__input-label']}>Телефон</span>
                                                <input name="phone" onChange={handleChange}
                                                       className={styles['profile-form__input']}
                                                       value={profile[0]?.phone}/>
                                            </div>
                                            <div className={styles['profile-form__input-border']}></div>

                                        </li>
                                    </ul>

                                    <Button onClick={submitBntClickHandler}
                                            className={styles['profile-form__button']}>Сохранить</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Profile
