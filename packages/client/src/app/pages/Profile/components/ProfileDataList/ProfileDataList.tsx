import styles from "./ProfileDataList.module.scss";
import React, {FC, useEffect, useState} from "react";
import {emptyProfile, getProfileData, ProfileData, ProfileInputLabel} from "../../Profile";

export const ProfileDataList: FC = () => {

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target
        setProfile({...profile, [name]:value })
    }

    const [profile, setProfile] = useState<ProfileData>(emptyProfile);
    useEffect(() => {
        const gotProfile = getProfileData()
        setProfile(gotProfile)
    }, []);


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