import React from "react";
import Layout from "../Layout/Layout";
import styles from './Welcome.module.scss'
import Button, {ButtonVariant} from '../../components/core/Button/Button'
import Avatar, {AvatarSizeEnum} from "../../components/core/Avatar/Avatar";
import {useNavigate} from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();
    const navigateToLoginHandler = () => {
        navigate('/login')
    }

    return (
        <Layout withGradient>
            <div className={styles['welcome-container']}>
                <div className={styles['wrap-for-cat-container']}>
                    <div className={styles['cat-container']}></div>
                </div>
                <div className={styles['words-container']}>
                    <div className={styles['words-container__span-header']}>
                        <span className={styles['words-container__span-header__content']}>Ритмическая игра</span>
                        <span className={styles['words-container__span-header__content_small']}>
                            Яндекс Практикум 20 когорта Sharks Team
                        </span>
                        <Avatar avatarShark size={AvatarSizeEnum.standard}/>
                    </div>

                    <div className={styles['words-container__span-body']}>
                        <span className={styles['words-container__span-body__content']}>      Игроки сопоставляют ноты,
                        которые прокручиваются на экране до цветных кнопок ладов на контроллере,
                        играя на контроллере в такт музыке, чтобы набирать очки и поддерживать интерес виртуальной аудитории.</span>
                        <span className={styles['words-container__span-body__content']}>      Игра имитирует  особенности игры на настоящей гитаре, в том числе использование
                        быстрых ударов молотком и пулл-оффов, а также использование ударной планки для изменения высоты
                        звука нот. </span>
                    </div>
                    <div className={styles['wrap-for-welcome-button']}>
                        <Button onClick={navigateToLoginHandler} variant={ButtonVariant.primary} className={styles['welcome-button']}>Вперёд</Button>
                    </div>
                </div>
            </div>



        </Layout>
    );
}

export default Welcome
