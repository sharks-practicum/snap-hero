import React, { useEffect, useState } from 'react'
import { getPostComments, getPostInfo } from "../fake-data"
import commonStyles from '../styles.module.scss'
import styles from './styles.module.scss'
import Comment from "./PostComment"

export interface PostComment {
    id: number;
    date: string;
    userAvatarUrl?: null;
    userName: string;
    message: string;
}

export interface PostInfo {
    id: number;
    title: string;
    forumTitle: string;
}

const ForumPost = () => {
    const [comments, setComments] = useState<PostComment[]>([]);
    const [postInfo, setPostInfo] = useState<PostInfo | null>(null);

    useEffect(() => {
        const gotComments = getPostComments()
        setComments(gotComments)

        const gotPostInfo = getPostInfo()
        setPostInfo(gotPostInfo)
    }, []);

    const Comments = comments.map((comment) =>
        <Comment comment={comment} key={comment.id}/>
    )

  return (
    <div className={commonStyles['layout-outer']}>
        <div className={styles.breadcrumbs}>
            {postInfo?.forumTitle} / {postInfo?.title}
        </div>
        <div>
            { Comments }
        </div>
    </div>
  )
}

export default ForumPost
