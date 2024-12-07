import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
  min-height: 100vh;
}
`;

export default GlobalStyles;
