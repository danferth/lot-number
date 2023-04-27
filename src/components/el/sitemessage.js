import React, { useContext } from "react"
import { StateContext } from "./provider"
import "twin.macro"
import { motion, AnimatePresence } from "framer-motion"
import Xicon from "../../images/svg/icons/x.svg"
import { useLoaded } from "../useLoaded"
const SiteMessage = () => {
  const loaded = useLoaded()
  const { stateMessage } = useContext(StateContext)
  const [siteMessage, setSiteMessage] = stateMessage
  return (
    <AnimatePresence>
      {loaded && siteMessage && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ opacity: 0 }}
          className="bg-teal-600"
        >
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-full bg-white shadow">
                  <svg
                    className="h-6 w-6 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </span>
                <p className="ml-3.5 font-light text-teal-50">
                  <span className="md:hidden">
                    Welcome to Thomson's NEW website!
                  </span>
                  <span className="hidden md:inline">
                    <span className="font-medium text-white block xl:inline xl:mr-4 xl:border-r xl:pr-4 xl:border-teal-300">
                      Welcome to Thomson's NEW website!
                    </span>
                    Visit a product page to request a sample, start a quote, or
                    place an order.
                  </span>
                </p>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  onClick={() => setSiteMessage(false)}
                  className="-mr-1 flex p-2 rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                >
                  <span className="sr-only">Dismiss</span>
                  <Xicon className="h-6 w-6 text-teal-300" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SiteMessage
