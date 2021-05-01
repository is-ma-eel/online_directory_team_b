import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Lato, Sans-Serif;
  }

  #root {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

`;

export default GlobalStyle;
