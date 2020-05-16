import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#171717" />
          <meta name="msapplication-TileColor" content="#171717" />
          <meta name="description" content="Portfolio website for Jordan Barbosa, React fanatic." />

          <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
          <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#171717" />
          <link rel="shortcut icon" href="favicon/favicon.ico" />
          <meta name="msapplication-config" content="browserconfig.xml" />

          <link rel="manifest" href="manifest/manifest.json" />

          <link
            rel="stylesheet preconnect"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
            integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ="
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Acme|Concert+One|Ubuntu&display=swap"
            rel="stylesheet preconnect"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
