import React from "react"
import tw from "twin.macro"
import { connectStats, connectPoweredBy } from "react-instantsearch-dom"
import "twin.macro"
import AlgoliaIcon from "../../images/svg/brands/algolia.svg"

//powered by algolia
const PoweredBy = ({ url }) => (
  <a tw="font-extralight" href={url} target="_blank" rel="noreferrer">
    Powered by <AlgoliaIcon tw="h-3 w-auto inline-block ml-0" />
  </a>
)
// stats for hit components
const Stats = ({ processingTimeMS, nbHits }) => (
  <span tw="text-gray-300 text-xs ml-4 inline-flex items-center justify-between flex-grow">
    <span>
      ({nbHits} results in {processingTimeMS}ms)
    </span>
    <span>
      <CustomPoweredBy />
    </span>
  </span>
)
//p tag for no search results
const Ep = tw.p`text-xs italic text-gray-500 text-center `

//heading for search results in hit components (will contains Stats components)
const H2 = props => {
  return (
    <h2
      css={[
        tw`py-1.5 px-4 leading-none mb-1.5 -mx-4 flex items-baseline bg-gray-800`,
        props.className,
      ]}
    >
      <span tw="text-base font-bold text-white inline-flex flex-shrink">
        {props.text}
      </span>
      {props.children}
    </h2>
  )
}

const CustomStats = connectStats(Stats)
const CustomPoweredBy = connectPoweredBy(PoweredBy)
export { Ep, CustomStats, H2 }
