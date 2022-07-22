import React from 'react';
// @ts-ignore
import classes from '../styles/input.module.css';

const LoggingInput = ({inputName, inputType, ...props} : {inputName: string, inputType: string, props?: {required: boolean}}) => {
   return (
       <label className = "trip-popup__input input">
          <span className = {classes.input__heading}>{inputName}</span>
          <input className='log-input' {...props} name = {inputName} type = {inputType}/>
       </label>
   );
};

export default LoggingInput;
