import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${reset};
    body{
        font-family:'Open Sans Condensed' !important;
        padding: 20px 60px;
    }
    
  
`;

export default GlobalStyles;
