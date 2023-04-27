import React from "react"
import { StateContext } from "./el/provider"
import PageHeader from "./pageheader"
import NavBar from "./ui/navbar"
import Footer from "./footer"
import SeO from "./seo"
import PageAlert from "../components/el/pagealert"
import BackToTop from "../components/ui/backtotop"
import SiteMessage from "../components/el/sitemessage"
const Layout = props => {
  return (
    <StateContext.Consumer>
      {context => (
        <React.Fragment>
          <SeO
            title={props.title}
            description={props.description}
            schemaMarkup={props.schemaMarkup}
            noIndex={props.noIndex}
          ></SeO>
          <PageAlert />
          <SiteMessage />
          <NavBar></NavBar>
          <main className="main">
            {props.noheader ? (
              ""
            ) : (
              <PageHeader title={props.title}></PageHeader>
            )}
            <div className="content">{props.children}</div>
          </main>
          <BackToTop />
          <Footer></Footer>
        </React.Fragment>
      )}
    </StateContext.Consumer>
  )
}

export default Layout
