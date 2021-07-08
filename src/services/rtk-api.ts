import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthInfo, CommentGet, Hotel } from '../data-type';
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
    getLogin: builder.query<AuthInfo, void>({
      query: () => 'login',
      transformResponse: (data: any) => adaptLoginToClient(data)
    }),
  })
})

export const {
  reducer,
  reducerPath,
  useGetHotelsQuery,
  useGetHotelIdQuery,
  useGetHotelIdNearbyQuery,
  useGetFavoritesQuery,
  useGetCommentsQuery,
  useGetLoginQuery
} = api;
