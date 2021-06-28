import { ActionType } from './action';
import { State, ActionChangeCity } from './types';
import { hotels } from '../mocks/hotels';

// TODO сейчас отели захардкожены в стейте.
// Возможно нужно будет их брать с помощью запросов к серверу

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

const initialState: State = {
  cities,
  activeCity: {
    location: {
      latitude: 48.85,
      longitude: 2.35,
      zoom: 10,
    },
    name: 'Paris',
  },
  hotels,
};

// TODO
// карта сильно тупит, не переключается вовремя

export const reducer = (state = initialState, action: ActionChangeCity): State => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.activeCity,
      };
    case ActionType.FILLING_HOTELS:
      return {
        ...state,
        // TODO заполнение отелей данными с сервера (если я правильно понимаю)
      };
    default:
      return state;
  }
};
