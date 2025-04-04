import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // Unique key for the slice
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5261", // Your base URL
    prepareHeaders: (headers) => {
      // Add common headers here (e.g., Authorization)
      headers.set("Content-Type", "application/json");
      const token = localStorage.getItem("token"); // Example: Retrieve token
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}), // Empty, other slices will extend this
});