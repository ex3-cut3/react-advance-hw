import React from 'react';
import './markup/assets/css/style.css';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./pages/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

   return (
       <BrowserRouter>
          <Header/>
          <AppRoutes/>
          <Footer/>
       </BrowserRouter>
   );
}

export default App;
