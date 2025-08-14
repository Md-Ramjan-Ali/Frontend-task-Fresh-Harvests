import { apiSlice } from "./apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => "/users", // endpoint path (Base URL এর পর)
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
