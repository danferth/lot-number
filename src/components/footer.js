import React from "react"
import "twin.macro"
import { Link, useStaticQuery, graphql } from "gatsby"
import LinkedIn from "../images/svg/brands/linkedin.svg"
const Footer = () => {
  const d = new Date()
  const year = d.getFullYear()
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          company {
            company
            tag
          }
        }
      }
    }
  `)
  return (
    <footer tw="bg-white border-t print:hidden">
      <div tw="max-w-screen-xl mx-auto pt-8 pb-12 px-4 overflow-hidden sm:px-6 lg:px-8 xl:px-16">
        <div tw="flex justify-center flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <nav tw="-mx-5 -my-2 flex justify-center md:justify-start flex-wrap">
              <FootLink to="/form/login">Login</FootLink>
              <FootLink to="/about">
                Already Loged in? Go to the Dashboard
              </FootLink>
            </nav>

            <div tw="mt-7 flex items-center justify-center md:justify-start flex-col md:flex-row md:space-x-4">
              <p tw="text-left text-xs leading-normal text-gray-500">
                &copy; {year} {data.site.siteMetadata.company.company}{" "}
                <span tw="hidden md:inline">|</span>
                <br tw="md:hidden" /> {data.site.siteMetadata.company.tag}
              </p>
              <a
                href="https://www.linkedin.com/in/danferth/"
                tw="text-blue-500 hover:text-blue-700 mt-4 md:mt-0"
              >
                <span tw="sr-only">LinkedIn</span>
                <LinkedIn tw="w-7 h-7 md:h-4 md:w-4"></LinkedIn>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FootLink = props => {
  return (
    <div className="px-3 md:px-4 lg:px-3.5 xl:px-5 pb-1 md:py-2">
      <Link
        to={props.to}
        tw="text-sm leading-6 text-gray-500 hover:text-blue-600"
      >
        {props.children}
      </Link>
    </div>
  )
}

export default Footer
