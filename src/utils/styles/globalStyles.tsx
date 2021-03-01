import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${reset};
    body{
        font-family:'Open Sans Condensed' !important;
        padding: 20px 60px;
    }
    
    a{
        text-decoration: none;
        color:black;
    }
    a:hover{
        color:#ccc;
    }
  
`;

export default GlobalStyles;
