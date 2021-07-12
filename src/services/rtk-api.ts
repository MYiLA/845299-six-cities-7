import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginGet, CommentGet, Hotel, LoginPost, CommentPost } from '../data-type';
import { adaptHotelsToClient, adaptHotelIdToClient } from '../utils/adapters/adapt-hotels';
import { adaptCommentsToClient } from '../utils/adapters/adapt-comments';
import { adaptLoginToClient } from '../utils/adapters/adapt-login';
import { APIRoute } from '../const';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
// const REQUEST_TIMEOUT = 5000;

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
    // TODO настроить таймаут более очевидно timeout: REQUEST_TIMEOUT,
  }),
  tagTypes: ['login'],
  endpoints: (builder) => ({
    getHotels: builder.query<Hotel[], void>({
      query: () => APIRoute.HOTELS,
      transformResponse: (data: any) => adaptHotelsToClient(data)
    }),
    getHotelId: builder.query<Hotel, number>({
      query: (id) => `${APIRoute.HOTELS}/${id}`,
      transformResponse: (data: any) => adaptHotelIdToClient(data)
    }),
    getHotelIdNearby: builder.query<Hotel[], number>({
      query: (id) => `${APIRoute.HOTELS}/${id}/nearby`,
      transformResponse: (data: any) => adaptHotelsToClient(data)
    }),

    getFavorites: builder.query<Hotel[], void>({
      query: () => APIRoute.FAVORITE,
      transformResponse: (data: any) => adaptHotelsToClient(data)
    }),
    postFavoriteStatus: builder.mutation<Hotel, {id: number, status: number}>({
      query: ({id, status}) => ({
        url: `${APIRoute.FAVORITE}/:${id}/:${status}`,
        method: 'POST',
      }),
    }),

    getComments: builder.query<CommentGet[], number>({
      query: (id) => `${APIRoute.COMMENTS}/${id}`,
      transformResponse: (data: any) => adaptCommentsToClient(data)
    }),
    postComment: builder.mutation<CommentGet[], {id: number, body: CommentPost}>({
      query: ({id, body}) => ({
        url: `${APIRoute.COMMENTS}/:${id}`,
        method: 'POST',
        body,
      }),
    }),

    getLogin: builder.query<LoginGet, void>({
      query: () => APIRoute.LOGIN,
      providesTags: ['login'],
      transformResponse: (data: any) => adaptLoginToClient(data)
    }),
    postLogin: builder.mutation<LoginGet, LoginPost>({
      query: (body) => ({
        url: APIRoute.LOGIN,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['login'],
    }),
    deleteLogout: builder.mutation({
      query: () => ({
        url: APIRoute.LOGOUT,
        method: 'DELETE',
      }),
      invalidatesTags: ['login'],
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
  usePostFavoriteStatusMutation,

  useGetCommentsQuery,
  usePostCommentMutation,

  useGetLoginQuery,
  useDeleteLogoutMutation,
  usePostLoginMutation
} = api;
