export const AppRoute = {
  MAIN: 'main',
  LOGIN: 'login',
  FAVORITES: 'favorites',
  OFFER: 'offer',
  DEFAULT_CITY: 'Paris'
};

export const APIRoute = {
  HOTELS: '/hotels',
  FAVORITE: '/favorite',
  COMMENTS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export enum CardType {
  FAVORITES = 'favorites',
  CITIES = 'cities',
  NEAR_PLACES = 'near-places'
}

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};
