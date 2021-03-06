import React, { useRef, useState } from "react";
import "./sign-up.styles.scss";

import FormInput from "components/form-input/form-input.component";
import CustomButton from "components/custom-button/custom-button.component";
import { useSignUp } from "utils/redux/user/user.hooks";

const initState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SingUp = () => {
  const signUp = useSignUp();
  const formRef = useRef<HTMLFormElement>( null );
  const [ { displayName, email, password, confirmPassword }, setFormState ] = useState( initState );

  const handleChange = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = e.target;
    setFormState( prevState => ( {
      ...prevState,
      [ name ]: value
    } ) );
  }; 

  const handleSubmit = async  ( e:React.FormEvent ) => {
    e.preventDefault();
    if( password !== confirmPassword ){
      alert( "passwords don't match" );
      return;
    }

    signUp( { displayName, email, password } );
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form ref={formRef} className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput 
          type="text" 
          name="displayName"
          label="Display Name"
          value={displayName}
          onChange={handleChange}
          required/>
        <FormInput 
          type="email" 
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          required/>
        <FormInput 
          type="password" 
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
          required/>
        <FormInput 
          type="password" 
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
          required/>
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SingUp;