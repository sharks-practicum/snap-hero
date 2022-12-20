import React from "react";
import Layout from "../Layout/Layout";
import styles from './Start.module.scss'
import Button, {ButtonVariant} from "../../components/core/Button/Button";

import {useNavigate} from "react-router-dom";

function Start() {
    const navigate = useNavigate();
    const navigateToStartHandler = () => {
        navigate('/')
    }

    return (
        <Layout withGradient>
            <div className={styles['start-container-wrap']}>
                <div className={styles['start-container']}>
                    <div className={styles['wrap-for-start-icon-container']}>
                        <div className={styles['start-icon-container']}></div>
                    </div>

                    <div className={styles['wrap-for-start-button']}>
                        <Button onClick={navigateToStartHandler} variant={ButtonVariant.primary} className={styles['start-button-play']}>Старт</Button>
                        <Button onClick={navigateToStartHandler} variant={ButtonVariant.tertiary} className={styles['start-button-exit']}>Выход</Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Start
