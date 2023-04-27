import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import tw, { css } from "twin.macro"
import { GatsbyImage } from "gatsby-plugin-image"
import { H4 } from "../el/appnotetypography"
const ProductBlock = props => {
  const images = useStaticQuery(graphql`
    query imagequery {
      allFile(filter: { absolutePath: { regex: "/products/*/" } }) {
        edges {
          node {
            name
            ext
            childImageSharp {
              gatsbyImageData(
                width: 400
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `)
  const products = props.productQuery
  const related = props.related
  const product = props.pn
  const usedIn =
    props.type === "appnote"
      ? "in Application"
      : props.type === "video"
      ? "in Video"
      : ""
  //build array of products
  const mapProducts = (array, items) => {
    const rslt = []
    items.map(item => {
      return rslt.push(
        array.nodes.find(node => node.partNumber[0].num === item)
      )
    })
    return rslt
  }
  const prodProducts =
    product.length > 0 ? mapProducts(products, product) : false
  const prodRelated = mapProducts(products, related)
  // ProductLink Component
  const ProductLink = props => {
    const imgStyle = css`
      ${tw`w-12 h-12 rounded-md overflow-hidden mr-2 flex-shrink-0`}
      img {
        ${tw`rounded-md`}
      }
    `
    return (
      <Link
        className="group"
        tw="flex items-center py-0.5 px-1 rounded-md border border-blue-200 hover:border-blue-400 bg-white hover:bg-gray-50 transition"
        to={props.slug}
      >
        <GatsbyImage
          alt={props.alt}
          image={props.gatsbyImageData}
          css={[imgStyle]}
        />
        <div tw="w-3/4 overflow-hidden">
          <h3 tw="text-xs font-semibold truncate text-gray-800">
            {props.title}
          </h3>
          <p tw="text-xs font-light truncate text-gray-600">
            {props.description}
          </p>
          <p tw="text-xs font-light text-gray-400 italic">
            <span tw="mr-1.5">pn#</span>
            {props.pn}
          </p>
        </div>
      </Link>
    )
  }

  return (
    <div tw="bg-white rounded-sm shadow-md mt-8 lg:mt-0 lg:mb-8">
      <div css={[tw`shadow-sm h-full rounded-sm pb-6 pt-6`]}>
        <div tw="px-4 h-full">
          <div css={[tw`py-2 h-full`]}>
            {product.length > 0 && (
              <>
                <H4>
                  Product{product.length > 1 && `s`} Used {usedIn}
                </H4>
                <div tw="mb-4 space-y-1.5">
                  {prodProducts &&
                    prodProducts.map(item => {
                      const prodImage = images.allFile.edges.find(
                        element =>
                          element.node.name + element.node.ext === item.image
                      )
                      return (
                        <ProductLink
                          alt={item.title}
                          key={item.id}
                          slug={item.slug}
                          title={item.title}
                          gatsbyImageData={
                            prodImage.node.childImageSharp.gatsbyImageData
                          }
                          description={item.desc_main}
                          pn={item.partNumber[0].num}
                        />
                      )
                    })}
                </div>
              </>
            )}
            <H4>Related Products</H4>
            <div tw="space-y-1.5">
              {prodRelated.map(item => {
                const prodImage = images.allFile.edges.find(
                  element => element.node.name + element.node.ext === item.image
                )
                return (
                  <ProductLink
                    alt={item.title}
                    key={item.id}
                    slug={item.slug}
                    title={item.title}
                    gatsbyImageData={
                      prodImage.node.childImageSharp.gatsbyImageData
                    }
                    description={item.desc_main}
                    pn={item.partNumber[0].num}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBlock
