import React, { useContext, useState, useEffect } from "react"
import { StateContext } from "../el/provider"
import { motion, AnimatePresence } from "framer-motion"
import tw, { css } from "twin.macro"
import Hash from "../../images/svg/icons/hash.svg"
import { GatsbyImage } from "gatsby-plugin-image"
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/outline"
const ProductList = props => {
  //graphql data as props for component
  const product = props.productQuery
  const images = props.imageQuery

  return (
    <div tw="bg-white shadow-sm md:shadow-lg sm:rounded-md">
      <div tw="shadow overflow-hidden shadow md:shadow-md sm:rounded-md">
        <ul>
          {product.edges.map(prod => {
            const prodImage = images.edges.find(
              element =>
                element.node.name + element.node.ext === prod.node.image
            )
            return (
              <LineItem
                key={prod.node.id}
                borderColor={props.borderColor}
                prodImage={prodImage}
                prod={prod.node}
                alt={prod.node.title}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

// main parts
const LineItem = props => {
  const { stateBag, stateAlert, stateCart } = useContext(StateContext)
  const [bag, setBag] = stateBag // eslint-disable-line no-unused-vars
  const [pageAlert, setPageAlert] = stateAlert // eslint-disable-line no-unused-vars
  const [cart, setCart] = stateCart // eslint-disable-line no-unused-vars
  const [showInfo, setShowInfo] = useState(false)
  const [added, setAdded] = useState(false)
  //add item to quote/order
  const addToBag = (item, type) => {
    const addAlert = {
      button: false,
      type: "success",
      title: `${item.title}`,
      message: `Added to ${type ? `cart` : `quote`}`,
    }
    setCart(type)
    setAdded(true)
    setBag(currentBag => [...currentBag, item])
    setPageAlert(addAlert)
  }

  const pnCount = props.prod.partNumber.length
  const infoVariants = {
    initial: {
      originY: 0,
      scaleY: 0,
      opacity: 0,
    },
    show: {
      originY: 0,
      scaleY: 1,
      opacity: 1,
      transition: { type: "tween", duration: 0.125, ease: "easeOut" },
    },
    exit: {
      originY: 0,
      scaleY: 0,
      opacity: 0,
      transition: { type: "tween", duration: 0.125, ease: "easeOut" },
    },
  }
  const specImageStyle = css`
    ${tw`mx-auto md:mx-0 w-3/4 h-auto rounded-sm overflow-hidden lg:rounded-md md:w-full`}
    img {
      ${tw`rounded-sm`}
    }
  `
  return (
    <li tw="border-t first-of-type:border-t-0" id={props.prod.id}>
      <div className="group block text-left w-full hover:bg-gray-50 focus:outline-none">
        <div className="pt-2.5 p-1 pb-0 md:pl-0 md:pr-4 xl:px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-4">
            <ProdDetails
              onClick={() => {
                setShowInfo(!showInfo)
              }}
              role="presentation"
              aria-hidden="true"
            >
              <ProdImg
                borderColor={props.borderColor}
                gatsbyImageData={
                  props.prodImage.node.childImageSharp.gatsbyImageData
                }
                alt={props.alt}
              ></ProdImg>

              <DetailSection className="col-span-8 row-start-1 mb-3">
                <Title>{props.prod.title}</Title>
                <Sterile sterile={props.prod.sterile}></Sterile>
              </DetailSection>

              <DetailSection className="col-span-6 row-start-2 row-span-2 col-start-3 pl-4 md:pl-0">
                <DetailBlock className="">
                  <DetailItem className="md:mr-6">
                    {props.prod.desc_main}
                  </DetailItem>
                  <DetailItem>{props.prod.desc_sub}</DetailItem>
                </DetailBlock>

                <DetailBlock className="mt-1 md:mt-0">
                  <DetailItem>
                    <Pn />
                    {props.prod.partNumber[0].num}
                    <Pipe />
                    {props.prod.partNumber[0].qty}
                    <Case />
                  </DetailItem>
                  {pnCount > 1 ? (
                    <DetailItem>
                      <Pn />
                      {props.prod.partNumber[1].num}
                      <Pipe />
                      {props.prod.partNumber[1].qty}
                      <Case />
                    </DetailItem>
                  ) : (
                    " "
                  )}
                </DetailBlock>
              </DetailSection>
            </ProdDetails>

            <ProdAction
              disabled={added}
              quoteClick={() => addToBag(props.prod, false)}
              cartClick={() => addToBag(props.prod, true)}
            ></ProdAction>
          </div>
        </div>
        <button
          onClick={() => {
            setShowInfo(!showInfo)
          }}
          className="w-full block text-center text-xs text-gray-200 group-hover:text-gray-400 pt-4 pb-2 md:py-1"
        >
          click for more details
        </button>
      </div>
      <AnimatePresence>
        {showInfo && (
          <motion.div
            variants={infoVariants}
            initial="initial"
            animate="show"
            exit="exit"
            className="py-4 prodInfo overflow-hidden px-4 sm:px-6 bg-gray-50 border-t border-gray-200 shadow-inner"
          >
            <div className="text-sm text-gray-700 font-light mb-2 text-center md:text-left pl-0 md:pl-2">
              Specifications:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-2 lg:gap-4">
              <div className="grid-cols-1 md:col-span-2 lg:col-span-1">
                <GatsbyImage
                  image={props.prodImage.node.childImageSharp.gatsbyImageData}
                  className={props.borderColor}
                  css={[specImageStyle]}
                  alt={props.alt}
                />
              </div>

              <div className="col-span-1 md:col-span-4 overflow-hidden rounded-sm lg:rounded-md">
                <table className="w-full">
                  <tbody>
                    {Object.entries(props.prod.specs).map((spec, index) => {
                      /* if value is BOOLEAN */
                      if (typeof spec[1].value === "boolean") {
                        if (spec[1].value) {
                          spec[1].value = "Yes"
                        } else {
                          spec[1].value = "No"
                        }
                      }

                      /* if value is ARRAY */
                      if (Array.isArray(spec[1].value)) {
                        let valueLength = spec[1].value.length
                        let hold = ""
                        for (var i = 0; i < valueLength - 1; i++) {
                          hold += spec[1].value[i] + ", "
                        }
                        hold += spec[1].value[valueLength - 1]
                        spec[1].value = hold
                      }
                      /* RETURN EVERYTHING */
                      return (
                        <tr
                          className="border-b border-gray-200 last:border-b-0"
                          key={index}
                        >
                          <SpecItem>{spec[1].key}</SpecItem>
                          <Spec>: {spec[1].value}</Spec>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}
const ProdImg = props => {
  const imgStyle = css`
    ${tw`mx-auto xl:ml-0 xl:mr-auto w-20 h-20 rounded-md md:rounded-full md:w-16 md:h-16 ring-2 ring-offset-1 ring-offset-gray-300 shadow-sm md:shadow-md`}
    img {
      ${tw`rounded-md md:rounded-full`}
    }
  `
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className="w-auto row-start-2 row-span-2 md:row-start-1 col-span-2 xl:col-auto flex items-start md:items-end justify-center"
    >
      <GatsbyImage
        image={props.gatsbyImageData}
        className={props.borderColor}
        alt={props.alt}
        css={[imgStyle]}
      />
    </div>
  )
}
const ProdDetails = props => {
  return (
    <div
      role="button"
      tabIndex={-1}
      onKeyDown={props.onClick}
      onClick={props.onClick}
      className="cursor-pointer col-span-1 md:col-span-10 grid grid-rows-3 grid-cols-8 md:grid-cols-12 md:grid-rows-2"
    >
      {props.children}
    </div>
  )
}
const DetailSection = tw.div`md:col-span-10 xl:col-span-11 flex md:items-center md:justify-between flex-col md:flex-row text-left`
const DetailItem = tw.div`text-sm leading-5 text-gray-500`
const DetailBlock = tw.div`md:flex md:flex-col`

const ActionButton = props => {
  const { stateCart, stateBag } = useContext(StateContext)
  const [cart] = stateCart
  const [bag] = stateBag
  const [btnState, setBtnState] = useState("alone")
  const actionBtnVariants = {
    initial: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      x: 100,
      opacity: 0,
      transition: { duration: 0.5 },
    },
    alone: {
      scale: [1.1, 1, 1.06],
    },
  }
  useEffect(() => {
    if (bag.length === 0) {
      setBtnState("initial")
    } else {
      cart && props.type === "order" && setBtnState("alone")
      cart && props.type === "quote" && setBtnState("exit")
      !cart && props.type === "order" && setBtnState("exit")
      !cart && props.type === "quote" && setBtnState("alone")
    }
  }, [cart, bag, props.type])
  return (
    <motion.div
      tw="rounded-md  md:shadow-sm w-1/2 md:w-full"
      variants={actionBtnVariants}
      initial="initial"
      animate={btnState}
      type={props.type}
    >
      <button
        onClick={props.actionClick}
        disabled={props.disabled}
        css={[
          tw`flex items-center justify-center w-full border focus:outline-none leading-none md:font-light text-sm md:text-xs rounded-md`,
          props.alone
            ? tw`py-3 px-8 md:py-3 px-4`
            : tw`py-3 px-8 md:py-2 md:px-1.5 lg:py-1.5 lg:px-3`,
          props.disabled
            ? tw`border-gray-200 bg-gray-100 text-gray-400`
            : tw`border-gray-300 bg-white text-gray-500 hover:text-gray-700 hover:bg-blue-50 hover:border-gray-400 shadow-sm hover:shadow-none`,
        ]}
      >
        <span tw="w-full h-full inline-flex justify-center items-center space-x-1">
          {props.children}
        </span>
      </button>
    </motion.div>
  )
}
const ProdAction = props => {
  const { stateCart, stateBag } = useContext(StateContext)
  const [cart] = stateCart
  const [bag] = stateBag
  return (
    <div tw="col-span-1 md:col-span-2 lg:ml-4 xl:ml-8 flex items-center justify-center space-x-1.5 md:space-x-0 md:flex-col md:space-y-2">
      {bag !== undefined && bag.length === 0 ? (
        <React.Fragment>
          {/* Quote Button */}
          <ActionButton
            key="initialQuote"
            type="quote"
            actionClick={props.quoteClick}
          >
            <ShoppingBagIcon tw="w-4 h-4 stroke-current text-blue-600" />
            <span>Get Quote</span>
          </ActionButton>

          {/* Cart Button */}
          <ActionButton
            key="initialOrder"
            type="order"
            actionClick={props.cartClick}
          >
            <ShoppingCartIcon tw="w-4 h-4 stroke-current text-blue-500" />
            <span>Add to Cart</span>
          </ActionButton>
        </React.Fragment>
      ) : cart ? (
        <ActionButton
          key="activeQuote"
          type="order"
          disabled={props.disabled}
          actionClick={props.cartClick}
        >
          {props.disabled ? (
            <>
              <ShoppingCartIcon tw="w-4 h-4 stroke-current text-gray-300" />{" "}
              <span>In Cart</span>
            </>
          ) : (
            <>
              <ShoppingCartIcon tw="w-4 h-4 stroke-current text-blue-500" />{" "}
              <span>Add to Cart</span>
            </>
          )}
        </ActionButton>
      ) : (
        <ActionButton
          key="activeQuote"
          type="quote"
          disabled={props.disabled}
          actionClick={props.quoteClick}
        >
          {props.disabled ? (
            <>
              <ShoppingBagIcon tw="w-4 h-4 stroke-current text-gray-300" />
              <span>In Quote</span>
            </>
          ) : (
            <>
              <ShoppingBagIcon tw="w-4 h-4 stroke-current text-blue-600" />
              <span>Quote Item</span>
            </>
          )}
        </ActionButton>
      )}
    </div>
  )
}

// bits and peices

// detail peices
const Title = tw.div`mb-1.5 md:mb-0 text-center md:text-left text-base md:text-sm leading-5 font-medium text-blue-600`

const Sterile = props => {
  return (
    <div className="mx-auto md:mx-0 flex-shrink-0 flex">
      <span
        css={[
          tw`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full`,
          props.sterile === true || props.sterile === "Yes"
            ? tw`bg-green-100 text-green-800`
            : tw`bg-purple-100 text-purple-800`,
        ]}
      >
        {props.sterile === true || props.sterile === "Yes"
          ? `sterile`
          : `non-sterile`}
      </span>
    </div>
  )
}

const Pn = () => {
  return (
    <span className="mr-1 text-gray-400">
      pn
      <Hash className="inline-block h-3 w-3 stroke-current"></Hash>
    </span>
  )
}

const Pipe = () => {
  return <span className="mx-2 text-gray-400 font-extralight">|</span>
}

const Case = () => {
  return <span className="text-gray-400 text-sm ml-1">/case</span>
}

//Specification bits
const SpecItem = tw.td`text-xs font-semibold text-gray-700 py-2 px-2 bg-white w-1/3 md:w-1/4`
const Spec = tw.td`text-xs text-gray-600 font-normal py-2 px-2 bg-white w-2/3 md:w-3/4`

export default ProductList
