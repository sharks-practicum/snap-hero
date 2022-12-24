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
            <div className={styles['content-wrap']}>
                <div className={styles['cat-content']}></div>
                <div className={styles['content']}>
                    <div className={styles['content-header']}>
                        <span className={styles['content-header_big']}>Ритмическая игра</span>
                        <span className={styles['content-header_small']}>
                            Яндекс Практикум 20 когорта Sharks Team
                        </span>
                        <Avatar avatarShark size={AvatarSizeEnum.standard}/>
                    </div>

                    <div className={styles['content-body']}>
                        <span className={styles['content-text']}>      Игроки сопоставляют ноты, которые прокручиваются на экране до цветных кнопок ладов на контроллере,
                        играя на контроллере в такт музыке, чтобы набирать очки и поддерживать интерес виртуальной аудитории.</span>
                        <span className={styles['content-text']}>      Игра имитирует  особенности игры на настоящей гитаре, в том числе использование
                        быстрых ударов молотком и пулл-оффов, а также использование ударной планки для изменения высоты
                        звука нот. </span>
                    </div>
                    <div className={styles['content-buttons']}>
                        <Button onClick={navigateToLoginHandler} variant={ButtonVariant.primary} className={styles['content-btn-welcome']}>Вперёд</Button>
                    </div>
                </div>
            </div>



        </Layout>
    );
}

export default Welcome
