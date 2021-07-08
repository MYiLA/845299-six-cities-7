import { AuthInfo } from "../../data-type";

const itemToLogin = (item: any): AuthInfo => {
  const login = Object.assign(
    {},
    item,
    {
      avatarUrl: item.avatar_url,
      isPro: item.is_pro,
    });

  delete login.avatar_url;
  delete login.is_pro;

  return login;
}

export const adaptLoginToClient = (data: any): AuthInfo => {
  if (data.constructor.name === 'Object') {
    throw new Error('Пришли подозрительные данные с сервера. Это НЕ логин')
  };

  return itemToLogin(data);
}
