import { createGlobalStyle } from 'styled-components'

export type Theme = {
  theme: typeof lightTheme
}

export const lightTheme = {
  background: '#f9fafc',
  container: '#FFFFFF',
  border: '#000000',
  shadow: '0px 2px 1px #dedede',
  boderButtonFeedback: '#f2f2f2'
}

export const darkTheme = {
  background: '#000000'
}

export const GlobalStyles = createGlobalStyle<Theme>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background: ${({ theme }) => theme.background};
    font-family: 'Roboto', sans-serif;
  }
`
