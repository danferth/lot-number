import React from "react"
import tw from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

const Pill = props => {
  return (
    <span
      css={[
        tw`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4`,
        props.color,
      ]}
    >
      {props.children}
    </span>
  )
}

const ResourcePill = props => {
  const pill =
    props.text === "pdf"
      ? `PDF`
      : props.text === "mp4"
      ? `Video`
      : props.text === "page"
      ? `Web Page`
      : `Application Note`
  const color =
    props.text === "pdf"
      ? tw` bg-red-100 text-red-800`
      : props.text === "mp4"
      ? tw` bg-green-100 text-green-800`
      : props.text === "page"
      ? tw` bg-blue-100 text-blue-800`
      : tw` bg-gray-100 text-gray-800`
  return <Pill color={color}>{pill}</Pill>
}

const TypePill = props => {
  const pill =
    props.type === "APPNOTE"
      ? `Application Note`
      : props.type === "PW"
      ? `Published Work`
      : props.type === "GI"
      ? `General Information`
      : props.type === "VIDEO"
      ? `Video`
      : props.type === "CAT"
      ? `Catalog`
      : `General`
  const color =
    props.type === "APPNOTE"
      ? tw` bg-green-100 text-green-800`
      : props.type === "PW"
      ? tw` bg-blue-100 text-blue-800`
      : props.type === "GI"
      ? tw` bg-gray-100 text-gray-800`
      : props.type === "VIDEO"
      ? tw` bg-pink-100 text-pink-800`
      : props.type === "CAT"
      ? tw` bg-yellow-300 text-yellow-800`
      : tw` bg-gray-100 text-gray-800`
  return <Pill color={color}>{pill}</Pill>
}

const ProductPill = props => {
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
  const pill =
    props.product === "FV"
      ? `Filter Vials`
      : props.product === "OG"
      ? `${data.site.siteMetadata.brand.og}`
      : props.product === "UYF"
      ? `${data.site.siteMetadata.brand.uyf}`
      : props.product === "wellplate"
      ? `Well Plates`
      : props.product === "columns"
      ? `${data.site.siteMetadata.brand.singlestep}`
      : `Product`
  const color =
    props.product === "FV"
      ? tw` bg-teal-100 text-teal-800`
      : props.product === "OG"
      ? tw` bg-purple-100 text-purple-800`
      : props.product === "UYF"
      ? tw` bg-indigo-100 text-indigo-800`
      : props.product === "wellplate"
      ? tw` bg-pink-100 text-pink-800`
      : props.product === "columns"
      ? tw` bg-blue-100 text-blue-800`
      : tw` bg-gray-100 text-gray-800`
  return <Pill color={color}>{pill}</Pill>
}

export { ResourcePill, TypePill, ProductPill }
