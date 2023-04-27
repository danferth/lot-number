import React from "react"
import "twin.macro"
import { connectSearchBox } from "react-instantsearch-dom"
import SearchIcon from "../../images/svg/icons/search.svg"
import LoaderIcon from "../../images/svg/icons/loader.svg"

// Search Box
const AppSearchBox = ({ currentRefinement, refine, isSearchStalled }) => {
  const refinement = currentRefinement
  return (
    <form tw="sm:col-span-2 lg:col-span-1" noValidate action="" role="search">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {isSearchStalled ? (
            <LoaderIcon className="h-5 w-5 text-gray-300 animate-spin" />
          ) : (
            <SearchIcon className="h-5 w-5 text-gray-400" />
          )}
        </div>
        <input
          aria-label="search"
          id="search"
          tw="block w-full pl-10! pr-3! py-2! border-0! ring-1 ring-gray-300 focus:ring-blue-300 focus:ring rounded-md leading-5 bg-white placeholder-gray-500 focus:placeholder-gray-400 sm:text-sm transition"
          placeholder="Search"
          type="search"
          value={refinement}
          onChange={event => refine(event.currentTarget.value)}
        />
      </div>
    </form>
  )
}
const CustomSearch = connectSearchBox(AppSearchBox)
export default CustomSearch
