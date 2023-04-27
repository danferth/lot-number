import React from "react"
import tw, { css } from "twin.macro"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { H4, P } from "../el/typography"
import MailIcon from "../../images/svg/icons/mail.svg"
import MarkIcon from "../../images/svg/icons/mark.svg"

const SalesBios = () => {
  const data = useStaticQuery(graphql`
    {
      mark: file(relativePath: { eq: "page/marketing/mark.jpg" }) {
        name
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      matt: file(relativePath: { eq: "page/marketing/matt.jpg" }) {
        name
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      jessica: file(relativePath: { eq: "page/marketing/jessica.jpg" }) {
        name
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      christian: file(relativePath: { eq: "page/marketing/christian.jpg" }) {
        name
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  `)

  return (
    <div tw="bg-white">
      <ul tw="space-y-12 lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
        <SalesBio
          alt={data.mark.name}
          name="Mark Rehse, MSc."
          title="National Sales Manager"
          email="mark.rehse@htslabs.com"
          gatsbyImageData={data.mark.childImageSharp.gatsbyImageData}
        ></SalesBio>
        <SalesBio
          alt={data.jessica.name}
          name="Jessica Oates, Ph.D"
          title="Technical Sales Manager"
          email="jessica.oates@htslabs.com"
          territory="MidAtlantic, Tri-State"
          gatsbyImageData={data.jessica.childImageSharp.gatsbyImageData}
        ></SalesBio>
        <SalesBio
          alt={data.matt.name}
          name="Matt Obusek"
          title="Technical Sales Manager"
          email="matt.obusek@htslabs.com"
          territory="MidWest, South, SouthEast"
          gatsbyImageData={data.matt.childImageSharp.gatsbyImageData}
        ></SalesBio>
        <SalesBio
          alt={data.christian.name}
          name="Christian Lux"
          title="Technical Sales Representative"
          email="christian.lux@htslabs.com"
          territory="San Diego, SouthWest"
          gatsbyImageData={data.christian.childImageSharp.gatsbyImageData}
        ></SalesBio>

        {/* <!-- More people... --> */}
      </ul>
    </div>
  )
}

const SalesBio = props => {
  const salesBioImgStyle = css`
    ${tw`rounded-lg overflow-hidden shadow-sm`}
    img {
      ${tw`rounded-lg`}
    }
  `
  return (
    <li>
      <div tw="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4">
        <GatsbyImage
          alt={props.alt}
          image={props.gatsbyImageData}
          className="col-span-1 rounded-lg shadow-md w-full"
          objectFit="cover"
          css={[salesBioImgStyle]}
        />
        <div tw="col-span-1 lg:col-span-2">
          <div tw="flex flex-col lg:justify-between pt-4 pb-3 h-full">
            <div tw="text-lg leading-6 font-medium">
              <H4 tw="mt-0!">{props.name}</H4>
              <P tw="text-gray-600 mt-1!">{props.title}</P>
            </div>
            <div tw="mt-8 md:mt-0">
              {props.territory && (
                <p tw="text-sm text-gray-600">
                  <MarkIcon tw="h-4 w-4 text-green-500 mr-1.5 inline-block align-middle" />
                  {props.territory}
                </p>
              )}
              <a
                className="group"
                tw="text-sm text-blue-600 hover:underline hover:text-blue-700"
                href={`mailto:${props.email}`}
              >
                <MailIcon tw="mr-1.5 inline-block align-middle h-4 w-4 text-blue-500 group-hover:text-blue-600 stroke-current" />
                Contact {props.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SalesBios
