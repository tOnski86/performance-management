import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-white: #F2FDFF;
  --color-black: #222222;

  --color-green-1: #1b444b;
  --color-green-2: #173f46;
  --color-green-3: #418C99;
  --color-green-4: #55a8b7;
  --color-green-5: #ddeff2;
  --color-green-6: #fefefe;
  --color-magenta-1: #A14A76;
  --color-magenta-2: #ad5581;
  --color-magenta-3: #f4d7e5;

  --color-grey-light-1: #f9fafb;
  --color-grey-light-2: #f2f2f2;
  --color-grey-light-3: #dadada;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

::selection {
  color: var(--color-white);
  background: var(--color-green-4);
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  line-height: 1.5;
  min-height: 100vh;
  color: var(--color-black);
}

a{
  color: inherit;
  text-decoration: none;
}

input, 
button, 
textarea, 
select {
  font: inherit;
  color: inherit;
}

input::-webkit-datetime-edit-day-field:focus,
input::-webkit-datetime-edit-month-field:focus,
input::-webkit-datetime-edit-year-field:focus {
  color: var(--color-white);
  background: var(--color-green-4);
  outline: none;
}
`;

export default GlobalStyles;
