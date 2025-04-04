
import type { z } from "zod";
import type { loginSchema } from "~/schema/auth";
import { apiSlice } from "~/store/apiSlice";

type loginType = z.infer<typeof loginSchema>;

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<any, loginType>({
            query: (credentials) => ({
                url: "/api/Auth/login",
                method: "POST",
                body: credentials,
            }),
        }),
        getUser: builder.query<any, void>({
            query: () => "/api/Auth/users",
        }),
        resetPassword: builder.mutation<any, { email: string }>({
            query: (email) => ({ url: "/api/Auth/resetPassword", method: "POST", body: email }),
        }),

    }),
});



export const { useLoginMutation, useGetUserQuery, useResetPasswordMutation } = authApi;
