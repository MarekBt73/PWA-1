import { Html, Head, Main, NextScript } from "next/document";

const APP_NAME = "Rcus PWA";
const APP_DESCRIPTION = "=Najwyższy czas już zacząć zmiany";

export default function Document() {
  return (
    <Html lang='pl-Pl'>
      <Head />

         <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          <meta name='description' content={APP_DESCRIPTION} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />




      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      <link rel='manifest' href='/manifest.webmanifest'></link>
      <link rel='apple-touch-icon' href='/img/icons/icon1-96.png'></link>
      <meta name='apple-mobile-web-app-status-bar' content='#b82eee'></meta>
      <meta name='theme-color' content='#bb14ee'></meta>
      <link rel='shortcut icon' href='/favicon.ico' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
