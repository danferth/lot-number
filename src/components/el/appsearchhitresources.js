import React from "react"
import tw, { css } from "twin.macro"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { connectHits, Snippet } from "react-instantsearch-dom"
import { Ep } from "./appsearchelements"
import { TypeText, PartsUsed } from "./appsearchhitresourcepills"
// resources hit component
const AppResourceHits = ({ hits }) => {
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
    ${tw`rounded overflow-hidden w-24 flex-shrink-0 mt-1.5 mr-2.5`}
    height:54px;
  `
  return hits.length === 0 ? (
    <Ep>
      Your selection yields no results. Try adjusting the sorting filters.
    </Ep>
  ) : (
    <div tw="grid grid-cols-1 md:grid-cols-2 gap-4">
      {hits.map(hit => {
        const prodImage =
          hit.thumbnail !== ""
            ? data.allFile.edges.find(
                element =>
                  element.node.name + element.node.ext === hit.thumbnail
              )
            : false
        return (
          <Link
            key={hit.objectID}
            to={hit.slug}
            tw="block rounded shadow-sm col-span-1"
          >
            <div tw="pt-2 flex flex-col flex-nowrap items-start justify-between h-full rounded overflow-hidden shadow bg-white">
              <div tw="flex items-start mb-2 px-4">
                {/* thumbnail */}
                {hit.thumbnail !== "" && prodImage && (
                  <div css={thumbStyle}>
                    <GatsbyImage
                      alt={prodImage.node.name}
                      image={prodImage.node.childImageSharp.gatsbyImageData}
                      className="w-full h-full"
                    />
                  </div>
                )}
                {/* title and description */}
                <div>
                  <h3 tw="font-medium text-xs text-gray-800 mb-1.5">
                    <Snippet hit={hit} attribute="title" tagName="mark" />
                  </h3>
                  <p tw="text-xs font-extralight text-gray-700">
                    <Snippet hit={hit} attribute="description" tagName="mark" />
                  </p>
                </div>
              </div>
              <div tw="px-4 mb-2 border-t border-gray-200 pt-1.5 w-full flex flex-col xl:flex-row items-start xl:items-center justify-start space-y-1 xl:space-y-0 xl:space-x-2">
                <TypeText category={hit.category} type={hit.type} />
                {hit.product.length > 0 && (
                  <>
                    <span tw="hidden xl:inline text-gray-300 font-thin">|</span>
                    <PartsUsed
                      product={hit.productLine}
                      partslength={hit.product.length}
                    >
                      {hit.product.join(", ")}
                    </PartsUsed>
                  </>
                )}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

const AppCustomResourceHits = connectHits(AppResourceHits)
export default AppCustomResourceHits
