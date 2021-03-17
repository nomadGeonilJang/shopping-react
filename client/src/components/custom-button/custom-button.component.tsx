import React from "react";
import { CustomButtonContainer } from "components/custom-button/custom-button.styles";

const CustomButton = ( { children, ...props }:any ) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;