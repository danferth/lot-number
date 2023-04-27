import React from "react"
import tw from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import AppIcon from "../../images/svg/icons/beaker.svg"
import VideoIcon from "../../images/svg/icons/film.svg"
import PresentationIcon from "../../images/svg/icons/presentation.svg"
import PosterIcon from "../../images/svg/icons/poster.svg"
import CatalogIcon from "../../images/svg/icons/catalog.svg"
import GeneralIcon from "../../images/svg/icons/general.svg"
import JournalIcon from "../../images/svg/icons/journal.svg"
import HashIcon from "../../images/svg/icons/hash.svg"
const Pill = props => {
  return (
    <span
      css={[
        tw`inline-flex flex-row items-center justify-start h-full px-2.5 py-0.5 text-xs font-medium leading-4`,
        props.color,
      ]}
    >
      {props.children}
    </span>
  )
}

const PartsUsed = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          brand {
            uyf
            singlestep
            og
          }
        }
      }
    }
  `)
  const product =
    props.product === "FV"
      ? `Filter Vial`
      : props.product === "OG"
      ? `${data.site.siteMetadata.brand.og}`
      : props.product === "UYF"
      ? `${data.site.siteMetadata.brand.uyf}`
      : props.product === "wellplate"
      ? `Plate`
      : props.product === "columns"
      ? `${data.site.siteMetadata.brand.singlestep}`
      : `Product`
  const color =
    props.product === "FV"
      ? tw`text-teal-600`
      : props.product === "OG"
      ? tw`text-purple-600`
      : props.product === "UYF"
      ? tw`text-indigo-600`
      : props.product === "wellplate"
      ? tw`text-pink-600`
      : props.product === "columns"
      ? tw`text-blue-600`
      : tw`text-gray-600`
  return (
    <span
      css={[
        tw`inline-flex flex-row items-center justify-start h-full text-xs font-medium leading-4`,
        color,
      ]}
    >
      <span>{product}</span>
      <HashIcon tw="ml-1 mr-0 w-3 h-3 text-gray-400" />
      <span tw="text-gray-700 font-extralight italic">{props.children}</span>
    </span>
  )
}

const TypeText = props => {
  const color =
    props.type === "APPNOTE"
      ? tw`text-green-600`
      : props.type === "PW"
      ? tw`text-blue-600`
      : props.type === "GI"
      ? tw`text-gray-600`
      : props.type === "VIDEO"
      ? tw`text-pink-600`
      : props.type === "CAT"
      ? tw`text-yellow-600`
      : tw`text-gray-600`
  return (
    <span
      css={[
        tw`inline-flex flex-row items-center justify-start h-full text-xs font-medium leading-4`,
        color,
      ]}
    >
      {props.category[0] === "Application Note" ? (
        <AppIcon tw="mr-1.5 w-3 h-3 text-green-600" />
      ) : props.category[0] === "Trade Show Poster" ? (
        <PosterIcon tw="mr-1.5 w-3 h-3 text-blue-600" />
      ) : props.category[0] === "Trade Show Presentation" ? (
        <PresentationIcon tw="mr-1.5 w-3 h-3 text-blue-600" />
      ) : props.category[0] === "Video" ? (
        <VideoIcon tw="mr-1.5 w-3 h-3 text-pink-600" />
      ) : props.category[0] === "Product Catalog" ? (
        <CatalogIcon tw="mr-1.5 w-3 h-3 text-yellow-600" />
      ) : props.category[0] === "Journal Article" ? (
        <JournalIcon tw="mr-1.5 w-3 h-3 text-blue-600" />
      ) : props.category[0] === "General Information" ? (
        <GeneralIcon tw="mr-1.5 w-3 h-3 text-gray-600" />
      ) : (
        <GeneralIcon tw="mr-1.5 w-3 h-3 text-gray-600" />
      )}
      <span tw="text-gray-500">{props.category}</span>
    </span>
  )
}

const TypePill = props => {
  const color =
    props.type === "APPNOTE"
      ? tw` bg-green-100 text-green-800`
      : props.type === "PW"
      ? tw` bg-blue-100 text-blue-800`
      : props.type === "GI"
      ? tw` bg-gray-200 text-gray-800`
      : props.type === "VIDEO"
      ? tw` bg-pink-100 text-pink-800`
      : props.type === "CAT"
      ? tw` bg-yellow-300 text-yellow-800`
      : tw` bg-gray-100 text-gray-800`
  return (
    <Pill color={color}>
      {props.category[0] === "Application Note" ? (
        <AppIcon tw="mr-1.5 w-3 h-3 text-green-800" />
      ) : props.category[0] === "Trade Show Poster" ? (
        <PosterIcon tw="mr-1.5 w-3 h-3 text-blue-800" />
      ) : props.category[0] === "Trade Show Presentation" ? (
        <PresentationIcon tw="mr-1.5 w-3 h-3 text-blue-800" />
      ) : props.category[0] === "Video" ? (
        <VideoIcon tw="mr-1.5 w-3 h-3 text-pink-800" />
      ) : props.category[0] === "Product Catalog" ? (
        <CatalogIcon tw="mr-1.5 w-3 h-3 text-yellow-800" />
      ) : props.category[0] === "Journal Article" ? (
        <JournalIcon tw="mr-1.5 w-3 h-3 text-blue-800" />
      ) : props.category[0] === "General Information" ? (
        <GeneralIcon tw="mr-1.5 w-3 h-3 text-gray-800" />
      ) : (
        <GeneralIcon tw="mr-1.5 w-3 h-3 text-gray-800" />
      )}
      <span>{props.category}</span>
    </Pill>
  )
}

export { TypePill, TypeText, PartsUsed }
