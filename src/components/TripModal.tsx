import React, {ChangeEvent, FormEvent} from 'react';
import {Trip} from "../models/trip";
import {bookingsAPI} from "../services/BookingsService";
import {loggingAPI} from "../services/AuthService";
import Loader from "./Loader";
import Error from "./Error";


const TripModal = ({trip, visible, setVisible}: { trip: Trip, visible: boolean, setVisible: Function }) => {
   const [numberOfGuests, setNumberOfGuests] = React.useState(1);
   const [date, setDate] = React.useState('');
   const token = localStorage.getItem('token') as string;

   const [bookTrip, {isLoading}] = bookingsAPI.useMakeBookingMutation();
   const {data: loggedUser, error} = loggingAPI.useLoggedUserQuery(token);

   const rootClasses = ['modal'];
   if (!visible) {
      rootClasses.push('hidden');
   }
   if (isLoading) return <Loader/>;
   if (error || !loggedUser) return <Error/>;

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      setVisible(false);
      bookTrip({
         tripId: trip.id,
         userId: loggedUser.id,
         guests: numberOfGuests,
         date: date
      });
     // console.log(date);
   }

   const handleGuests = (e: ChangeEvent) => {
      let value = +(e.target as HTMLInputElement).value;
      if (value <= 0) { // @ts-ignore
         value = '';
      } else if (value > 10) value = 10;
     // console.log(value);
      setNumberOfGuests(value);
   }

   return (
       <div className = {rootClasses.join(' ')}>
          <div className = "trip-popup">
             <button className = "trip-popup__close" onClick = {() => setVisible(false)}>×</button>
             <form className = "trip-popup__form" autoComplete = "off" onSubmit = {handleSubmit}>
                <div className = "trip-info">
                   <h3 className = "trip-info__title">{trip.title}</h3>
                   <div className = "trip-info__content">
                      <span className = "trip-info__duration"><strong>{trip.duration}</strong> days</span>
                      <span className = "trip-info__level">{trip.level}</span>
                   </div>
                </div>
                <label className = "trip-popup__input input">
                   <span className = "input__heading">Date</span>
                   <input name = "date" value = {date} onChange = {(e) => setDate(e.target.value)}
                          min = {`${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${(new Date().getUTCDate()+2).toString().padStart(2, '0')}`}
                          type = "date" required/>
                </label>
                <label className = "trip-popup__input input">
                   <span className = "input__heading">Number of guests</span>
                   <input name = "guests" type = "number" pattern = "[0-9]{0-2}" min = "1" max = "10"
                          value = {numberOfGuests}
                          onChange = {handleGuests} required/>
                </label>
                <span className = "trip-popup__total">
              Total: <output className = "trip-popup__total-value">{numberOfGuests * trip.price}$</output>
            </span>
                <button className = "button" type = "submit">Book a trip</button>
             </form>
          </div>
       </div>);
};

export default TripModal;
