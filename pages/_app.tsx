import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href='logo-sun.ico' />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
