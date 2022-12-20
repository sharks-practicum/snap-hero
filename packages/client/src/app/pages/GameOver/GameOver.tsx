import React from "react";
import Layout from "../Layout/Layout";
import styles from './GameOver.module.scss'
import Button, {ButtonVariant} from "../../components/core/Button/Button";
import {useNavigate} from "react-router-dom";

function GameOver() {
    const navigate = useNavigate();
    const navigateToStartHandler = () => {
        navigate('/')
    }

    return (
        <Layout withGradient>
            <div className={styles['game-over-container-wrap']}>
                <div className={styles['game-over-container']}>
                    <div className={styles['wrap-for-game-over-icon-container']}>
                        <div className={styles['game-over-cat-icon-container']}></div>
                        {/*<div className={styles['game-over-icon-container']}></div>*/}
                    </div>

                    <div className={styles['wrap-for-game-over-button']}>
                        <Button onClick={navigateToStartHandler} variant={ButtonVariant.primary} className={styles['game-over-button-start']}>НАЧАТЬ ЗАНОВО?</Button>
                            <Button onClick={navigateToStartHandler} variant={ButtonVariant.tertiary} className={styles['game-over-button-exit']}>Выход</Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

    export default GameOver
