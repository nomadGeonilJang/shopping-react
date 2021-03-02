import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ( { children, isGoogleSignIn,  ...others }:any ) => (
  <button className={`custom-button ${isGoogleSignIn && "google-sign-in"}`.trim()} {...others}>{children}</button>
);

export default CustomButton;