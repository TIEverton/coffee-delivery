import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --yellow-dark: #C47F17;
    --yellow: #DBAC2C;
    --yellow-light: #F1E9C9;

    --purple-dark: #4B2995;
    --purple: #8047F8;
    --purple-light: #EBE5F9;

    --base-title: #272221;
    --base-subtitle: #403937;
    --base-text: #574F4D;
    --base-label: #8D8686;

    --base-card: #F3F2F2;
    --base-input: #EDEDED;
    --base-button: #E6E5E5;
    --base-hover: #D7D5D5;

    --background: #FAFAFA;
    --white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: var(--background);
    color: var(--base-text);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, select, button {
    font: normal 14px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input:disabled {
    cursor: not-allowed;
  }

  button:disabled {
    cursor: not-allowed;
  }

  .container {
    width: 100%;
    max-width: 1246px;
    margin: 0 auto;
    padding: 0 15px;
  }
`
