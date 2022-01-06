import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const { REACT_APP_NEWS_API_KEY } = process.env;

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": REACT_APP_NEWS_API_KEY,
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
