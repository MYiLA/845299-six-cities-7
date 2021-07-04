import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// TODO изучить доку и перенастроить тулкит
const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: {}, // описываем наши редьюсеры имя/значение
  middleware,
  devTools: true,
});
