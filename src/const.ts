export enum AppRoute {
  MAIN = 'main',
  LOGIN = 'login',
  FAVORITES = 'favorites',
  OFFER = 'offer',
  DEFAULT_CITY = 'Paris'
};

export enum APIRoute {
  HOTELS = '/hotels',
  FAVORITE = '/favorite',
  COMMENTS = '/comments',
  LOGIN = '/login',
  LOGOUT = '/logout',
};

export enum CardType {
  FAVORITES = 'favorites',
  CITIES = 'cities',
  NEAR_PLACES = 'near-places'
}

export enum AuthorizationStatus {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN',
};

export const Cities = [
  {
    location: {
      latitude: 48.85,
      longitude: 2.35,
      zoom: 10,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 10,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 10,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 10,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 10,
    },
    name: 'Dusseldorf',
  },
];

export const RegularExpression = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  ONE_SIMBOL: /\S/,
}
