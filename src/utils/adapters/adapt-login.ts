import { LoginGet } from "../../data-type";

const itemToLogin = (item: any): LoginGet => {
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

export const adaptLoginToClient = (data: any): LoginGet => {
  console.log('адаптер')
  console.log(data)
  if (data.constructor.name !== 'Object') {
    throw new Error('Пришли подозрительные данные с сервера. Это НЕ логин')
  };

  return itemToLogin(data);
}
