// import { AnyAction } from 'redux';
// import { ActionTypeName } from './action';
import { InitialStateType } from './types';
import { AuthorizationStatus } from '../const';

// // TODO сейчас отели захардкожены в стейте.
// // Возможно нужно будет их брать с помощью запросов к серверу

const cities = [
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

export const initialState: InitialStateType = {
  cities,
  hotels: [],
  hotelsNearby: [],
  comments: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

// // TODO
// // карта сильно тупит, не переключается вовремя

// export const reducer = (state = initialState,
//   action: AnyAction): State => {
//   switch (action.type) {
//     case ActionTypeName.CHANGE_CITY:
//       return {
//         ...state,
//         // TODO не очень понимаю что делает экшн, если изменён активный город
//         // activeCity: action.activeCity,
//       };
//     case ActionTypeName.LOAD_HOTELS:
//       return {
//         ...state,
//         // TODO заполнение отелей данными с сервера (если я правильно понимаю)
//       };
//     case ActionTypeName.REQUIRED_AUTHORIZATION:
//       return {
//         ...state,
//         authorizationStatus: action.payload,
//       };
//     case ActionTypeName.LOGOUT:
//       return {
//         ...state,
//         authorizationStatus: AuthorizationStatus.NO_AUTH,
//       };
//     default:
//       return state;
//   }
// };
