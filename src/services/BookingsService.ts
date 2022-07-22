import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_URL, bookingInterface, interactBookingInterface} from "./meta-data";


export const bookingsAPI = createApi({
   reducerPath: 'bookingsAPI',
   baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
   tagTypes: ['Book'],

   endpoints: (build) => ({
      fetchAllBookings: build.query<bookingInterface[], string>({
         query: (token) => ({
            url: `/bookings`,
            headers: {
                Authorization: `Bearer ${token}`
            }
         }),
         providesTags: result => ['Book']
      }),

      makeBooking: build.mutation<bookingInterface, interactBookingInterface>({
         query: (bookingObj) => ({
            url: `/bookings`,
            method: 'POST',
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: bookingObj,
            contentType: 'application/json'
         }),
         invalidatesTags: ['Book']
      }),

      deleteBookmark: build.mutation<bookingInterface, string>({
         query: (id) => ({
            url: `/bookings/${id}`,
            method: 'DELETE',
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`
            },
         }),
         invalidatesTags: ['Book']
      }),
   })
})
