import React from "react"
import tw, { css } from "twin.macro"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { connectHits, Snippet } from "react-instantsearch-dom"
import { Ep } from "../el/searchelements"
import { ResourcePill, TypePill, ProductPill } from "./searchhitresourcepills"
// resources hit component
const ResourceHits = ({ hits }) => {
  //get thumbnail through graphql
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { absolutePath: { regex: "/thumbnails/" }, ext: { eq: ".jpg" } }
      ) {
        edges {
          node {
            name
            ext
            childImageSharp {
              gatsbyImageData(
                width: 240
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `)
  //thumbnail styles
  const thumbStyle = css`
    ${tw`rounded overflow-hidden w-24 flex-shrink-0 bg-pink-200 mt-1.5 mr-2.5`}
    height:54px;
  `
  return hits.length === 0 ? (
    <Ep>Your search yields no results, try searching something else.</Ep>
  ) : (
    hits.map(hit => {
      const prodImage =
        hit.thumbnail !== ""
          ? data.allFile.edges.find(
              element => element.node.name + element.node.ext === hit.thumbnail
            )
          : false
      return (
        <Link
          key={hit.objectID}
          to={hit.slug}
          tw="border-b border-gray-200 px-2 py-3 block"
        >
          <div tw="flex items-start">
            {hit.thumbnail !== "" && prodImage && (
              <div css={thumbStyle}>
                <GatsbyImage
                  alt={prodImage.node.name}
                  image={prodImage.node.childImageSharp.gatsbyImageData}
                  className="w-full h-full"
                />
              </div>
            )}
            <div>
              <h3 tw="font-medium text-sm text-gray-800">
                <Snippet hit={hit} attribute="title" tagName="mark" />
              </h3>
              <p tw="text-xs font-light text-gray-700">
                <Snippet hit={hit} attribute="description" tagName="mark" />
              </p>
            </div>
          </div>
          <div tw="mt-1.5 pt-0.5 space-x-3">
            <TypePill type={hit.type} />
            <ProductPill product={hit.productLine} />
            {hit.type === "PW" ||
              (hit.type === "GI" && <ResourcePill text={hit.linkType} />)}
          </div>
        </Link>
      )
    })
  )
}

const CustomResourceHits = connectHits(ResourceHits)
export default CustomResourceHits
