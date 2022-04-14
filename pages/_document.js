import { Html, Head, Main, NextScript } from 'next/document';



export default function Document() {
  return (
    <Html lang="pl-Pl">
      <Head />
       <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
       <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<link rel="manifest" href="/manifest.webmanifest"></link>
<link rel="apple-touch-icon" href="/img/icons/icon1-96.png"></link> 
<meta name="apple-mobile-web-app-status-bar" content="#FFE1C4"></meta>
      <body>
        <Main />
        <NextScript  />
      </body>
    </Html>
  )
}
