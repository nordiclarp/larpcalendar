// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

export const Document = () => (
  <Html lang="en">
    <Head>
      <meta
        name="description"
        content="Your one-stop shop for finding international larps!"
      />
      <meta property="og:title" content="Larp Calendar" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Your one-stop shop for finding international larps!"
      />
      <meta
        property="og:image"
        content="https://larpcalendar.org/assets/og-image.png"
      />
      <meta property="og:image:alt" content="Larp Calendar logo" />
      <meta property="og:site_name" content="Larp Calendar" />
      <base href="/" />
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicon-16x16.png"
      />
      <link rel="manifest" href="/assets/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/assets/safari-pinned-tab.svg"
        color="#1a202c"
      />
      <meta name="msapplication-TileColor" content="#1a202c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>

    <body>
      <ColorModeScript initialColorMode="system" />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
