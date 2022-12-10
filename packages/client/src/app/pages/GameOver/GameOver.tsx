import React from "react";
import Layout from "../Layout/Layout";
import styles from './GameOver.module.scss'
import Button from "../../components/core/Button/Button";
import {useNavigate} from "react-router-dom";

function GameOver() {
    const navigate = useNavigate();
    const navigateToStartHandler = () => {
        navigate('/')
    }

    return (
        <Layout gradient>
            <div className={styles.game_over_container_wrap}>
                <div className={styles.game_over_container}>
                    <div className={styles.wrap_for_game_over_icon_container}>
                        <div className={styles.game_over_cat_icon_container}></div>
                        {/*<div className={styles.game_over_icon_container}></div>*/}
                    </div>

                    <div className={styles.wrap_for_game_over_button}>
                        <Button onClick={navigateToStartHandler} className={styles.game_over_button_start}>НАЧАТЬ ЗАНОВО?</Button>
                        <Button onClick={navigateToStartHandler} className={styles.game_over_button_exit}>Выход</Button>
                    </div>
                </div>
            </div>



        </Layout>
    );
}

export default GameOver
