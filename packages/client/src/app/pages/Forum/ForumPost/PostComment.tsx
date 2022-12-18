import React from 'react'
import styles from './styles.module.scss'
import { PostComment } from './index'

interface PostCommentProps {
    comment: PostComment
}

function Comment({ comment }: PostCommentProps) {
  return (
      <div className={styles.comment}>
          <div className={styles["comment__date"]}>
              {comment.date}
          </div>
          <div className={styles["comment__body"]}>
              <div className={styles["comment-body__user"]}>{comment.userName}</div>
              <div className={styles["comment-body__message"]}>{comment.message}</div>
          </div>
      </div>
  )
}

export default Comment
