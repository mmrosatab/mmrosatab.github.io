import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  }

  a {
    cursor: pointer;
  }
`

export default GlobalStyle