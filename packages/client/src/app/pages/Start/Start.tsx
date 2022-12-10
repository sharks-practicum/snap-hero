import React from "react";
import Layout from "../Layout/Layout";
import styles from './Start.module.scss'
import Button from "../../components/core/Button/Button";

import {useNavigate} from "react-router-dom";

function Start() {
    const navigate = useNavigate();
    const navigateToStartHandler = () => {
        navigate('/')
    }

    return (
        <Layout gradient>
            <div className={styles.game_over_container_wrap}>
                <div className={styles.start_container}>
                    <div className={styles.wrap_for_start_icon_container}>
                        <div className={styles.start_icon_container}></div>
                    </div>

                    <div className={styles.wrap_for_start_button}>
                        <Button onClick={navigateToStartHandler} className={styles.start_button_play}>Старт</Button>
                        <Button onClick={navigateToStartHandler} className={styles.start_button_exit}>Выход</Button>
                    </div>
                </div>
            </div>



        </Layout>
    );
}

export default Start
