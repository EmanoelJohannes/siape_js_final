import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    background: ${({ theme }) => theme.colors.primary};
    overflow-x: hidden;
    max-height: 100vh;
    max-width: 100vw;
  }

  body {
    color: ${({ theme }) => theme.colors.textPrimary};
    max-height: 100vh;
    max-width: 100vw;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *, input, button {
    border: 0;
    background: none;
    font-family: 'Poppins', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #eee;
  }

  ::-webkit-scrollbar-thumb {
    background: #fff;
  }
`;

export default GlobalStyle;
