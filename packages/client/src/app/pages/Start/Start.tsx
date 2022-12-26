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
            <main className={styles['content-wrap']}>
                <div className={styles['content']}>
                    <div className={styles['content-buttons']}>
                        <Button onClick={navigateToStartHandler} variant={ButtonVariant.primary} className={styles['content-btn-restart']}>Старт</Button>
                        <Button onClick={navigateToStartHandler} variant={ButtonVariant.tertiary} className={styles['content-btn-exit']}>Выход</Button>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Start
