import React from "react"
import { StateContext } from "../components/el/provider"
import "../styles/global.css"
import type { AppProps } from "next/app"
import PageAlert from "../components/el/pagealert"
import BackToTop from "../components/ui/backtotop"
import Dashboard from "../components/parts/dashboard"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StateContext.Consumer>
        {context => (
          <React.Fragment>
            <PageAlert />
            <Dashboard>
              <Component {...pageProps} />
            </Dashboard>
            <BackToTop />
          </React.Fragment>
        )}
      </StateContext.Consumer>
    </>
  )
}
