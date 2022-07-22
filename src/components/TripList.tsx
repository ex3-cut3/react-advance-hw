import React from 'react';
import HomeItem from "./HomeItem";
import {Trip} from "../models/trip";


const TripList = ({trips}: {trips: Trip[]}) => {
   return (
       <ul className = "trip-list">
          {trips.map((trip: any) => {
             // @ts-ignore
             return (<HomeItem key={trip.id} title={trip.title} imagePath={trip.image} durationDays={trip.duration} level={trip.level} price={trip.price} id={trip.id}/>)
          })}
       </ul>
   );
};

export default TripList;
