import React from "react"
import tw, { css } from "twin.macro"

const H1 = tw.h1`text-2xl text-gray-900 border-b border-gray-900 font-extralight mt-0 mb-2 pb-2 print:text-xl`
const H2 = tw.h2`text-lg text-gray-800 mt-6 mb-2 font-bold print:text-base`
const H3 = tw.h3`text-base text-gray-800 mt-3 mb-1 font-semibold print:text-sm`
const P = tw.p`text-gray-700 mb-4 text-sm print:text-xs`
// used in appnoteblock and productblock
const H4 = tw.h4`font-semibold text-sm text-gray-800 mb-1.5 print:text-xs`

// elements
const Citation = tw.p`font-extralight text-gray-400 text-xs my-0 max-w-md`
const CTA = tw.p`my-4 font-normal font-semibold text-gray-700 max-w-md -ml-10 pl-10 pr-3 py-2.5 rounded-r-md bg-gray-200`
const Disclaimer = tw.p`text-xs text-gray-400 mt-12 border-t border-gray-300 pt-1.5`

// List
const List = props => {
  const listColumnStyle = tw`md:col-count-2 xl:col-count-3`
  const insetStyles = tw`mt-2 pl-5 mb-0`
  const hasTableStyles = css`
    ${tw`mt-2 mb-0 pl-0`}
    li div {
      ${tw`mt-0 mb-0`}
    }
  `
  const defaultListStyle = tw`mt-4 mb-6 pl-5`
  return (
    <div>
      {props.ol && (
        <ol
          css={[
            tw`list-decimal`,
            props.column && listColumnStyle,
            props.hasTable ? hasTableStyles : defaultListStyle,
            props.inset ? insetStyles : defaultListStyle,
          ]}
        >
          {props.children}
        </ol>
      )}
      {props.ul && (
        <ul
          css={[
            props.column && listColumnStyle,
            props.noBullets ? tw`list-none` : tw`list-disc`,
            props.hasTable && hasTableStyles,
            props.inset && insetStyles,
            !props.hasTable && !props.inset && defaultListStyle,
          ]}
        >
          {props.children}
        </ul>
      )}
    </div>
  )
}
const Li = tw.li`text-sm font-normal text-gray-600 mb-2 leading-tight print:text-xs`

// containers
const TextColumns = props => {
  const columnStyle = tw`md:col-count-2 text-justify md:gap-x-8`
  return <div css={[columnStyle]}>{props.children}</div>
}

const Caption = props => {
  return (
    <p
      css={[
        tw`border-t border-blue-500 mb-4`,
        props.image && tw`-mt-2 w-3/4 mx-auto`,
        props.table && tw`mt-2`,
      ]}
    >
      <span tw="font-normal text-gray-800 italic text-xs mr-2">
        {props.fig && "fig."}
        {props.table && "table."}
        {props.fig || props.table}
      </span>
      <span tw="font-extralight text-gray-600 text-xs leading-tight">
        {props.children}
      </span>
    </p>
  )
}

// tables
const AppTable = props => {
  const tableStyles = css`
    min-width: 50%;
    caption {
      caption-side: bottom;
      text-align: left;
    }
    thead tr {
      ${tw`border-b border-gray-500`}
    }
    thead tr th {
      ${tw`py-1 px-3 text-center font-semibold text-gray-800 text-sm border-r border-gray-300 last:border-r-0`}
    }
    tbody tr {
      ${tw`border-b border-gray-300 last:border-b-0`}
    }
    tbody tr td {
      ${tw`text-center text-gray-700 py-1 px-3 text-xs border-r border-gray-300 last:border-r-0`}
    }
  `
  const wrapperStyles = css`
    ${tw`mt-4 mb-4 overflow-x-auto print:my-0`}
  `
  return (
    <div css={[wrapperStyles]}>
      <table css={[tableStyles]}>
        {props.caption && (
          <caption tw=" border-b border-blue-500 mb-2">
            <span tw="font-normal text-gray-800 italic text-xs mr-2">{`Table.${props.caption[0]}`}</span>
            <span
              tw="font-extralight text-gray-600 text-xs leading-tight"
              dangerouslySetInnerHTML={{ __html: props.caption[1] }}
            ></span>
          </caption>
        )}
        {props.children}
      </table>
    </div>
  )
}

//functions
const Trunc = (str, limit) => {
  if (str.length > limit) {
    const elip = "..."
    const rslt = str.slice(0, limit - 1).concat("", elip)
    return rslt
  } else {
    return str
  }
}

export {
  H1,
  H2,
  H3,
  H4,
  P,
  List,
  Li,
  Citation,
  CTA,
  Caption,
  AppTable,
  TextColumns,
  Disclaimer,
  Trunc,
}
