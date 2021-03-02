import React, { useState } from "react";
import "./sign-in.styles.scss";

import FormInput from "components/form-input/form-input.component";
import CustomButton from "components/custom-button/custom-button.component";
const SignIn = () => {

  const [ formState, setFormState ] = useState( {
    email:"",
    password:""
  } );


  const handleSubmit = ( event:React.FormEvent ) => {
    event.preventDefault();
  };

  const handleChange = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = e.target;

    setFormState( prev=>( {
      ...prev,
      [ name ]:value
    } ) );

  };


  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in whith your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="email"
          value={formState.email}
          onChange={handleChange}
          name="email" 
          type="email"
          required
        />
        <FormInput  
          label="password"
          value={formState.password}
          onChange={handleChange}
          name="password"
          type="password" 
          required
        />
        <CustomButton type="submit">Submit Form</CustomButton>
      </form>
    </div>
  );
};


export default SignIn;