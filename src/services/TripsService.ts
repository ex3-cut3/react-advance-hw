import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Trip} from "../models/trip";
import {BASE_URL} from "./meta-data";


export const tripAPI = createApi({
   reducerPath: 'tripAPI',
   baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
   tagTypes: ['Trip'],
   endpoints: (build) => ({
      fetchAllTrips: build.query<Trip[], string>({
         query: (token) => ({
            url: `/trips`,
            headers: {
               Authorization: `Bearer ${token}`
            },
         }),
         providesTags: result => ['Trip'],
      }),
      getTripById: build.query<Trip, string>({
         query: (id) => ({
            url: `/trips/${id}`,
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`
            },
         }),
      }),
   })
})
