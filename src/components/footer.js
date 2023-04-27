import React, { useContext } from "react"
import "twin.macro"
import { StateContext } from "../components/el/provider"
import { Link, useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import LinkedIn from "../images/svg/brands/linkedin.svg"
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import { useLoaded } from "./useLoaded"
const Footer = () => {
  const loaded = useLoaded()
  const { stateCart, stateBag } = useContext(StateContext)
  const [cart] = stateCart
  const [bag] = stateBag

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
              <FootLink to="/usa">Made in USA</FootLink>
              <FootLink to="/about">About</FootLink>
              <FootLink to="/form/contact">Contact</FootLink>
              <FootLink to="/legal/careers">Careers</FootLink>
              <FootLink to="/legal/legal">Legal</FootLink>
              <FootLink to="/distributors">Distributors</FootLink>
            </nav>

            <div tw="mt-7 flex items-center justify-center md:justify-start flex-col md:flex-row md:space-x-4">
              <p tw="text-left text-xs leading-normal text-gray-500">
                &copy; {year} {data.site.siteMetadata.company.company}{" "}
                <span tw="hidden md:inline">|</span>
                <br tw="md:hidden" /> {data.site.siteMetadata.company.tag}
              </p>
              <a
                href="https://www.linkedin.com/company/thomson-instrument/"
                tw="text-blue-500 hover:text-blue-700 mt-4 md:mt-0"
              >
                <span tw="sr-only">LinkedIn</span>
                <LinkedIn tw="w-7 h-7 md:h-4 md:w-4"></LinkedIn>
              </a>
            </div>
          </div>
          <div tw="order-first md:order-last mb-12 md:mb-0">
            {loaded && bag !== undefined && bag.length > 0 ? (
              <CartBadge cart={cart} bag={bag} />
            ) : (
              ``
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

const CartBadge = props => {
  return (
    <motion.div
      tw="bg-white rounded-md shadow-md border border-teal-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div tw="overflow-hidden rounded-md shadow-sm py-3 px-4">
        <div tw="flex items-center flex-col justify-center md:justify-start md:flex-row md:space-x-6">
          <div tw="text-center md:text-left">
            <h4 tw="text-base md:text-xs mb-0.5 font-semibold text-gray-700">
              Ready to proccess your {props.cart ? `Order` : `Quote`}?
            </h4>
            <p tw="text-sm md:text-xs text-gray-500 leading-tight">
              You have {props.bag.length} item{props.bag.length > 1 ? `s` : ``}{" "}
              in your {props.cart ? `cart` : `bag`}
            </p>
          </div>

          <div>
            <Link
              tw="mt-2 md:mt-0 rounded-md md:rounded-sm inline-flex items-center space-x-2 border border-gray-200 px-2.5 md:px-1.5 py-1.5 md:py-0.5 bg-blue-50 text-gray-500 hover:bg-blue-100 hover:text-gray-600 hover:border-blue-300"
              to={props.cart ? `/form/order` : `/form/quote`}
            >
              <span tw="text-sm md:text-xs font-light">visit</span>
              {props.cart ? (
                <ShoppingCartIcon tw="inline-block w-4 md:w-3 h-4 md:h-3 stroke-current text-blue-500" />
              ) : (
                <ShoppingBagIcon tw="inline-block w-4 md:w-3 h-4 md:h-3 stroke-current text-blue-600" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
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
