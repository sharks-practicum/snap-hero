import React from 'react'
import styles from '../styles.module.scss'
import { Post } from "./index"

interface PostRowProps {
    post: Post,
    onClickToRow: (arg0: number) => void
}

const PostRow = ({ post, onClickToRow }: PostRowProps) => {

  return (
      <tr key={post.id} onClick={() => onClickToRow(post.id)}>
          <td data-th="Раздел">
              {post.title}
              <p>
                  <span className={styles['cell-description']}>{post.description}</span>
              </p>
          </td>
          <td data-th="Ответы">{post.repliesCount}</td>
          <td data-th="Последний">
              <div className={styles['cell-title']}>
                  <span>{post.lastComment.commentTitle}</span>
                  <span>{post.lastComment.userName}</span>
              </div>
              <p className={styles['cell-description']}>
                  {post.lastComment.date}
              </p>
          </td>
      </tr>
  )
}

export default PostRow
