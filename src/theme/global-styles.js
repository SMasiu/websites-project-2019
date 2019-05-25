import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    background: #ececec;
    color: #656565;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  img {
      width: 100%;
      display: block;
  }
`;

export default GlobalStyle;