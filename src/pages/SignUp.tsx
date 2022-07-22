import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import LoggingForm from "../components/LoggingForm";
import {loggingAPI} from "../services/AuthService";
import Loader from "../components/Loader";

const SignUp = () => {

   const navigate = useNavigate();
   const [register, {
      data: logInfo, error,
      isLoading,
   }] = loggingAPI.useSignUpMutation();

   if (isLoading) {
      return <Loader/>
   }

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const response = await register({
         fullName: (form.elements[0] as HTMLInputElement).value,
         email: (form.elements[1] as HTMLInputElement).value,
         password: (form.elements[2] as HTMLInputElement).value,
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
       <main className = "sign-up-page">
          <h1 className = "visually-hidden">Travel App</h1>

          <LoggingForm onSubmit = {handleSubmit} title = 'Sign Up' inputs = {[
             {inputName: 'Name', inputType: 'text', required: true},
             {inputName: 'Email', inputType: 'email', required: true},
             {inputName: 'Password', inputType: 'password', required: true, pattern: ".{3,20}"}
          ]}/>
          <span>
        Already have an account?
        <Link to = "/sign-in" className = "sign-up-form__link">Sign In</Link>
      </span>
       </main>
   );
};

export default SignUp;
