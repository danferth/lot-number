import { Html, Main, Head, NextScript } from "next/document"
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
