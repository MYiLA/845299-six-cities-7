import { configureStore } from '@reduxjs/toolkit';
import { сities } from '../const';
import { api } from '../services/rtk-api';

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
