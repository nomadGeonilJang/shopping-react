import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ( { children, isGoogleSignIn,  inverted, ...others }:any ) => (
  <button className={`custom-button ${inverted ? 'inverted' : isGoogleSignIn ? "google-sign-in" : ""}`.trim()} {...others}>{children}</button>
);

export default CustomButton;