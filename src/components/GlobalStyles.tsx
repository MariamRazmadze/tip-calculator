import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background-color:${(props) => props.theme.background};
    font-family: "Space Mono", monospace;
}

@media  screen  and (min-width: 1200px){
    body{padding: 50px 260px;
    
}
}







`;

export default GlobalStyles;
