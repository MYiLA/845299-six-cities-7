import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginGet, CommentGet, Hotel, LoginPost, CommentPost } from '../data-type';
import { adaptHotelsToClient, adaptHotelIdToClient } from '../utils/adapters/adapt-hotels';
import { adaptCommentsToClient } from '../utils/adapters/adapt-comments';
import { adaptLoginToClient } from '../utils/adapters/adapt-login';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL
  }),
  tagTypes: ['login'],
  endpoints: (builder) => ({
    getHotels: builder.query<Hotel[], void>({
      query: () => '/hotels',
      transformResponse: (data: any) => adaptHotelsToClient(data)
    }),
    getHotelId: builder.query<Hotel, string>({
      query: (id) => `/hotel/${id}`,
      transformResponse: (data: any) => adaptHotelIdToClient(data)
    }),
    getHotelIdNearby: builder.query<Hotel[], void>({
      query: (id) => `/hotel/${id}/nearby`,
      transformResponse: (data: any) => adaptHotelsToClient(data)
    }),

    getFavorites: builder.query<Hotel[], void>({
      query: () => '/favorites',
      transformResponse: (data: any) => adaptHotelsToClient(data)
    }),
    postFavoriteStatus: builder.mutation<Hotel, {id: number, status: number}>({
      query: ({id, status}) => ({
        url: `favorites/:${id}/:${status}`
      }),
    }),

    getComments: builder.query<CommentGet[], void>({
      query: (id) => `/comments/${id}`,
      transformResponse: (data: any) => adaptCommentsToClient(data)
    }),
    postComment: builder.mutation<CommentGet[], {id: number, commentData: CommentPost}>({
      query: ({id, commentData}) => ({
        url: `comments/:${id}`
      }),
      transformResponse: (data: any) => adaptCommentsToClient(data)
    }),

    getLogin: builder.query<LoginGet, void>({
      query: () => '/login',
      providesTags: ['login'],
      transformResponse: (data: any) => adaptLoginToClient(data)
    }),
    postLogin: builder.mutation<LoginGet, LoginPost>({
      query: (formData) => ({
        url: '/login'
      }),
      invalidatesTags: ['login'],
      transformResponse: (data: any) => adaptLoginToClient(data),
    }),
    deleteLogout: builder.mutation({
      query: () => ({
        url: `/logout`,
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
