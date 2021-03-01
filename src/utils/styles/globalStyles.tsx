import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${reset};
    body{
        font-family:'Open Sans Condensed' !important;
    }
    
  
`;

export default GlobalStyles;
