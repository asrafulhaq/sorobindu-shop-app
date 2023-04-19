import { apiSlice } from "../../app/api/apiSlice";

// create user Api Slice
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/api/v1/user",
      providesTags: (result, error, args) => {
        return [
          { type: "User", id: "LIST" },
          ...result.users.map((item) => ({
            type: "User",
            id: item._id,
          })),
        ];
      },
      keepUnusedDataFor: 60,
      validateStatus: (response, result) => {
        return response.status == 200;
      },
    }),
    getUserById: builder.query({
      query: (id) => `/api/v1/user/${id}`,
      providesTags: (result, error, agrs) => {
        return [{ type: "User", id: agrs }];
      },
      keepUnusedDataFor: 60,
      validateStatus: (response, result) => {
        return response.status == 200;
      },
    }),
  }),
});

export const { useGetUserByIdQuery, useGetUsersQuery } = userApiSlice;
