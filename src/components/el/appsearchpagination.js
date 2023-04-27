import React from "react"
import tw, { css } from "twin.macro"
import { Pagination } from "react-instantsearch-dom"

const CustomPagination = () => {
  const paginationStyle = css`
    .ais-Pagination {
      ${tw`flex items-center justify-center mt-6 pb-3 border-b border-gray-200`}
      .ais-Pagination-list {
        ${tw`flex items-center space-x-3 text-sm font-light cursor-pointer`}
        li {
          ${tw`inline-flex text-gray-500 bg-gray-100 py-0.5 px-1.5 rounded hover:bg-gray-200 transition`}
        }
        li.ais-Pagination-item--previousPage,
        li.ais-Pagination-item--nextPage,
        li.ais-Pagination-item--firstPage,
        li.ais-Pagination-item--lastPage {
          ${tw`bg-transparent`}
        }
        li.ais-Pagination-item--disabled {
          ${tw`text-gray-300 hover:text-gray-300`}
        }
        li.ais-Pagination-item--selected {
          ${tw`text-blue-600 bg-blue-100 hover:text-blue-700 hover:bg-blue-200 transition`}
        }
      }
      ${tw``}
    }
  `
  return (
    <div css={paginationStyle}>
      <Pagination
        showFirst={true}
        showPrevious={true}
        showNext={true}
        showLast={true}
        padding={1}
      />
    </div>
  )
}

export default CustomPagination
