import React from "react"
import "../styles/global.css"
import type { AppProps } from "next/app"
import PageAlert from "../components/el/pagealert"
import BackToTop from "../components/ui/backtotop"
import Dashboard from "../components/parts/dashboard"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageAlert />
      <Dashboard>
        <Component {...pageProps} />
      </Dashboard>
      <BackToTop />
    </>
  )
}
