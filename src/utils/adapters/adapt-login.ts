/* eslint-disable @typescript-eslint/no-explicit-any */
import { ServerResponse } from 'http';
import { LoginGet } from '../../data-type';

const itemToLogin = (item: any): LoginGet => {
  const login = {
    ...item,
    avatarUrl: item.avatar_url,
    isPro: item.is_pro,
  };

  delete login.avatar_url;
  delete login.is_pro;

  return login;
};

const adaptLoginToClient = (data: ServerResponse): LoginGet => {
  if (data.constructor.name !== 'Object') {
    throw new Error('Пришли подозрительные данные с сервера. Это НЕ логин');
  }

  return itemToLogin(data);
};

export default adaptLoginToClient;
