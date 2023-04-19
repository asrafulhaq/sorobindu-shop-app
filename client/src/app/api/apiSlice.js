import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// create api slice
export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5050" }),
  endpoints: (builder) => ({}),
});
