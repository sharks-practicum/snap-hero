import React, {
    ChangeEvent,
    FC,
    PropsWithChildren,
    ReactNode, useState
} from 'react'
import styles from './Avatar.module.scss'
import classnames from 'classnames'


interface Props {
    children?: ReactNode;
    className?: string;
    edit?: boolean;
    avatar?: string;
    avatarShark?: boolean;
    size?: AvatarSizeEnum;
}

export enum AvatarSizeEnum {
    standard = 'standard',
    small = 'small',
    big = 'big',
}

export const emptyAvatar = {
    imageSrc: '',
}

export interface AvatarData {
    imageSrc: string | undefined,
}

const Avatar: FC<PropsWithChildren<Props>> = ({ className,edit, avatar,avatarShark, size= AvatarSizeEnum.standard, children }) => {

    const [avatarPreload, setAvatar] = useState<AvatarData>(emptyAvatar);

    const avatarBackgroundImage = avatarPreload.imageSrc ? {backgroundImage:`url(${avatarPreload.imageSrc})`} : {backgroundImage:`url(${avatar})`}
    const avatarSize = {
                [styles['avatar_avatar-size_standard']]: size === AvatarSizeEnum.standard,
                [styles['avatar_avatar-size_small']]: size === AvatarSizeEnum.small,
                [styles['avatar_avatar-size_big']]: size === AvatarSizeEnum.big,
            }
    const classAvatarLabel = classnames(styles['avatar__input-label'], avatarSize)

    const classAvatar = classnames(styles['avatar-default'], className, avatarSize, {
                [styles['avatar_avatar-background_shark']]: avatarShark,
            })

    const avatarStyle = avatar ? avatarBackgroundImage : undefined

    function onFileLoad(e: ChangeEvent<HTMLInputElement>) {

        e.preventDefault();
        if(!e.target.value) return;
        const file = e.target.files?.[0]
        if (file) {
            setAvatar({
                imageSrc: URL.createObjectURL(file)
            })
        }

    }


    return (
        <div className={styles['avatar-container']} >
            <div className={styles['avatar-wrap']}>
                 <div className={classAvatar} style={avatarStyle} >
                     {edit &&
                         <>
                            <label htmlFor="file" className={classAvatarLabel}>Поменять аватар</label>
                            <input className={styles['avatar__input-image']} type="file" id="file" name="file" onChange={(e) => onFileLoad(e)}/>
                         </>
                     }
                     {children}
                </div>
            </div>
        </div>
    )
}

export default Avatar
