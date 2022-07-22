import React, {useEffect, useState} from 'react';
import TripFilters from "../components/TripFilters";
import TripList from "../components/TripList";
import {useProccessedTrips} from "../hooks/useTrips";
import {tripAPI} from "../services/TripsService";
import Loader from "../components/Loader";
import {Trip} from "../models/trip";
import {useNavigate} from "react-router-dom";


const Home = () => {
   const [filters, setFilters] = useState({query: '', sortByLevel: '', sortByDuration: ''});

   const token = localStorage.getItem('token') as string;
   const navigate = useNavigate();
   // useEffect(() => {
   //    if (!token) {
   //      return  navigate('/sign-in')
   //    }
   // }, [])

   const {
      data: trips, error,
      isLoading,
      refetch
   } = tripAPI.useFetchAllTripsQuery(token);
   const sortedAndFilteredTrips = useProccessedTrips(filters.sortByLevel, filters.sortByDuration, filters.query, trips as Trip[]);
//console.log(trips);

   // useEffect(() => {
   //    // @ts-ignore
   //    return setTrips(data);
   // }, []);

   if (isLoading) {
      return <Loader/>
   }

   return (
       <main>
          <h1 className = "visually-hidden">Travel App</h1>
          <section className = "trips-filter">
             <h2 className = "visually-hidden">Trips filter</h2>
             <TripFilters filter = {filters} setFilter = {setFilters}/>
          </section>
          {error && <h1>An unknown error occured...</h1>}
          <section className = "trips">
             <h2 className = "visually-hidden">Trips List</h2>
             <TripList trips = {sortedAndFilteredTrips}/>
          </section>
       </main>
   );
};

export default Home;
