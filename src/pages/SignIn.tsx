import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import LoggingForm from "../components/LoggingForm";
import Loader from "../components/Loader";
import {loggingAPI} from "../services/AuthService";

const SignIn = () => {
   const navigate = useNavigate();
   // useEffect(() => {
   //    if(localStorage.getItem('token')) {
   //       navigate('/');
   //    }
   // },[]);

   const [login, {
      data: logInfo, error,
      isLoading,
   }] = loggingAPI.useSignInMutation();

   if (isLoading) {
      return <Loader/>
   }

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const response = await login({
         email: (form.elements[0] as HTMLInputElement).value,
         password: (form.elements[1] as HTMLInputElement).value,
      });
      // @ts-ignore
      if (response?.error) {
         // @ts-ignore
         alert(response?.error.data.message)
      } else {
         navigate('/');
         // @ts-ignore
         localStorage.setItem('token', response?.data.token);
        // console.log(response);
      }
   }

   return (
       <main className = "sign-in-page">
          <h1 className = "visually-hidden">Travel App</h1>

          <LoggingForm onSubmit = {handleSubmit} title = 'Sign In' inputs = {[
             {inputName: 'Email', inputType: 'email', required: true},
             {inputName: 'Password', inputType: 'password', required: true, pattern: ".{3,20}"}
          ]}/>
          <span>
        Already have an account?
        <Link to = "/sign-up" className = "sign-in-form__link">Sign Up</Link>
      </span>
       </main>
   );
};

export default SignIn;
