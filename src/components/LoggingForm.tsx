import React from 'react';
import LoggingInput from "./LoggingInput";
import {useNavigate} from "react-router-dom";

const LoggingForm = ({title, inputs, onSubmit}: { title: string, inputs: {}[], onSubmit: Function }) => {
   return (
       <form className = "sign-up-form" autoComplete = "off" onSubmit = {(e) => onSubmit(e)}>
          <h2 className = "sign-up-form__title">{title}</h2>
          {inputs.map((input: any) => {
             return <LoggingInput key = {input.inputName} {...input}/>
          })}
          <button className = "button" type = "submit">{title}</button>
       </form>
   );
};

export default LoggingForm;
// eslint-disable-next-line no-lone-blocks
{/*<LoggingInput inputName = 'Name' inputType = 'text' required/>
          <LoggingInput inputName = 'Email' inputType = 'email' required/>
          <LoggingInput inputName = 'Password' inputType = 'password' required/>*/
}
