import {
  createAction, createReducer, createSlice, PayloadAction
} from '@reduxjs/toolkit';
import axios from 'axios';
import { InitialStateType } from './types';
import { AuthorizationStatus } from '../const';
import { Hotel } from '../data-type';
import { hotels } from '../mocks/hotels';

export const ActionTypeName = {
  CHANGE_CITY: 'hotels/changeCity',
  LOAD_HOTELS: 'data/loadHotels',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'hotels/redirectToRoute',
};

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

const initialState: InitialStateType = {
  cities,
  hotels: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    loadHotels: (state: InitialStateType, action: PayloadAction<Hotel[]>) => {
      state.hotels = action.payload;
    },
  },
});

// export const changeCity = createAction(ActionTypeName.CHANGE_CITY);
// export const loadHotels = createAction<Hotel[], 'data/loadHotels'>('data/loadHotels');
// export const requiredAuthorization = createAction(ActionTypeName.REQUIRED_AUTHORIZATION);
// export const logout = createAction(ActionTypeName.LOGOUT);
// export const redirectToRoute = createAction(ActionTypeName.REDIRECT_TO_ROUTE);

// export const redusers = createReducer(initialState, (builder) => builder
//   // .addCase(changeCity, (state, action) => {}),
//   .addCase(loadHotels, (state, action) => {
//     state.hotels = action.payload;
//   }),
// // {
// //   [changeCity]: (state, action) => {},
// //   [loadHotels]: (state, action) => {
// //     state.hotels = action.payload;
// //   },
// // }
// );

// import { AnyAction } from 'redux';
// import { City, Hotel } from '../data-type';

// // TODO подумать, зачем нужно было действие по заполнению списка отелей fillingHotels
// export const ActionTypeName = {
//   CHANGE_CITY: 'hotels/changeCity',
//   LOAD_HOTELS: 'data/loadHotels',
//   REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
//   LOGOUT: 'user/logout',
//   REDIRECT_TO_ROUTE: 'hotels/redirectToRoute',
// };

// export const ActionCreator = {
//   changeCity: (activeCity: City): AnyAction => ({
//     type: ActionTypeName.CHANGE_CITY,
//     payload: activeCity,
//   }),
//   loadHotels: (hotels: Hotel): AnyAction => ({
//     type: ActionTypeName.LOAD_HOTELS,
//     payload: hotels,
//   }),
//   requireAuthorization: (status:string): AnyAction => ({
//     type: ActionTypeName.REQUIRED_AUTHORIZATION,
//     payload: status,
//   }),
// };
