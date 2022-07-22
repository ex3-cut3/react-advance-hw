import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL, errorInt, loggedUser, loggingInterface, signInInterface, signUpInterface} from "./meta-data";


export const loggingAPI = createApi({
   reducerPath: 'loggingAPI',
   baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),

   endpoints: (build) => ({
      signIn: build.mutation<loggingInterface | errorInt, signInInterface>({
         query: (loggingObj) => ({
            url: `/auth/sign-in`,
            method: 'POST',
            body: loggingObj,
            contentType: 'application/json'
         }),
      }),
      signUp: build.mutation<loggingInterface, signUpInterface>({
         query: (loggingObj) => ({
            url: `/auth/sign-up`,
            method: 'POST',
            body: loggingObj,
            contentType: 'application/json'
         }),
      }),
      loggedUser: build.query<loggedUser, string>({
         query: (token) => ({
            url: `/auth/authenticated-user`,
            headers: {
                Authorization: `Bearer ${token}`
            },
         }),
      }),
   })
})
