import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${reset};
    body{
        padding: 20px 60px;
    }
    
    a{
        text-decoration: none;
        color:black;
    }
    a:hover{
        color:#ccc;
    }

    h2{
        font-size:32px;
        font-weight:bold;
    }
  
`;

export default GlobalStyles;
