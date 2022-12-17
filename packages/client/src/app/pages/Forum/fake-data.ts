import { Forum } from "./index"
import { Post } from "./PostsList"
import { PostComment, PostInfo } from "./ForumPost"

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

export function getPostComments(): PostComment[] {
  return Array.from({
    length: 7
  }).map((_, index) => {
    return {
      id: index,
      date: "2022-12-01T12:30:52.123Z",
      userName: `Пользователь ${index + 1}`,
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna id varius nulla a scelerisque nunc consequat sit nec. Aliquam diam maecenas scelerisque amet suspendisse nam et ut. Sed ultricies magna quis ipsum in nibh. Amet morbi sed sed nascetur tincidunt arcu. Id augue sapien, massa ultricies ipsum. Sit dictum sed volutpat gravida cursus enim. Donec pellentesque amet, vel hendrerit sagittis sagittis mattis. Augue laoreet in quam tortor, at euismod fusce lacus. Egestas quam vel sit purus elementum turpis facilisis sit sit. Accumsan molestie nulla sit fermentum vel feugiat. Morbi placerat in sollicitudin sed. Nibh aliquet sed amet fermentum. Et tempus est ut senectus molestie egestas. Adipiscing velit urna, aliquet eu, sollicitudin.\n" +
        "\n" +
        "Sed mattis lorem tristique odio mattis aliquet phasellus ipsum vel. Feugiat accumsan sed tincidunt proin nec placerat tellus aliquet et. Neque ac ut tincidunt nunc orci amet est. At sapien odio nec a vitae. Nullam duis adipiscing auctor volutpat et."
    }
  })
}

export function getPostInfo(): PostInfo {
  return {
    id: 1,
    title: "Некий пост",
    forumTitle: "Форум 1"
  }
}
