import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import { lightTheme, GlobalStyles } from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Squad Feedback Dashboard</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="
          https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700
          &display=swap"
          rel="stylesheet"
        ></link>
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Mantenha a rotina de feedback entre sua equipe"
        />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
