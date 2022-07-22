import React from 'react';
import {Link} from "react-router-dom";
import {Trip} from "../models/trip";


// @ts-ignore
const HomeItem = ({title, imagePath, durationDays, level, price, id}: Trip) => {

   return (
       <li className = "trip-card">
          <img src = {imagePath} alt = "trip land" style={{height: '100%'}}/>
          <div className = "trip-card__content">
             <div className = "trip-info">
                <h3 className = "trip-info__title">{title}</h3>
                <div className = "trip-info__content">
                   <span
                       className = "trip-info__duration"><strong>{durationDays}</strong> {durationDays <= 1 ? 'day' : 'days'}</span>
                   <span className = "trip-info__level">{level}</span>
                </div>
             </div>
             <div className = "trip-price">
                <span>Price</span>
                <strong className = "trip-price__value">{price} $</strong>
             </div>
          </div>
          <Link to = {`/trip/${id}`} className = "button">Discover a trip</Link>
       </li>
   );
};

export default HomeItem;
