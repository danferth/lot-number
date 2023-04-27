import React from "react"
import tw from "twin.macro"

const Table = props => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto xl:overflow-x-visible">
        <div tw="align-middle inline-block min-w-full rounded overflow-hidden">
          <table css={[tw`min-w-full`, props.className]}>
            {props.children}
          </table>
        </div>
      </div>
    </div>
  )
}
const Thead = tw.thead``
const Th = tw.th`px-1.5 py-1.5 bg-gray-600 text-left text-xs leading-4 font-medium text-gray-50 uppercase tracking-wider`

const Tbody = tw.tbody``
const Tr = tw.tr`bg-white even-of-type:bg-gray-50`

const Td = props => {
  return (
    <td
      rowSpan={props.rowspan}
      colSpan={props.colspan}
      className={props.className}
      css={[
        tw`px-1.5 py-1.5 whitespace-nowrap text-xs leading-5 text-gray-600`,
        props.bold && tw`font-medium text-gray-900`,
      ]}
    >
      {props.children}
    </td>
  )
}
export { Table, Thead, Th, Tbody, Tr, Td }
