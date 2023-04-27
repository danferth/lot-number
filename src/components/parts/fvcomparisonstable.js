import React from "react"
import { Link } from "gatsby"
import tw, { css } from "twin.macro"
// svg
import StdIcon from "../../images/svg/tic/fv.svg"
import NanoIcon from "../../images/svg/tic/nano.svg"
import LowEvapIcon from "../../images/svg/tic/lowEvap.svg"
import ExtremeIcon from "../../images/svg/tic/extreme.svg"
import ExtractorIcon from "../../images/svg/tic/extractor.svg"
import CheckIcon from "../../images/svg/icons/checkcircle.svg"

const FVComparisonsTable = () => {
  const headerIconStyles = css`
    ${tw`text-gray-800 h-4 w-auto fill-current mx-auto transition`}
  `
  const featureStyles = css`
    ${tw`text-gray-600 text-sm text-left`}
  `
  const tableStyles = css`
    ${tw`w-full mb-10`}
    thead {
      ${tw`border-b-2 border-teal-600`}
    }
    th {
      ${tw`border-r border-gray-200 last-of-type:border-r-0`}
    }
    td {
      ${tw`border-r border-gray-200 last-of-type:border-r-0 py-1.5 px-2`}
    }
    tr {
      ${tw`border-b border-gray-200 last-of-type:border-b-0`}
    }
  `
  // styles for table sections
  const generalStyles = css`
    ${tw`font-semibold bg-teal-300 text-gray-800 text-sm text-left`}
  `
  const generalSeparatorStyles = css`
    ${tw`bg-teal-100`}
  `
  const eliminateStyles = css`
    ${tw`font-semibold bg-red-300 text-gray-800 text-sm text-left`}
  `
  const eliminateSeparatorStyles = css`
    ${tw`bg-red-100`}
  `
  const fillStyles = css`
    ${tw`font-semibold bg-blue-300 text-gray-800 text-sm text-left`}
  `
  const fillSeparatorStyles = css`
    ${tw`bg-blue-100`}
  `
  const membraneStyles = css`
    ${tw`font-semibold bg-green-300 text-gray-800 text-sm text-left`}
  `
  const membraneSeparatorStyles = css`
    ${tw`bg-green-100`}
  `
  const poreStyles = css`
    ${tw`font-semibold bg-yellow-300 text-gray-800 text-sm text-left`}
  `
  const poreSeparatorStyles = css`
    ${tw`bg-yellow-100`}
  `
  const TableLink = props => {
    return (
      <div tw="w-full h-32 cursor-pointer">
        <div tw="w-full h-full flex flex-col items-center justify-evenly px-2 transition">
          {props.children}
          <span tw="text-xs font-light text-blue-600">{props.tag}</span>
          <Link
            to={props.to}
            tw="bg-blue-700 mx-auto text-blue-50 hover:text-teal-50 text-xs font-light hover:bg-teal-500 text-center py-1.5 px-2.5 rounded-md transition"
          >
            See More
          </Link>
        </div>
      </div>
    )
  }
  const Check = () => {
    return <CheckIcon tw="h-4 w-4 text-green-400 fill-current mx-auto" />
  }
  return (
    <table css={tableStyles}>
      <thead>
        <tr>
          <th tw="text-left align-bottom p-2 font-semibold text-base text-gray-800">
            Features & Specifications
          </th>
          <th>
            <TableLink tag="Standard For Most Samples" to="/fv/standard/">
              <StdIcon css={headerIconStyles} />
            </TableLink>
          </th>
          <th>
            <TableLink tag="Multi-Layered Filtration" to="/fv/extreme/">
              <ExtremeIcon css={headerIconStyles} />
            </TableLink>
          </th>
          <th>
            <TableLink tag="Multi-Mode Filtration" to="/fv/extractor/">
              <ExtractorIcon css={headerIconStyles} />
            </TableLink>
          </th>
          <th>
            <TableLink tag="10&mu;L Minimum Volume" to="/fv/nano/">
              <NanoIcon css={headerIconStyles} />
            </TableLink>
          </th>
          <th>
            <TableLink tag="Minimize Evaporative Loss" to="/fv/lowevap/">
              <LowEvapIcon css={headerIconStyles} />
            </TableLink>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td css={generalStyles}>Basic Features</td>
          <td css={generalStyles} colSpan="5"></td>
        </tr>
        <tr css={generalSeparatorStyles}>
          <td css={featureStyles}>Simple to use</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={generalSeparatorStyles}>
          <td css={featureStyles}>Clear up lab space</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={generalSeparatorStyles}>
          <td css={featureStyles}>Eco-Friendly solution</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={generalSeparatorStyles}>
          <td css={featureStyles}>Easy to hand press</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={generalSeparatorStyles}>
          <td css={featureStyles}>Toggle Press compatible</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={generalSeparatorStyles}>
          <td css={featureStyles}>48 Position press compatible</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={generalSeparatorStyles}>
          <td css={featureStyles}>Extends column life</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={generalSeparatorStyles}>
          <td css={featureStyles}>Reduces injector clogs</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={generalSeparatorStyles}>
          <td css={featureStyles}>Reduces Repairs & Service</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={generalSeparatorStyles}>
          <td css={featureStyles}>Color coded caps</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr>
          <td css={membraneStyles}>Membranes Available</td>
          <td css={membraneStyles} colSpan="5"></td>
        </tr>
        <tr css={membraneSeparatorStyles}>
          <td css={featureStyles}>PVDF</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={membraneSeparatorStyles}>
          <td css={featureStyles}>PTFE</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={membraneSeparatorStyles}>
          <td css={featureStyles}>Nylon</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={membraneSeparatorStyles}>
          <td css={featureStyles}>PES</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr>
          <td css={poreStyles}>Pore Sizes Available</td>
          <td css={poreStyles} colSpan="5"></td>
        </tr>
        <tr css={poreSeparatorStyles}>
          <td css={featureStyles}>0.2&mu;m</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={poreSeparatorStyles}>
          <td css={featureStyles}>.45&mu;m</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr>
          <td css={eliminateStyles}>Eliminates Need For</td>
          <td css={eliminateStyles} colSpan="5"></td>
        </tr>
        <tr css={eliminateSeparatorStyles}>
          <td css={featureStyles}>Syringe Filter</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={eliminateSeparatorStyles}>
          <td css={featureStyles}>Syringe</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={eliminateSeparatorStyles}>
          <td css={featureStyles}>Hplc Vial</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={eliminateSeparatorStyles}>
          <td css={featureStyles}>HPLC Cap</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={eliminateSeparatorStyles}>
          <td css={featureStyles}>Spin Filters</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Check />
          </td>
          <td></td>
        </tr>
        <tr css={eliminateSeparatorStyles}>
          <td css={featureStyles}>High Recovery Vials</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Check />
          </td>
          <td></td>
        </tr>
        <tr css={eliminateSeparatorStyles}>
          <td css={featureStyles}>HPLC Inserts</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Check />
          </td>
          <td></td>
        </tr>
        <tr>
          <td css={fillStyles}>Fill & Dead Volume</td>
          <td css={fillStyles} colSpan="5"></td>
        </tr>
        <tr css={fillSeparatorStyles}>
          <td css={featureStyles}>Fill: 450&mu;L / Dead:120&mu;L</td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
          <td></td>
          <td></td>
          <td>
            <Check />
          </td>
        </tr>
        <tr css={fillSeparatorStyles}>
          <td css={featureStyles}>Fill: 630&mu;L / Dead:420&mu;L</td>
          <td></td>
          <td></td>
          <td>
            <Check />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr css={fillSeparatorStyles}>
          <td css={featureStyles}>Fill: 250&mu;L / Dead:10&mu;L</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Check />
          </td>
          <td></td>
        </tr>
        <tr>
          <td css={featureStyles}>Pre Filtration</td>
          <td></td>
          <td>
            <Check />
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td css={featureStyles}>Particulate-Laden Samples</td>
          <td></td>
          <td>
            <Check />
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td css={featureStyles}>Solids or Large Particulates</td>
          <td></td>
          <td></td>
          <td>
            <Check />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td css={featureStyles}>High solid/liquid ratio</td>
          <td></td>
          <td></td>
          <td>
            <Check />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td css={featureStyles}>Minimize Matrix Effects & Ion Suppression</td>
          <td></td>
          <td></td>
          <td>
            <Check />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td css={featureStyles}>Allows for QuEChERS</td>
          <td></td>
          <td></td>
          <td>
            <Check />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td css={featureStyles}>Available with pre-slit or non-slit caps</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Check />
          </td>
          <td></td>
        </tr>
        <tr>
          <td css={featureStyles}>10µL sample for 2μL injection</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Check />
          </td>
          <td></td>
        </tr>
        <tr>
          <td css={featureStyles}>
            evaporation rate: &lt;0.4% / 24hrs
            <span tw="ml-1 text-xs text-teal-500">*</span>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Check />
          </td>
          <td>
            <Check />
          </td>
        </tr>
        <tr>
          <td></td>
          <td tw="p-0!">
            <TableLink tag="Standard For Most Samples" to="/fv/standard/">
              <StdIcon css={headerIconStyles} />
            </TableLink>
          </td>
          <td tw="p-0!">
            <TableLink tag="Multi-Layered Filtration" to="/fv/extreme/">
              <ExtremeIcon css={headerIconStyles} />
            </TableLink>
          </td>
          <td tw="p-0!">
            <TableLink tag="Multi-Mode Filtration" to="/fv/extractor/">
              <ExtractorIcon css={headerIconStyles} />
            </TableLink>
          </td>
          <td tw="p-0!">
            <TableLink tag="10μL Minimum Volume" to="/fv/nano/">
              <NanoIcon css={headerIconStyles} />
            </TableLink>
          </td>
          <td tw="p-0!">
            <TableLink tag="Minimize Evaporative Loss" to="/fv/lowevap/">
              <LowEvapIcon css={headerIconStyles} />
            </TableLink>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default FVComparisonsTable
