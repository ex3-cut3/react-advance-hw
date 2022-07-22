import {useMemo} from "react";
import {Trip} from "../models/trip";


export const useProccessedTrips = (sortLevelProperty: string, sortDuration: string, query: string, trips: Trip[]) => {
   const sortedByLevelTrips = useSortedLevelTrips(trips, sortLevelProperty);
   const sortedByDurationTrips = useSortedDurationTrips(sortedByLevelTrips, sortDuration);

   return useMemo(() => {
      return query ?
          sortedByDurationTrips.filter(trip => trip.title.toLowerCase().includes(query.toLowerCase()))
          : sortedByDurationTrips;
   }, [sortedByDurationTrips, query]);
};

export const useSortedLevelTrips = (trips: Trip[], sortProperty: string) => {
   return useMemo(() => {
      return sortProperty ?                                      // @ts-ignore
          [...trips].filter((trip: Trip) => {
             return trip.level === sortProperty
          })
          : trips;
   }, [trips, sortProperty]);
}

export const useSortedDurationTrips = (trips: Trip[], sortProperty: string) => {
   return useMemo(() => {
      return sortProperty ?                                      // @ts-ignore
          [...trips].filter(getPredicate(sortProperty))
          : trips;
   }, [trips, sortProperty]);
}

const getPredicate = (sortProperty: string) => {
   switch (sortProperty) {
      case '0_x_5':
         return (trip: Trip) => trip.duration <= 5;
      case '5_x_10':
         return (trip: Trip) => trip.duration <= 10;
      case '10_x':
         return (trip: Trip) => trip.duration >= 10;
      default:
         return (trip: Trip) => trip.duration <= 15;
   }
}

