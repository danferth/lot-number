import React from "react"
import tw, { css } from "twin.macro"
import { HierarchicalMenu } from "react-instantsearch-dom"
import { CustomStats } from "../el/appsearchelements"
import { H4 } from "../el/appnotetypography"

const CustomRefinementMenu = props => {
  const styles = css`
    .ais-HierarchicalMenu-list {
      ${tw`space-y-1`}
      .ais-HierarchicalMenu-item {
        .ais-HierarchicalMenu-link {
          ${tw`flex items-center justify-between px-2 py-1 bg-white rounded hover:bg-blue-100 text-gray-500 hover:text-blue-600 transition`}
          .ais-HierarchicalMenu-label {
            ${tw`flex-grow text-xs`}
          }
          .ais-HierarchicalMenu-count {
            ${tw`block text-center bg-gray-100 text-xs text-gray-400 w-8 py-0.5 rounded-sm transition`}
          }
        }
      }

      .ais-HierarchicalMenu-item--selected > .ais-HierarchicalMenu-link {
        ${tw`bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-700`}
        .ais-HierarchicalMenu-count {
          ${tw`bg-blue-300 text-blue-600`}
        }
      }
    }
    .ais-HierarchicalMenu-list--child {
      ${tw`pl-4 mt-1`}
    }
  `

  return (
    <div css={styles}>
      <H4>Sort by Product</H4>
      <HierarchicalMenu
        defaultRefinement={props.defaultRefinementMenu}
        facetOrdering={true}
        attributes={["categories.lvl0", "categories.lvl1"]}
      />
      <CustomStats />
    </div>
  )
}

export default CustomRefinementMenu
