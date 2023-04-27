import React, { useEffect, useRef, useContext } from "react"
import { StateContext } from "./provider"
import Transition from "../transition"
import tw, { css } from "twin.macro"
import { connectStateResults, Index } from "react-instantsearch-dom"
import CustomProductHits from "../el/searchhitproduct"
import CustomResourceHits from "../el/searchhitresources"
import { CustomStats, H2 } from "../el/searchelements"

// wrapper for hits
const ResultsWrapper = ({ searchState }) => {
  const { stateSearch } = useContext(StateContext)
  const [searchOpen, setSearchOpen] = stateSearch
  const node = useRef()
  const wrapperStyle = css`
    ${tw`absolute -left-1/4 sm:left-0 lg:left-auto xl:-right-1/4 lg:right-0 mt-6 px-2 w-screen max-w-lg sm:px-0`}
  `
  const customStyle = css`
    ${tw`rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden overflow-y-scroll`}
    max-height: 75vh;
  `
  useEffect(() => {
    const isQuery =
      searchState.query === undefined || searchState.query === "" ? false : true
    setSearchOpen(isQuery)
  }, [searchState, setSearchOpen])

  useEffect(() => {
    const handleClickOutside = e => {
      if (node.current.contains(e.target)) {
        return
      }
      setSearchOpen(!searchOpen)
    }
    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [searchOpen, setSearchOpen])

  return (
    <Transition
      show={searchOpen}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <div ref={node} css={[wrapperStyle]}>
        <div tw="bg-white rounded-lg shadow-lg">
          <div css={[customStyle]}>
            <div tw="z-20 relative px-4 pb-5">
              {/* Hits go here */}
              <Index indexName="dev_PRODUCTS">
                <H2 text="Products">
                  {" "}
                  <CustomStats />
                </H2>
                <CustomProductHits />
              </Index>
              <Index indexName="dev_RESOURCES_2021">
                <H2 className="margin-top:1rem;" text="Technical Resources">
                  <CustomStats />
                </H2>
                <CustomResourceHits />
              </Index>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

//sylted components

const CustomResults = connectStateResults(ResultsWrapper)

export default CustomResults
