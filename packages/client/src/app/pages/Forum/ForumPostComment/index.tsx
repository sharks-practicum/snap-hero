import React, { useEffect, useState } from 'react'
import { getPostComments, getPostInfo, getPosts } from "../fake-data"
import commonStyles from '../styles.module.scss'
import styles from './styles.module.scss'
import { useNavigate, useParams } from "react-router-dom"

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

function ForumPostComment() {
    const [comments, setComments] = useState<PostComment[]>([]);
    const [postInfo, setPostInfo] = useState<PostInfo | null>(null);

    useEffect(() => {
        const gotComments = getPostComments()
        setComments(gotComments)

        const gotPostInfo = getPostInfo()
        setPostInfo(gotPostInfo)
    }, []);

  return (
    <div className={commonStyles['layout-outer']}>
        <div className={styles.breadcrumbs}>
            {postInfo?.forumTitle} / {postInfo?.title}
        </div>
        <div>
            {comments.map((comment) =>
                <div className={styles.comment}>
                    <div className={styles["comment__date"]}>
                        {comment.date}
                    </div>
                    <div className={styles["comment__body"]}>
                        <div className={styles["comment-body__user"]}>{comment.userName}</div>
                        <div className={styles["comment-body__message"]}>{comment.message}</div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default ForumPostComment
