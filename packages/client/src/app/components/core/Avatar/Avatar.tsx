import React, {CSSProperties, FC, HTMLAttributes, MouseEventHandler, PropsWithChildren, ReactNode} from 'react'
import styles from './Avatar.module.scss'


interface Props extends HTMLAttributes<HTMLDivElement>{
    children?: ReactNode;
    edit?: boolean;
    avatar?: string;
    avatarShark?: boolean;
    size?: string;
}

const Avatar: FC<PropsWithChildren<Props>> = ({ className,edit, avatar,avatarShark, size, children }) => {

    const AvatarClickHandler:MouseEventHandler<HTMLElement>= (): FormData => {
        console.log("Кнопка открытия аватара")

        const avatar = document.createElement('input')
        avatar.type = 'file'
        const avatarData = new FormData()
        avatar.click()

        avatar.onchange = async () => {
            const file = avatar.files?.[0] || null
            if (file) {
                avatarData.append('avatar', file)
                const frame = URL.createObjectURL(file);
                const avatarClass = document.getElementsByClassName(styles['avatar-default']) as HTMLCollectionOf<HTMLElement>;
                avatarClass[0].style.backgroundImage = `url(${frame})`
                avatarClass[0].style.backgroundSize = 'cover'
            }
        };
        return avatarData;
    }

    const avatarStyle={backgroundImage:`url(${avatar})`} as CSSProperties

    return (
        <div className={styles['avatar-container']} onClick={edit? AvatarClickHandler : undefined}>
            <div className={styles['avatar-wrap']}>
                 <div className={`
                          ${styles['avatar-default']} 
                          ${avatarShark? styles['avatar-shark'] : ''} 
                          ${size==='small'? styles['avatar-small'] : size==='big'? styles['avatar-big'] : styles['avatar-standard'] } 
                          ${className || ''} 
                          `}
                      style={avatar ? avatarStyle : undefined}>

                     {edit? <label className={`${styles['avatar__input-label']}  
                                        ${size==='small'? styles['avatar-small'] : size==='big'? styles['avatar-big'] : styles['avatar-standard'] }`}>
                            Поменять аватар</label> : ''
                     }
                     {children}
                </div>
            </div>
        </div>
    )
}

export default Avatar
