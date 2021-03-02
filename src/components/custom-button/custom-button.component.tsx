import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ( { children, ...others }:any ) => (
  <button className="custom-button" {...others}>{children}</button>
);

export default CustomButton;