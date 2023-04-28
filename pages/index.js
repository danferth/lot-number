import React from "react"

import useRemoveBackTotop from "../components/useRemoveBackToTop"
import { P } from "../components/el/typography"
// import useRoles from "../components/useRoles"
const DashboardHome = () => {
  useRemoveBackTotop()
  // useRoles("user")
  return (
    <div className="">
      <P>Home of the dashboard</P>
    </div>
  )
}

export default DashboardHome
