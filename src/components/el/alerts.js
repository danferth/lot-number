import React from "react"
import tw from "twin.macro"
import { motion } from "framer-motion"
//icons
import CheckIcon from "../../images/svg/icons/checkcircle.svg"
import WarnIcon from "../../images/svg/icons/warning.svg"
import AlertIcon from "../../images/svg/icons/alertcircle.svg"
import InfoIcon from "../../images/svg/icons/infocircle.svg"

//a styled white box with black text
const WhiteBox = props => {
  return (
    <div className={props.className} tw="bg-white rounded-md shadow-lg">
      <div tw="px-4 py-2.5 rounded-md shadow-sm overflow-hidden">
        <p tw="text-xs font-extralight leading-normal text-black">
          {props.children}
        </p>
      </div>
    </div>
  )
}

//general page alert to be used in forms and in page blocks
const FormAlert = props => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.5 }}
      className={props.className}
      css={[
        tw`rounded-md p-4 shadow-md origin-center`,
        props.type === "warning" ? tw`bg-yellow-50` : ``,
        props.type === "error" ? tw`bg-red-50` : ``,
        props.type === "success" ? tw`bg-green-50` : ``,
        props.type === "general" ? tw`bg-blue-50` : ``,
      ]}
    >
      <div tw="flex">
        <div tw="flex-shrink-0">
          {props.type === "warning" ? (
            <WarnIcon tw="h-5 w-5 text-yellow-400" />
          ) : (
            ``
          )}
          {props.type === "error" ? (
            <AlertIcon tw="h-5 w-5 text-red-400 fill-current" />
          ) : (
            ``
          )}
          {props.type === "success" ? (
            <CheckIcon tw="h-5 w-5 fill-current text-green-400" />
          ) : (
            ``
          )}
          {props.type === "general" ? (
            <InfoIcon tw="h-5 w-5 fill-current text-blue-400" />
          ) : (
            ``
          )}
        </div>
        <div tw="ml-3">
          <h3
            css={[
              tw`text-sm leading-5 font-medium`,
              props.type === "warning" ? tw`text-yellow-800` : ``,
              props.type === "error" ? tw`text-red-800` : ``,
              props.type === "success" ? tw`text-green-800` : ``,
              props.type === "general" ? tw`text-blue-800` : ``,
            ]}
          >
            {props.title}
          </h3>
          <div
            css={[
              tw`mt-2 text-sm leading-5`,
              props.type === "warning" ? tw`text-yellow-700` : ``,
              props.type === "error" ? tw`text-red-700` : ``,
              props.type === "success" ? tw`text-green-700` : ``,
              props.type === "general" ? tw`text-blue-700` : ``,
            ]}
          >
            {props.children}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export { FormAlert, WhiteBox }
