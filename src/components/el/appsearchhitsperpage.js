import React from "react"
import tw, { css } from "twin.macro"
import { HitsPerPage } from "react-instantsearch-dom"
const CustomHitsPerPage = () => {
  const hitsPerPageStyles = css`
    ${tw`mt-0 lg:mt-1.5 flex items-center justify-between w-full sm:col-span-2 lg:col-span-1`}
    .ais-HitsPerPage {
      ${tw`h-full w-full text-xs text-gray-700`}
      .ais-HitsPerPage-select {
        ${tw`px-2 py-1.5 appearance-none block w-full flex-grow text-xs bg-white border-0! ring-1 ring-gray-300 focus:ring focus:ring-blue-300 focus:outline-none rounded-md`}
        .ais-HitsPerPage-option {
        }
      }
    }
  `

  return (
    <span css={hitsPerPageStyles}>
      <HitsPerPage
        defaultRefinement={10}
        items={[
          { value: 10, label: "Show 10 per page" },
          { value: 20, label: "Show 20 per page" },
          { value: 50, label: "Show 50 per page" },
          { value: 200, label: "Show all" },
        ]}
      />
    </span>
  )
}

export default CustomHitsPerPage
