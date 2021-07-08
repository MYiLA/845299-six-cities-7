import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginGet, CommentGet, Hotel } from '../data-type';
import { adaptHotelsToClient, adaptHotelIdToClient } from '../utils/adapters/adapt-hotels';
import { adaptCommentsToClient } from '../utils/adapters/adapt-comments';
import { adaptLoginToClient } from '../utils/adapters/adapt-login';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL
  }),
  endpoints: (builder) => ({
    getHotels: builder.query<Hotel[], void>({
      query: () => 'hotels',
      transformResponse: (data: any) => adaptHotelsToClient(data)
    }),
    getHotelId: builder.query<Hotel, void>({
      query: (id) => `hotel/${id}`,
      transformResponse: (data: any) => adaptHotelIdToClient(data)
    }),
    getHotelIdNearby: builder.query<Hotel[], void>({
      query: (id) => `hotel/${id}/nearby`,
      transformResponse: (data: any) => adaptHotelsToClient(data)
    }),
    getFavorites: builder.query<Hotel[], void>({
      query: () => 'favorites',
      transformResponse: (data: any) => adaptHotelsToClient(data)
    }),
    getComments: builder.query<CommentGet[], void>({
      query: (id) => `comments/${id}`,
      transformResponse: (data: any) => adaptCommentsToClient(data)
    }),
    getLogin: builder.query<LoginGet, void>({
      query: () => 'login',
      transformResponse: (data: any) => adaptLoginToClient(data)
    }),

    // TODO на сервер должен прийти не булин, а цифра 0 или 1
    // postFavoriteStatus: builder.query<Hotel, void>({
    //   query: (id: number, status: number) => `favorites/:${id}/:${status}`,
    //   transformResponse: (data: any) => adaptHotelIdToClient(data)
    // }),
    // postComment: builder.query<CommentGet[], void>({
    //   query: (id: number) => `comments/:${id}`,
    //   // Request: структура CommentPost
    //   transformResponse: (data: any) => adaptCommentsToClient(data)
    // }),
    // postLogin: builder.query<LoginGet, void>({
    //   query: (id: number, status: number) => `favorites/:${id}/:${status}`,
    //   // Request: структура LoginPost. Где и как будем хранить сессии?
    //   transformResponse: (data: any) => adaptLoginToClient(data)
    // }),
    deleteLogout: builder.query<void, void>({
      query: () => 'delete/logout'
      // какая тут типизация?
      // Response: Status: 204 No Content
    })
  })
});

export const {
  reducer,
  reducerPath,
  useGetHotelsQuery,
  useGetHotelIdQuery,
  useGetHotelIdNearbyQuery,
  useGetFavoritesQuery,
  useGetCommentsQuery,
  useGetLoginQuery,
  useDeleteLogoutQuery
} = api;
