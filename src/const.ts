export const MAX_IMAGES_IN_ROOM_PAGE = 6;
export const MESSAGE_DISPLAY_TIME = 5000;
export const STARS = [5, 4, 3, 2, 1];
export const MESSAGE_NOT_INTERNET = 'Проверьте интернет-соединение и перезагрузите страницу.';

export enum CommentOptions {
  MIN_LENGTH = 50,
  MAX_LENGTH = 300,
}

export enum AppRoute {
  MAIN = 'main',
  LOGIN = 'login',
  FAVORITES = 'favorites',
  OFFER = 'offer',
  DEFAULT_CITY = 'Paris'
}

export enum ApiRoute {
  HOTELS = '/hotels',
  FAVORITE = '/favorite',
  COMMENTS = '/comments',
  LOGIN = '/login',
  LOGOUT = '/logout',
}

export enum CardType {
  FAVORITES = 'favorites',
  CITIES = 'cities',
  NEAR_PLACES = 'near-places'
}

export enum BookmarkType {
  PROPERTY = 'property',
  PLACE_CARD = 'place-card',
}

export const RegularExpression = {
  EMAIL: /^[^\s@]{3,}@[^\s@]{2,}\.[^\s@]{2,}$/,
  ONE_SIMBOL: /\S/,
};

export const SortingType = {
  POPULAR: {
    name: 'Popular',
    path: 'popular',
  },
  PRICE_LOW_TO_HIGH: {
    name: 'Price: low to high',
    path: 'price-low-to-high',
  },
  PRICE_HIGH_TO_LOW: {
    name: 'Price: high to low',
    path: 'price-high-to-low',
  },
  TOP_RATED_FIRST: {
    name: 'Top rated first',
    path: 'top-rated-first',
  },
};
