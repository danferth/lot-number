import React from "react"
import "twin.macro"
import useRemoveBackTotop from "../../components/useRemoveBackToTop"
import DashboardLayout from "../../components/dashboardlayout"

import { P } from "../../components/el/typography"
import useRoles from "../../components/useRoles"
const DashboardHome = () => {
  useRemoveBackTotop()
  useRoles("user")
  return (
    <DashboardLayout
      noheader
      title="Dashboard Home"
      pageTitle="Quality Assurance Dashboard"
      pageMessage="A secure hub to searve the needs of the Quality Assurance Departmant"
    >
      <div tw="">
        <P>Home of the dashboard</P>
      </div>
    </DashboardLayout>
  )
}

export default DashboardHome
