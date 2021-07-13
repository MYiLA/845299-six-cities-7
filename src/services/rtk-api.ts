import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginGet, CommentGet, Hotel, LoginPost, CommentPost } from '../data-type';
import { adaptHotelsToClient, adaptHotelIdToClient } from '../utils/adapters/adapt-hotels';
import { adaptCommentsToClient } from '../utils/adapters/adapt-comments';
import { adaptLoginToClient } from '../utils/adapters/adapt-login';
import { APIRoute } from '../const';
import { FetchArgs, FetchBaseQueryArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

type FetchBaseQuery = (p?: FetchBaseQueryArgs) => BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>;

const customFetchBaseQuery: FetchBaseQuery = (baseArg) => {
  const real = fetchBaseQuery(baseArg);

  const result: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>
  = (args, api, extraOptions) => {

    const { signal, dispatch, getState } = api;
    const customController = new AbortController();
    const customSignal = customController.signal;

    signal.addEventListener("abort", () => customController.abort());
    setTimeout(() => { customController.abort }, REQUEST_TIMEOUT);

    return real(args, { signal: customSignal, dispatch, getState }, extraOptions);
  }

  return result;
};

export const api = createApi({
  baseQuery: customFetchBaseQuery({
    baseUrl: BACKEND_URL,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem('token') ?? '';

      if (token) {
        headers.set('X-Token', token);
      }

      return headers;
    }
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
    deleteLogout: builder.mutation<void, void>({
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
