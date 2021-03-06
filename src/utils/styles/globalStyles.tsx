import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
    body{
        padding: 20px 60px;
        font-size:12px;
        font-family: 'Noto Sans KR', sans-serif;
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
