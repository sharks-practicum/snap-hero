import React from 'react'
import styles from './styles.module.scss'
import { Forum } from "./index"

interface ForumRowProps {
    forum: Forum,
    onClickToRow: (arg0: number) => void
}

function ForumRow({ forum, onClickToRow }: ForumRowProps) {

  return (
      <tr key={forum.id} onClick={() => onClickToRow(forum.id)}>
          <td data-th="Раздел">
              {forum.title}
              <p>
                  <span className={styles['cell-description']}>{forum.description}</span>
              </p>
          </td>
          <td data-th="Посты">{forum.postsCount}</td>
          <td data-th="Ответы">{forum.repliesCount}</td>
          <td data-th="Последний">
              <div className={styles['cell-title']}>
                  <span>{forum.lastPost.postTitle}</span>
                  <span>{forum.lastPost.userName}</span>
              </div>
              <p className={styles['cell-description']}>
                  {forum.lastPost.date}
              </p>
          </td>
      </tr>
  )
}

export default ForumRow
