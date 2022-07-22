import React from 'react';
// @ts-ignore
import footerImg from '../markup/assets/images/heart.svg';
import {useLocation} from "react-router-dom";

const Footer = () => {
   const location = useLocation();

   return (
       <footer className = "footer" style={(location.pathname !== '/') ? {position: 'absolute', bottom: '0', left: '0', width: '100%'} : {}}>
      <span className = "footer__text">
        from <a className = "footer__link" rel = 'noreferrer' target = '_blank' href = "https://binary-studio.com">binary studio</a> with
        <img className = "footer__icon" src = {footerImg} alt = "heart"/>
      </span>
       </footer>
   );
};

export default Footer;
