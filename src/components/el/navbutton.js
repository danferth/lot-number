import React from "react"
import tw from "twin.macro"
import { Link } from "gatsby"

const NavButton = props => {
  const active = color => {
    if (color === "gray") {
      return tw`bg-gray-500 text-gray-50 cursor-default`
    }
    if (color === "pink") {
      return tw`bg-pink-500 text-pink-50 cursor-default`
    }
    if (color === "red") {
      return tw`bg-red-500 text-red-50 cursor-default`
    }
    if (color === "orange") {
      return tw`bg-orange-500 text-orange-50 cursor-default`
    }
    if (color === "yellow") {
      return tw`bg-yellow-500 text-yellow-50 cursor-default`
    }
    if (color === "green") {
      return tw`bg-green-500 text-green-50 cursor-default`
    }
    if (color === "teal") {
      return tw`bg-teal-500 text-teal-50 cursor-default`
    }
    if (color === "blue") {
      return tw`bg-blue-500 text-blue-50 cursor-default`
    }
    if (color === "purple") {
      return tw`bg-purple-500 text-purple-50 cursor-default`
    }
    if (color === "indigo") {
      return tw`bg-indigo-500 text-indigo-50 cursor-default`
    }
  }

  return (
    <Link
      onClick={props.onClick}
      to={props.to}
      activeStyle={active(props.color)}
      css={[
        tw`inline-flex items-center px-2.5 py-0.5 text-xs font-medium leading-4`,
        props.square ? tw`rounded-sm` : tw`rounded-full`,
        props.color === "gray" &&
          tw`bg-gray-100 hover:bg-gray-200 text-gray-800`,
        props.color === "pink" &&
          tw`bg-pink-100 hover:bg-pink-200 text-pink-800`,
        props.color === "red" && tw`bg-red-100 hover:bg-red-200 text-red-800`,
        props.color === "orange" &&
          tw`bg-orange-100 hover:bg-orange-200 text-orange-800`,
        props.color === "yellow" &&
          tw`bg-yellow-100 hover:bg-yellow-200 text-yellow-800`,
        props.color === "green" &&
          tw`bg-green-100 hover:bg-green-200 text-green-800`,
        props.color === "teal" &&
          tw`bg-teal-100 hover:bg-teal-200 text-teal-800`,
        props.color === "blue" &&
          tw`bg-blue-100 hover:bg-blue-200 text-blue-800`,
        props.color === "purple" &&
          tw`bg-purple-100 hover:bg-purple-200 text-purple-800`,
        props.color === "indigo" &&
          tw`bg-indigo-100 hover:bg-indigo-200 text-indigo-800`,
      ]}
      className={`group ${props.className ? props.className : ``}`}
    >
      {/* <svg
        css={[
          tw`-ml-0.5 mr-1.5 h-2 w-2 fill-current`,
          props.large ? tw`hidden` : tw`block`,
          props.color === "gray" && tw`text-gray-600 group-hover:text-gray-800`,
          props.color === "pink" && tw`text-pink-600 group-hover:text-pink-800`,
          props.color === "red" && tw`text-red-600 group-hover:text-red-800`,
          props.color === "orange" &&
            tw`text-orange-600 group-hover:text-orange-800`,
          props.color === "yellow" &&
            tw`text-yellow-600 group-hover:text-yellow-800`,
          props.color === "green" &&
            tw`text-green-600 group-hover:text-green-800`,
          props.color === "teal" && tw`text-teal-600 group-hover:text-teal-800`,
          props.color === "blue" && tw`text-blue-600 group-hover:text-blue-800`,
          props.color === "purple" &&
            tw`text-purple-600 group-hover:text-purple-800`,
          props.color === "indigo" &&
            tw`text-indigo-600 group-hover:text-indigo-800`,
        ]}
        viewBox="0 0 8 8"
      >
        <circle cx="4" cy="4" r="3" />
      </svg> */}
      {props.children}
    </Link>
  )
}

export default NavButton
