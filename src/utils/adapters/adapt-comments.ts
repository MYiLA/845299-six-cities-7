import { CommentGet } from "../../data-type";

const itemToComment = (item: any): CommentGet => {
  const comment = Object.assign(
    {},
    item,
    {
      user: {
        avatarUrl: item.user.avatar_url,
        id: item.user.id,
        isPro: item.user.is_pro,
        name: item.user.name,
      },
    });

  return comment;
}


export const adaptCommentsToClient = (data: any): CommentGet[] => {
  if (!Array.isArray(data)) {
    throw new Error('Пришли подозрительные данные с сервера. Это НЕ список комментариев')
  };

  return data.map((item) => itemToComment(item));
}
