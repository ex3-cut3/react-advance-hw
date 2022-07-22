import React from 'react';
import {useParams} from "react-router-dom";
import TripModal from "../components/TripModal";
import {tripAPI} from "../services/TripsService";
import Loader from "../components/Loader";
import Error from "../components/Error";

const TripPageById = () => {
   const {id} = useParams();
   const [isModalOpen, setIsModalOpen] = React.useState(false);
   const {data: tripById, error, isLoading, } = tripAPI.useGetTripByIdQuery(id as string);

   if (isLoading) return <Loader/>;
   if (error || !tripById) {
      return <Error/>;
   }

   return (
       <main className = "trip-page">

          <TripModal visible = {isModalOpen} setVisible = {setIsModalOpen}
              // @ts-ignore
                     trip = {tripById}/>
          <h1 className = "visually-hidden">Travel App</h1>
          <div className = "trip">
             <img src = {tripById.image} className = "trip__img" alt = "trip landscape"/>
             <div className = "trip__content">
                <div className = "trip-info">
                   <h3 className = "trip-info__title">{tripById.title}</h3>
                   <div className = "trip-info__content">
                      <span className = "trip-info__duration"><strong>{tripById.duration}</strong> days</span>
                      <span className = "trip-info__level">{tripById.level}</span>
                   </div>
                </div>
                <div className = "trip__description">
                   {tripById.description}
                </div>
                <div className = "trip-price">
                   <span>Price</span>
                   <strong className = "trip-price__value">{tripById.price} $</strong>
                </div>
                <button className = "trip__button button" onClick = {() => setIsModalOpen(true)}>Book a trip</button>
             </div>
          </div>
       </main>
   );
};

export default TripPageById;
