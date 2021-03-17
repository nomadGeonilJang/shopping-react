import React, { useState } from "react";
import "./sign-in.styles.scss";

import FormInput from "components/form-input/form-input.component";
import CustomButton from "components/custom-button/custom-button.component";
import { useEmailAndPasswordSignIn, useGoogleSignIn } from "utils/redux/user/user.hooks";

const initState = {
  email: "",
  password: ""
};

const SignIn = () => {
  const googleSignIn = useGoogleSignIn();
  const emailSignIn = useEmailAndPasswordSignIn();

  const [ { email, password }, setFormState ] = useState( initState );


  const handleSubmit = async ( event:React.FormEvent ) => {
    event.preventDefault();
    emailSignIn( { email, password } ); 
  };

  const handleChange = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = e.target;

    setFormState( prev => ( {
      ...prev,
      [ name ]: value
    } ) );

  };


  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in whith your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Email"
          value={email}
          onChange={handleChange}
          name="email" 
          type="email"
          required
        />
        <FormInput  
          label="Password"
          value={password}
          onChange={handleChange}
          name="password"
          type="password" 
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  );
};


export default SignIn;