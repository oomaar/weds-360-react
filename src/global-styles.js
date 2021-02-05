import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: lato,sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    margin: 0;
    padding: 0;
  }
`;