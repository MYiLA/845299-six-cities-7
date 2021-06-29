const homeRoute = '/6-cities';

export const AppRoute = {
  MAIN: homeRoute,
  LOGIN: `${homeRoute}/login`,
  FAVORITES: `${homeRoute}/favorites`,
  OFFER: `${homeRoute}/offer`,
};

export enum CardType {
  FAVORITES = 'favorites',
  CITIES = 'cities',
  NEAR_PLACES = 'near-places'
}
