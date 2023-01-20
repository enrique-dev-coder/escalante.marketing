import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../src/components/Menus/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Escalante Marketing</title>
        <link rel="icon" href="/icon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
