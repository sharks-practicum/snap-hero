import { Forum } from "./index"
import { Post } from "./ForumPosts"

const getRandomInt = () => {
  return Math.floor(Math.random() * 50);
}

export function getForums(): Forum[] {
  return Array.from({
    length: 50
  }).map((_, index) => {
    return {
      id: index,
      title: `Форум ${index + 1}`,
      description: `Описание ${index + 1}`,
      lastPost: {
        userName: "Igor",
        postTitle: `Пост ${index + 1}`,
        userAvatarUrl: null,
        date: "2022-12-01T12:30:52.123Z",

      },
      postsCount: getRandomInt(),
      repliesCount: getRandomInt()
    }
  })
}

export function getPosts(): Post[] {
  return Array.from({
    length: 50
  }).map((_, index) => {
    return {
      id: index,
      title: `Тема ${index + 1}`,
      description: `Описание ${index + 1}`,
      lastComment: {
        userName: "Igor",
        commentTitle: `Комментарий ${index + 1}`,
        userAvatarUrl: null,
        date: "2022-12-01T12:30:52.123Z",

      },
      repliesCount: getRandomInt()
    }
  })
}
