import React, {useEffect} from 'react';
import BookingItem from "../components/BookingItem";
import {bookingsAPI} from "../services/BookingsService";
import Loader from "../components/Loader";
import Error from "../components/Error";
import {bookingInterface} from "../services/meta-data";
import {useNavigate} from "react-router-dom";

const Bookings = () => {
   const token = localStorage.getItem('token') as string;
   const navigate = useNavigate();
   useEffect(() => {
        if (!token) {
            return navigate('/sign-in')
        }
   });
   let {data: fetchedBookings, error, isLoading,} = bookingsAPI.useFetchAllBookingsQuery(token);
   const [deleteBooking, {isLoading: isLoadingDelete}] = bookingsAPI.useDeleteBookmarkMutation();

   if (isLoading || isLoadingDelete) return <Loader/>;
   if (!fetchedBookings) return <Error/>;
    if (error) return <Error/>;
   fetchedBookings = [...fetchedBookings].sort((a: bookingInterface, b: bookingInterface) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
   });

   // useEffect(() => {
   //    setBookings(fetchedBookings);
   // }, [fetchedBookings]);

   return (
       <main className = "bookings-page">
          <h1 className = "visually-hidden">Travel App</h1>
          <ul className = "bookings__list">
             {fetchedBookings.length === 0 && <h2>Make some bookings!</h2>}
             {fetchedBookings.map((booking: bookingInterface) => {
                return (<BookingItem id = {booking.id} key = {booking.id} title = {booking.trip.title} guests = {
                   booking.guests} date = {booking.date} total = {booking.totalPrice} removeFromServer = {deleteBooking}/>)
             })}
          </ul>
       </main>
   );
};

export default Bookings;
