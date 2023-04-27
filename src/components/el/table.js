import React from "react"
import tw from "twin.macro"
import ChevUp from "../../images/svg/icons/chevron-up.svg"
import ChevDown from "../../images/svg/icons/chevron-down.svg"
import ChevRight from "../../images/svg/icons/chevron-right.svg"

const Table = props => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2 overflow-x-auto xl:overflow-x-visible sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          css={[
            tw`align-middle inline-block min-w-full shadow sm:rounded-lg border-b border-gray-200`,
            props.sticky
              ? tw`overflow-hidden lg:overflow-visible`
              : tw`overflow-hidden`,
          ]}
        >
          <table css={[tw`min-w-full`, props.className]}>
            {props.children}
          </table>
        </div>
      </div>
    </div>
  )
}
const Thead = tw.thead``
const Th = tw.th`px-6 py-3 border-b border-blue-200 bg-gray-700 text-left text-xs leading-4 font-medium text-gray-50 uppercase tracking-wider`
const ThSort = props => {
  let chevStatus = "right"
  if (props.sort.key === props.token) {
    if (props.sort.direction === "ascending") {
      chevStatus = "down"
    }
    if (props.sort.direction === "descending") {
      chevStatus = "up"
    }
  } else {
    chevStatus = "right"
  }
  return (
    <div className="flex flex-row items-center">
      <button
        className="text-xs leading-4 font-medium text-gray-50 uppercase tracking-wider hover:underline hover:text-white focus:outline-none"
        onClick={props.onClick}
      >
        {props.children}
      </button>

      <ChevDown
        className={`${
          chevStatus === "down" ? `inline` : `hidden`
        } text-gray-50 inline ml-1 h-4 w-4 stroke-current`}
      />
      <ChevUp
        className={`${
          chevStatus === "up" ? `inline` : `hidden`
        } text-gray-50 inline ml-1 h-4 w-4 stroke-current`}
      />
      <ChevRight
        className={`${
          chevStatus === "right" ? `inline` : `hidden`
        } text-gray-50 inline ml-1 h-4 w-4 stroke-current`}
      />
    </div>
  )
}

const Tbody = tw.tbody``
const Tr = tw.tr`bg-white even-of-type:bg-gray-50`
const Td = props => {
  return (
    <td
      rowSpan={props.rowspan}
      colSpan={props.colspan}
      className={props.className}
      css={[
        tw`px-6 py-4 whitespace-nowrap text-sm leading-5 text-gray-500`,
        props.bold && tw`font-medium text-gray-900`,
      ]}
    >
      {props.children}
    </td>
  )
}
export { Table, Thead, Th, ThSort, Tbody, Tr, Td }
