import React, { useEffect, useState } from 'react'
import { getPosts } from "../fake-data"
import styles from '../styles.module.scss'
import { useNavigate, useParams } from "react-router-dom"
import PostRow from "./PostRow"
import Icon from "../../../components/core/Icon"

interface lastComment {
    date: string;
    userAvatarUrl: null;
    userName: string;
    commentTitle: string;
}

export interface Post {
    id: number;
    title: string;
    description: string;
    lastComment: lastComment;
    repliesCount: number;
}
function ForumPosts() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const gotPosts = getPosts()
        setPosts(gotPosts)
    }, []);

    const navigate = useNavigate();
    const { forumId } = useParams();

    const onClickToRow = (postId: number) => {
        navigate(`/forum/${forumId}/post/${postId}/`)
    }

    const PostRows = posts.map((post) =>
        <PostRow post={post} key={post.id} onClickToRow={onClickToRow} />
    )

  return (
    <div className={styles['layout-outer']}>
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Темы</th>
                <th>
                    <Icon name='message-reply' color='white' size={16}/>
                </th>
                <th>Последний ответ</th>
            </tr>
            </thead>
            <tbody>
                {PostRows}
            </tbody>
        </table>
    </div>
  )
}

export default ForumPosts
