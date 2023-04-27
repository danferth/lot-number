import React from "react"
import { connectStateResults, Index } from "react-instantsearch-dom"
import AppCustomResourceHits from "./appsearchhitresources"
import CustomCurrentRefinements from "./appsearchcurrentrefinements"

import CustomPagination from "./appsearchpagination"
// wrapper for hits
const AppResultsWrapper = () => {
  return (
    <div>
      {/* Hits go here */}
      <Index indexName="dev_RESOURCES_2021">
        <CustomCurrentRefinements />
        <AppCustomResourceHits />
        <CustomPagination />
      </Index>
    </div>
  )
}

//sylted components

const AppCustomResults = connectStateResults(AppResultsWrapper)

export default AppCustomResults
