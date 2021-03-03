import React, { useRef, useState } from "react";
import "./sign-up.styles.scss";

import { auth, createUserProfileDocument } from "utils/firebase/firebase.utils";

import FormInput from "components/form-input/form-input.component";
import CustomButton from "components/custom-button/custom-button.component";

const SingUp = () => {

  const formRef = useRef<HTMLFormElement>( null );
  const [ { displayName, email, password, confirmPassword }, setFormState ] = useState( {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  } );

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

    try {
      const { user } = await auth.createUserWithEmailAndPassword( email, password );
      await createUserProfileDocument( user, { displayName } );
      formRef.current!.reset();
    } catch ( error ) {
      console.log( error );
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form ref={formRef} className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput 
          type="text" 
          name="displayName"
          label="displayName"
          value={displayName}
          onChange={handleChange}
          required/>
        <FormInput 
          type="email" 
          name="email"
          label="email"
          value={email}
          onChange={handleChange}
          required/>
        <FormInput 
          type="password" 
          name="password"
          label="password"
          value={password}
          onChange={handleChange}
          required/>
        <FormInput 
          type="password" 
          name="confirmPassword"
          label="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required/>
        <CustomButton 
          type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SingUp;