import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;

        text-decoration: none;
        
        body{
            font-family: 'Inter', sans-serif;
            background-color: #eeeeee;
        }
    }
`