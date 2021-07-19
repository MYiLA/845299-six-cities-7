/* eslint-disable @typescript-eslint/no-explicit-any */
import { ServerResponse } from 'http';
import { CommentGet } from '../../data-type';

const itemToComment = (item: any): CommentGet => {
  const comment = {
    ...item,
    user: {
      avatarUrl: item.user.avatar_url,
      id: item.user.id,
      isPro: item.user.is_pro,
      name: item.user.name,
    },
  };

  return comment;
};

const adaptCommentsToClient = (data: ServerResponse): CommentGet[] => {
  if (!Array.isArray(data)) {
    throw new Error('Пришли подозрительные данные с сервера. Это НЕ список комментариев');
  }

  return data.map((item) => itemToComment(item));
};

export default adaptCommentsToClient;
