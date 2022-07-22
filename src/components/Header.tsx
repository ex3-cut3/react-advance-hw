import React, {useEffect} from 'react';
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
// @ts-ignore
import briefcase from '../markup/assets/images/briefcase.svg';
// @ts-ignore
import user from '../markup/assets/images/user.svg';
import {loggingAPI} from "../services/AuthService";

const Header = () => {

   const location = useLocation();
   const navigate = useNavigate();
   const token = localStorage.getItem('token')!;

   const {
      data: logInfo, error,
      isLoading,
   } = loggingAPI.useLoggedUserQuery(token);

   useEffect(() => {
      if (error) return navigate('/sign-in');
   }, [])

   return (
       <header className = "header">
          <div className = "header__inner">
             <Link to = {token ? "/" : '/sign-in'} className = "header__logo">Travel App</Link>

             {(location.pathname !== '/sign-in' && location.pathname !== '/sign-up') &&
                 <nav className = "header__nav">
                     <ul className = "nav-header__list">
                         <li className = "nav-header__item" title = "Bookings">
                             <Link to = "/bookings" className = "nav-header__inner">
                                 <span className = "visually-hidden">Bookings</span>
                                 <img src = {briefcase} alt = "bookings icon"/>
                             </Link>
                         </li>
                         <li className = "nav-header__item" title = "Profile">
                             <div className = "nav-header__inner profile-nav" tabIndex = {0}>
                                 <span className = "visually-hidden">Profile</span>
                                 <img src = {user} alt = "profile icon"/>
                                 <ul className = "profile-nav__list">
                                     <NavLink to = '/' style = {{textDecoration: "none"}}>
                                         <li className = "profile-nav__item profile-nav__username">
                                            {logInfo ? logInfo!.fullName[0].toUpperCase() + logInfo!.fullName.slice(1) : 'Name'}
                                         </li>
                                     </NavLink>
                                     <li className = "profile-nav__item">
                                         <NavLink to = 'sign-in' style = {{textDecoration: "none"}}>
                                             <button className = "profile-nav__sign-out button" onClick = {() => {
                                                localStorage.setItem('token', '')
                                             }}>Sign Out
                                             </button>
                                         </NavLink>
                                     </li>
                                 </ul>
                             </div>
                         </li>
                     </ul>
                 </nav>}
          </div>
       </header>
   );
};

export default Header;
