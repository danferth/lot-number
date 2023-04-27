import React from "react"
import tw, { css } from "twin.macro"
import { RefinementList } from "react-instantsearch-dom"
import { H4 } from "./appnotetypography"

const CustomRefinementList = props => {
  const styles = css`
    ${tw``}
    .ais-RefinementList {
      ul.ais-RefinementList-list {
        ${tw`lg:mb-6 space-y-1`}
        .ais-RefinementList-item {
          ${tw`overflow-hidden relative`}
          .ais-RefinementList-label {
            ${tw`flex items-center justify-between px-2 py-1 bg-white rounded hover:bg-blue-100 text-gray-500 hover:text-blue-600 transition`}
            .ais-RefinementList-checkbox {
              ${tw`appearance-none absolute -left-full`}
            }
            .ais-RefinementList-labelText {
              ${tw`flex-grow text-xs`}
            }
            .ais-RefinementList-count {
              ${tw`block text-center bg-gray-100 text-xs text-gray-400 w-8 py-0.5 rounded-sm transition`}
            }
          }
        }
        li.ais-RefinementList-item--selected {
          .ais-RefinementList-label {
            ${tw`bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-700`}
            .ais-RefinementList-count {
              ${tw`bg-blue-300 text-blue-600`}
            }
          }
        }
      }
    }
  `

  return (
    <div css={styles}>
      <H4 tw="lg:mt-4">Sort by Category</H4>
      <RefinementList
        defaultRefinement={props.defaultRefinementList}
        facetOrdering={true}
        attribute="category"
      />
    </div>
  )
}

export default CustomRefinementList
