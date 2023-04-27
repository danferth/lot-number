import React from "react"
import tw, { css } from "twin.macro"
import { Link, useStaticQuery, graphql } from "gatsby"
import { connectHits, Highlight } from "react-instantsearch-dom"
import "twin.macro"
import { GatsbyImage } from "gatsby-plugin-image"
import { Ep } from "../el/searchelements"

// product hit component
const ProductHits = ({ hits }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { absolutePath: { regex: "/products/" }, ext: { eq: ".jpg" } }
      ) {
        edges {
          node {
            name
            ext
            childImageSharp {
              gatsbyImageData(
                width: 128
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `)
  const imgStyle = css`
    ${tw`w-full h-full rounded-full overflow-hidden`}
    img {
      ${tw`rounded-full`}
    }
  `
  return hits.length === 0 ? (
    <Ep>Your search yields no results, try searching something else.</Ep>
  ) : (
    hits.map(hit => {
      const prodImage = data.allFile.edges.find(
        element => element.node.name + element.node.ext === hit.image
      )
      return (
        <Link
          key={hit.objectID}
          to={hit.slug}
          tw="flex items-center border-b border-gray-200 px-2 py-1.5"
        >
          <div tw="flex-shrink-0 w-16 h-16 rounded-full shadow-md overflow-hidden mr-2.5">
            {prodImage && (
              <GatsbyImage
                image={prodImage.node.childImageSharp.gatsbyImageData}
                css={[imgStyle]}
              />
            )}
          </div>
          <div tw="">
            <h3 tw="font-medium text-sm text-gray-800 truncate">
              <Highlight hit={hit} attribute="title" tagName="mark" />
            </h3>
            <p tw="text-xs font-light text-gray-700">
              <Highlight hit={hit} attribute="description" tagName="mark" />
            </p>
            <p tw="text-xs font-light text-gray-700">
              <Highlight hit={hit} attribute="descriptionSub" tagName="mark" />
            </p>
            <p tw="text-xs font-light text-gray-500">
              <span tw="font-bold">part #:</span>{" "}
              <Highlight hit={hit} attribute="partNumber" tagName="mark" />
            </p>
          </div>
        </Link>
      )
    })
  )
}

const CustomProductHits = connectHits(ProductHits)
export default CustomProductHits
