import React from "react"
import { StateContext } from "./el/provider"
import SeO from "./seo"
import PageAlert from "../components/el/pagealert"
import BackToTop from "../components/ui/backtotop"
import SiteMessage from "../components/el/sitemessage"
import Dashboard from "../components/parts/dashboard"
const DashboardLayout = props => {
  return (
    <StateContext.Consumer>
      {context => (
        <React.Fragment>
          <SeO
            title={props.title}
            description={props.description}
            bodyAttributes={{ class: "dashboard" }}
            htmlAttributes={{ class: "dashboardWrap" }}
            noIndex={true}
          ></SeO>
          <PageAlert />
          <SiteMessage />
          <Dashboard
            pageTitle={props.pageTitle}
            pageMessage={props.pageMessage}
          >
            {props.children}
          </Dashboard>
          <BackToTop />
        </React.Fragment>
      )}
    </StateContext.Consumer>
  )
}

export default DashboardLayout
