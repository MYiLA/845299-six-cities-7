import { Hotel } from "../../data-type";

const itemToHotel = (item: any): Hotel => {
  const hotel = Object.assign(
    {},
    item,
    {
      host: {
        avatarUrl: item.host.avatar_url,
        id: item.host.id,
        isPro: item.host.is_pro,
        name: item.host.name,
      },
      isFavorite: item.is_favorite,
      isPremium: item.is_premium,
      maxAdults: item.max_adults,
      previewImage: item.preview_image,
    });

  delete hotel.is_favorite;
  delete hotel.is_premium;
  delete hotel.max_adults;
  delete hotel.preview_image;

  return hotel;
}

export const adaptHotelsToClient = (data: any): Hotel[] => {
  if (!Array.isArray(data)) {
    throw new Error('Пришли подозрительные данные с сервера. Это НЕ список отелей')
  };

  return data.map((item) => itemToHotel(item));
}

export const adaptHotelIdToClient = (data: any): Hotel => {
  if (data.constructor.name !== 'Object') {
    throw new Error('Пришли подозрительные данные с сервера. Это НЕ отель')
  };

  return itemToHotel(data);
}
