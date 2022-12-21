import React, { useEffect, useState } from 'react'
import { getForums } from "./fake-data"
import styles from './styles.module.scss'
import { useNavigate } from "react-router-dom"
import ForumRow from "./ForumRow"
import Icon from "../../components/core/Icon"

interface lastPost {
    date: string;
    userAvatarUrl: null;
    userName: string;
    postTitle: string;
}

export interface Forum {
    id: number;
    title: string;
    description: string;
    lastPost: lastPost;
    postsCount: number;
    repliesCount: number;
}
const ForumPage = () => {
    const [forums, setForums] = useState<Forum[]>([]);

    useEffect(() => {
        const gotForums = getForums()
        setForums(gotForums)
    }, []);

    const navigate = useNavigate();

    const onClickToRow = (forumId: number) => {
        navigate(`/forum/${forumId}/posts`)
    }

    const ForumRows = forums.map((forum) =>
            <ForumRow forum={forum} key={forum.id} onClickToRow={onClickToRow} />
        )

  return (
    <div className={styles['layout-outer']}>
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Разделы</th>
                <th>
                    <Icon name='forum' color='white' size={16}/>
                </th>
                <th>
                    <Icon name='message-reply' color='white' size={16}/>
                </th>
                <th>Последний пост</th>
            </tr>
            </thead>
            <tbody>
                { ForumRows }
            </tbody>
        </table>
    </div>
  )
}

export default ForumPage
