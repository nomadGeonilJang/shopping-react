import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "components/with-spinner/with-spinner.styles";

const WithSpinner = ( WrapperComponent:any ) => {
  const Spinner = ( { isLoading, ...otherProps }:any ) => {
    return  isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer/>
      </SpinnerOverlay>
    ) : (
      <WrapperComponent {...otherProps}/>
    );
  };
  return Spinner;  
};

export default WithSpinner;