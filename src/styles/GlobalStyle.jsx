import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        font-size: 14px;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
        letter-spacing: -.0125rem;
        background: #eae7de;
    }
    a{
        text-decoration: none;
        color: black;
    }
    
    img {
        width: 100%;
    }
`

export default GlobalStyle