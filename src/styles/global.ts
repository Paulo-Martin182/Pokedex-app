import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
    html {
      font-size: 62.5%;
    }

    body {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      overflow: hidden;
    }

`

export default GlobalStyles
