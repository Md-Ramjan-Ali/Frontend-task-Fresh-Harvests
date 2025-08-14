import { Category, Product } from "@/types/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://code-commando.com/api/v1" }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "/category",
      transformResponse: (response: any) => response.data,
    }),
    getAllProducts: builder.query<Product[], void>({
      query: () => "/products",
      transformResponse: (response: any) => response.data,
    }),
  }),
});

// RTK Query hook export
export const { useGetCategoriesQuery, useGetAllProductsQuery } = apiSlice;