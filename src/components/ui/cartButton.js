import React, { useContext } from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { StateContext } from "../el/provider"
import { motion } from "framer-motion"
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import { useLoaded } from "../useLoaded"
const CartButton = () => {
  const loaded = useLoaded()
  const { stateBag, stateCart } = useContext(StateContext)
  const [bagBin] = stateBag
  const [cart] = stateCart
  const cartBtnVariants = {
    start: {
      rotateY: 180,
      scale: 0,
      opacity: 0,
    },
    end: {
      rotateY: [180, 180, 0],
      scale: [0, 1, 1],
      opacity: [0, 1, 1],
      transition: { type: "tween", delay: 0.2, duration: 0.3 },
    },
  }

  const cartCountVariants = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.25 },
    },
  }
  return (
    <motion.div
      tw="mr-1 relative flex-shrink-0 rounded-full shadow-sm"
      variants={cartBtnVariants}
      initial="start"
      animate="end"
    >
      <Link
        to={loaded && cart ? `/form/order` : `/form/quote`}
        className="w-full h-full block p-1 border border-blue-300 text-gray-400 rounded-full shadow-sm hover:shadow-none hover:border-blue-500 hover:text-gray-700 hover:bg-blue-50 focus:outline-none transition"
        aria-label="Notifications"
      >
        {loaded && cart ? (
          <ShoppingCartIcon tw="h-6 w-6 stroke-current" />
        ) : (
          <ShoppingBagIcon tw="h-6 w-6 stroke-current" />
        )}
        {loaded && bagBin !== undefined && bagBin.length > 0 ? (
          <motion.span
            variants={cartCountVariants}
            css={[
              tw`absolute -top-1 -right-1.5 block rounded-full text-white text-xs text-center leading-4 align-middle ring-gray-200 bg-teal-400`,
              bagBin !== undefined && bagBin.length > 10
                ? tw`py-0.5 px-1`
                : tw`h-4 w-4`,
            ]}
          >
            {bagBin.length}
          </motion.span>
        ) : (
          ""
        )}
      </Link>
    </motion.div>
  )
}

export default CartButton
