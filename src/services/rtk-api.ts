import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Hotel } from '../data-type';
import { adaptHotelsToClient } from '../utils/adapters/adapt-hotels';

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
    })
  })
})

export const { reducer, reducerPath, useGetHotelsQuery } = api;
