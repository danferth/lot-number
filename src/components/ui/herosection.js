import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "twin.macro"
import { PageButton } from "../el/button"
import { H1, P } from "../el/typography"
const HeroSection = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          company {
            company
          }
        }
      }
    }
  `)

  return (
    <div className="content relative bg-white border-b overflow-hidden z-10">
      <div className="max-w-screen-xl mx-auto ">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <H1 tw="mt-0! sm:mt-0!">
                Solutions &nbsp;
                <br className="xl:hidden" />
                <span className="text-blue-600">At Work&trade;</span>
              </H1>
              <P hero tw="sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                The mission of {data.site.siteMetadata.company.company}{" "}
                Instrument Company is to partner with our customers, provide
                technical expertise and deliver practical scientific
                innovations. Made in the USA.
              </P>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <PageButton hero dark to="/cellculture">
                  Cell Culture Solutions
                </PageButton>
                <PageButton
                  hero
                  light
                  className="mt-3 sm:mt-0 sm:ml-3"
                  to="/analytical"
                >
                  Analytical Solutions
                </PageButton>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-white lg:bg-blue-100">
        <StaticImage
          alt={data.site.siteMetadata.company.company}
          src="../../images/page/layout/header/squareshorizontal.png"
          placeholder="blurred"
          layout="fullWidth"
          className="animateHeaderImage"
          tw="lg:static!"
          imagestyle="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full"
        />
      </div>
    </div>
  )
}

export default HeroSection
