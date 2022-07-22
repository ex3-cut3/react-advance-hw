import React from 'react';
import Loader from "./Loader";
import {bookingInterface} from "../services/meta-data";

const BookingItem = ({
                        title,
                        guests,
                        date,
                        total,
                        id,
                        removeFromServer
                     }: { title: string, guests: number, date: string, total: number, id: string, removeFromServer: Function }) => {

   const convertDate = (date: number) => {
      return date.toString().padStart(2, '0');
   }
   const deleteBooking = () => {
      removeFromServer(id);
   }

   return (
       <li className = "booking">
          <h3 className = "booking__title">{title}</h3>
          <span className = "booking__guests">{guests} {guests <= 1 ? 'guest' : 'guests'}</span>
          <span
              className = "booking__date">{convertDate(new Date(date).getFullYear())}.{convertDate(new Date(date).getUTCMonth() + 1)}.{convertDate(new Date(date).getDate())}</span>

          <span className = "booking__total">{total} $</span>
          <button className = "booking__cancel" title = "Cancel booking" onClick = {deleteBooking}>
             <span className = "visually-hidden">Cancel booking</span>
             ×
          </button>
       </li>
   );
};

export default BookingItem;
