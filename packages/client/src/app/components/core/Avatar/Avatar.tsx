import React, {CSSProperties, FC, HTMLAttributes, MouseEventHandler, PropsWithChildren, ReactNode} from 'react'
import styles from './Avatar.module.scss'
import classnames from 'classnames'

interface Props extends HTMLAttributes<HTMLDivElement>{
    children?: ReactNode;
    edit?: boolean;
    avatar?: string;
    avatarShark?: boolean;
    size?: string;
}

export enum AvatarSizeEnum {
    standard = 'standard',
    small = 'small',
    big = 'big',
}

const Avatar: FC<PropsWithChildren<Props>> = ({ className,edit, avatar,avatarShark, size, children }) => {

    const AvatarClickHandler:MouseEventHandler<HTMLElement>= (): FormData => {

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

    const avatarBackgroundImage = {backgroundImage:`url(${avatar})`} as CSSProperties
    const avatarSize = {
                [styles['avatar_avatar-size_standard']]: size === AvatarSizeEnum.standard,
                [styles['avatar_avatar-size_small']]: size === AvatarSizeEnum.small,
                [styles['avatar_avatar-size_big']]: size === AvatarSizeEnum.big,
            }
    const classAvatarLabel = classnames(styles['avatar__input-label'], avatarSize)


    const onClick = edit? AvatarClickHandler : undefined

    const classAvatar = classnames(styles['avatar-default'], className, avatarSize, {
                [styles['avatar_avatar-background_shark']]: avatarShark,
            })

    const avatarStyle = avatar ? avatarBackgroundImage : undefined

    const label = edit? <label className={classAvatarLabel}> Поменять аватар </label> : ''


    return (
        <div className={styles['avatar-container']} onClick={onClick}>
            <div className={styles['avatar-wrap']}>
                 <div className={classAvatar}  style={avatarStyle}>
                     {label}
                     {children}
                </div>
            </div>
        </div>
    )
}

export default Avatar
