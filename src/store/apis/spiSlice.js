import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://192.168.1.118:3000/";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products/",
    }),
    getProduct: builder.query({
      query: (id) => ({ url: `products/${id}` }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = apiSlice;
