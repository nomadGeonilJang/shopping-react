import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;
const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    &:hover {
      background-color: #357ae8;
      border: none;
    }
`;
type ButtonStyle = {
  inverted?:boolean
  isGoogleSignIn?:boolean
}
const getButtonStyles = ( props:ButtonStyle ) => {
  if( props.isGoogleSignIn ){
    return googleSignInStyles;
  }
  return props.inverted ? invertButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 12px;
  border: none;

  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;