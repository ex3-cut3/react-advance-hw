import React from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Home from "./Home";
import Bookings from "./Bookings";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import TripPageById from "./TripPageById";

const AppRoutes = () => {
   const location = useLocation();
   const redirectSignIn = <Navigate to='/sign-in' replace/>
   const redirectHome = <Navigate to='/' replace/>
   const token = localStorage.getItem('token');
   return (
       <Routes>
          <Route path = "/" element = {token ? <Home/> : redirectSignIn}/>
          <Route path = "/bookings" element = {token ? <Bookings/> : redirectSignIn}/>
          <Route path = "/sign-up" element = {<SignUp/>}/>
          <Route path = "/sign-in" element = {token ? redirectHome :<SignIn/>}/>
          <Route path = "/trip/:id" element = {<TripPageById/>}/>
          <Route path = "/*" element = {<Navigate
              to = {(localStorage.getItem('token') && location.pathname !== '/sign-in' && location.pathname !== '/sign-up') ? "/" : '/sign-in'}
              replace/>}/>
       </Routes>
   );
};

export default AppRoutes;
