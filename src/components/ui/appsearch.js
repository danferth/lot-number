import React from "react"
import "twin.macro"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"
import AppCustomSearch from "../el/appsearchbox"
import AppCustomResults from "../el/appsearchhitswrapper"
import CustomRefinementMenu from "../el/appsearchrefinementmenu"
import CustomRefinementList from "../el/appsearchrefinementlist"
import CustomHitsPerPage from "../el/appsearchhitsperpage"
//api stuffs
const searchClient = algoliasearch(
  "XDOED1GAN4",
  "eaf49548dc9cac4a8f4116796b2b7023"
)

// main search component look in components/el/search... for included elements
const AppSearch = props => {
  return (
    <div tw="w-full">
      <InstantSearch
        indexName="dev_RESOURCES_2021"
        searchClient={searchClient}
        stalledSearchDelay={10}
      >
        <div tw="grid grid-cols-8 gap-8 md:gap-4 xl:gap-6">
          {/* Search goes here */}
          <div tw="col-span-8 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:block gap-4 pb-8 lg:pb-0 border-b lg:border-b-0 lg:border-r lg:pr-4 xl:pr-6 lg:mb-4 xl:mb-6 border-gray-200">
            <AppCustomSearch />
            <CustomHitsPerPage />
            <CustomRefinementList
              defaultRefinementList={props.defaultRefinementList}
            />
            <CustomRefinementMenu
              defaultRefinementMenu={props.defaultRefinementMenu}
            />
          </div>
          {/* hits container here */}
          <div tw="col-span-8 lg:col-span-6">
            <AppCustomResults />
          </div>
        </div>
      </InstantSearch>
    </div>
  )
}

export default AppSearch
