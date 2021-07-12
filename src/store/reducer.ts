import { AuthorizationStatus, Cities } from '../const';
import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/rtk-api';
import { City, Hotel } from '../data-type';

export const store = configureStore({
  reducer: {
    cities: (state: City[] = Cities) => state,
    hotels: (state: Hotel[] = []) => state,
    hotelsNearby: (state: Hotel[] = []) => state,
    authorizationStatus: (state: string = AuthorizationStatus.NO_AUTH) => state,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type InitialStateType = ReturnType<typeof store.getState>
