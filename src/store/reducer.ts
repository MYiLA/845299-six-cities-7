import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/rtk-api';

const сities = [
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

// TODO коллбеки тестировать отдельно. Тест редьюсера:
// Поведение редьюсера списка городов всегда возвращает список констант
export const store = configureStore({
  reducer: {
    cities: () => сities,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type InitialStateType = ReturnType<typeof store.getState>
