import { createGlobalStyle } from 'styled-components';
import bgStars from '@/assets/background-stars.svg';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'League Spartan', sans-serif;
    font-size: 16px;
    background-color: #070724;
    color: white;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background-image: url(${bgStars.src});
  }
`;
