import React, { useState, useRef, useEffect } from "react"
import tw from "twin.macro"
import PopNav from "./popnav"
import Transition from "../transition"
import ChevronDown from "../../images/svg/icons/chevron-down.svg"
import CloseIcon from "../../images/svg/icons/x.svg"

const ProductNavButton = () => {
  const [productsOpen, setProductsOpen] = useState(false)

  const node = useRef()
  useEffect(() => {
    const handleClickOutside = e => {
      if (node.current.contains(e.target)) {
        return
      }
      setProductsOpen(!productsOpen)
    }
    if (productsOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [productsOpen])

  return (
    <div ref={node} className="hidden lg:ml-6 lg:flex">
      {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
      <ProductButton
        type="button"
        onClick={() => setProductsOpen(!productsOpen)}
      >
        <span>Products</span>
        {productsOpen ? (
          <CloseIcon className="text-gray-400 h-5 w-5 ml-1group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" />
        ) : (
          <ChevronDown className="text-gray-400 h-5 w-5 ml-1group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" />
        )}
      </ProductButton>

      <Transition
        show={productsOpen}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="absolute mt-20 px-2 w-screen max-w-md sm:px-0 lg:max-w-5xl lg:left-0 xl:left-1/2 xl:transform xl:-translate-x-1/2">
          <div className="rounded-lg shadow-lg">
            <div className="rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                <PopNav></PopNav>
              </div>
              {/* <div className="p-5 bg-gray-50 sm:p-8">
                        <Link
                          to="/fp"
                          className="-m-3 p-3 flow-root space-y-1 rounded-md hover:bg-gray-100 transition ease-in-out duration-150"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="text-base leading-6 font-medium text-gray-900">
                              In the Fight against COVID-19
                            </div>
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-red-200 text-red-800">
                              NEW Product Name
                            </span>
                          </div>
                          <p className="text-sm leading-tight text-gray-400 max-w-md lg:max-w-xl">
                            Searching for products that can help your COVID-19
                            research programs? Click here to see Thomson's
                            featured products!
                          </p>
                        </Link>
                      </div> */}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

const ProductButton = tw.button`ml-8 first-of-type:ml-0 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-blue-500 focus:outline-none transition`

export default ProductNavButton
