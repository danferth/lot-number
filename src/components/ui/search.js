import React from "react"
import "twin.macro"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"
import CustomSearch from "../el/searchbox"
import CustomResults from "../el/searchhitswrapper"

//api stuffs
const searchClient = algoliasearch(
  "XDOED1GAN4",
  "eaf49548dc9cac4a8f4116796b2b7023"
)

// main search component look in components/el/search... for included elements
const Search = () => {
  return (
    <div tw="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
      <div tw="relative max-w-lg w-full lg:max-w-xs">
        <InstantSearch
          indexName="dev_PRODUCTS"
          searchClient={searchClient}
          stalledSearchDelay={10}
        >
          {/* Input goes here */}
          <CustomSearch />
          {/* hits container here */}
          <CustomResults />
        </InstantSearch>
      </div>
    </div>
  )
}

export default Search
