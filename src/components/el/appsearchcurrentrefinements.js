import React, { useState, useContext, useEffect } from "react"
import { StateContext } from "./provider"
import tw, { css } from "twin.macro"
import { connectCurrentRefinements } from "react-instantsearch-dom"
import Xicon from "../../images/svg/icons/x.svg"
const CurrentRefinements = ({ items, refine, createURL }) => {
  const { stateSort, stateCategory } = useContext(StateContext)
  const [sort, setSort] = stateSort // eslint-disable-line no-unused-vars
  const [category, setCategory] = stateCategory // eslint-disable-line no-unused-vars
  const [loaded, setLoaded] = useState(false)

  // setting sort and category
  const setRefinements = itemsArray => {
    if (loaded) {
      if (itemsArray.length === 0) {
        setCategory([])
        setSort("")
      }
      if (itemsArray.length === 1) {
        if (itemsArray[0].attribute === "category") {
          setCategory(itemsArray[0].currentRefinement)
          setSort("")
        }
        if (itemsArray[0].attribute === "categories.lvl0") {
          setSort(itemsArray[0].currentRefinement)
          setCategory([])
        }
      }
      if (itemsArray.length === 2) {
        itemsArray.map(
          item =>
            (item.attribute === "category" &&
              setCategory(item.currentRefinement)) ||
            (item.attribute === "categories.lvl0" &&
              setSort(item.currentRefinement))
        )
      }
    }
  }
  useEffect(() => {
    setLoaded(true)
    setRefinements(items)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  const Xcircle = () => {
    return (
      <span tw="ml-2.5 bg-blue-50 text-blue-500 flex items-center justify-center w-3.5 h-3.5 rounded-full group-hover:bg-blue-100 transition">
        <Xicon tw="w-2.5 h-2.5" />
      </span>
    )
  }
  const NestedLabel = props => {
    return (
      <span tw="text-xs text-blue-600 group-hover:text-blue-700 transition">
        {props.children}
      </span>
    )
  }
  const itemStyles = css`
    ${tw`flex items-center justify-start bg-blue-200 px-1.5 py-1 mb-1 sm:mr-2 rounded hover:bg-blue-300 transition`}
  `
  return (
    items.length > 0 && (
      <div tw="flex flex-col sm:flex-row sm:flex-wrap items-start justify-start mb-3">
        {items.map(item =>
          item.items ? (
            item.items.map(item => (
              <a
                key={item.label}
                className="group"
                css={itemStyles}
                href={createURL(item.value)}
                onClick={event => {
                  event.preventDefault()
                  refine(item.value)
                }}
              >
                <NestedLabel>{item.label}</NestedLabel>
                <Xcircle />
              </a>
            ))
          ) : (
            <a
              key={item.label}
              className="group"
              css={itemStyles}
              href={createURL(item.value)}
              onClick={event => {
                event.preventDefault()
                refine(item.value)
              }}
            >
              <NestedLabel>{item.currentRefinement}</NestedLabel>
              <Xcircle />
            </a>
          )
        )}
      </div>
    )
  )
}

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements)
export default CustomCurrentRefinements
