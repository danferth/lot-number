import React from "react"
import tw, { css } from "twin.macro"
import { connectStats, connectPoweredBy } from "react-instantsearch-dom"
import "twin.macro"
import AlgoliaIcon from "../../images/svg/brands/algolia.svg"

const headerStyles = css`
  ${tw`text-xs flex items-center justify-between mt-6 bg-white rounded-md py-1.5 px-2`}
`

//powered by algolia
const PoweredBy = ({ url }) => (
  <a
    tw="inline-block font-extralight text-gray-600"
    href={url}
    target="_blank"
    rel="noreferrer"
  >
    Powered by <AlgoliaIcon tw="h-3 w-auto inline-block" />
  </a>
)
// stats for hit components
const Stats = ({ processingTimeMS, nbHits }) => (
  <div css={headerStyles}>
    <CustomPoweredBy />
    <span tw="inline-block font-extralight text-gray-400">
      ({nbHits} results in {processingTimeMS}ms)
    </span>
  </div>
)
//p tag for no search results
const Ep = tw.p`text-xs italic text-gray-500 text-center `

const CustomStats = connectStats(Stats)
const CustomPoweredBy = connectPoweredBy(PoweredBy)
export { Ep, CustomStats }
