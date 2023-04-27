import React from "react"
import { Link } from "gatsby"
import tw, { css } from "twin.macro"
import CheckIcon from "../../images/svg/icons/check.svg"
import AirotopIcon from "../../images/svg/tic/airotopIcon.svg"
import WpIcon from "../../images/svg/tic/wpIcon.svg"
import FvIcon from "../../images/svg/tic/fvIcon.svg"
import OgIcon from "../../images/svg/tic/ogIcon.svg"
import PlasmidIcon from "../../images/svg/tic/plasmidIcon.svg"
import TcIcon from "../../images/svg/tic/tcIcon.svg"
import UyfIcon from "../../images/svg/tic/uyfIcon.svg"
// props: size[hero[default]] color[dark, light, white]
const PageButton = props => {
  return (
    <div
      className={`rounded-md ${props.light ? `` : `shadow`}  ${
        props.className ? props.className : ``
      }`}
    >
      <Link
        onClick={props.onClick}
        to={props.to}
        state={props.state}
        className={`flex items-center justify-center py-3 ${
          props.hero ? `px-8 md:py-4 md:text-lg md:px-10 ` : `px-5`
        } border border-transparent text-base leading-6 font-medium ${
          props.light
            ? `text-blue-700 bg-blue-100 disabled:gray-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring focus:border-blue-300`
            : ``
        } ${
          props.white
            ? `text-blue-600 bg-white disabled:gray-100 hover:text-blue-500 focus:outline-none`
            : ``
        }  ${
          props.dark
            ? `text-white bg-blue-600 disabled:bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring`
            : ``
        } rounded-md transition`}
      >
        {props.children}
      </Link>
    </div>
  )
}

const Button = props => {
  return (
    <div
      className={`rounded-md ${props.light ? `` : `shadow`}  ${
        props.className ? props.className : ``
      }`}
    >
      <button
        type={props.type === `submit` ? `submit` : `button`}
        onClick={props.onClick}
        disabled={props.disabled}
        className={`flex items-center justify-center py-3 ${
          props.hero ? `px-8 md:py-4 md:text-lg md:px-10 ` : `px-5`
        } border border-transparent text-base leading-6 font-medium ${
          props.light
            ? `text-blue-700 bg-blue-100 disabled:gray-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring focus:border-blue-300`
            : ``
        } ${
          props.white
            ? `text-blue-600 bg-white disabled:gray-100 hover:text-blue-500 focus:outline-none`
            : ``
        }  ${
          props.dark
            ? `text-white bg-blue-600 disabled:bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring`
            : ``
        } rounded-md transition`}
      >
        {props.children}
      </button>
    </div>
  )
}

const LinkButton = props => {
  return (
    <div
      className={`rounded-md ${props.light ? `` : `shadow`}  ${
        props.className ? props.className : ``
      }`}
    >
      <a
        href={props.href}
        rel="noreferrer"
        target={props.target ? props.target : undefined}
        disabled={props.disabled}
        className={`flex items-center justify-center py-3 ${
          props.hero ? `px-8 md:py-4 md:text-lg md:px-10 ` : `px-5`
        } border border-transparent text-base leading-6 font-medium ${
          props.light
            ? `text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring focus:border-blue-300`
            : ``
        } ${
          props.white
            ? `text-blue-600 bg-white hover:text-blue-500 focus:outline-none`
            : ``
        }  ${
          props.dark
            ? `text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring`
            : ``
        } rounded-md transition`}
      >
        {props.children}
      </a>
    </div>
  )
}

const PillLink = props => {
  return (
    <Link
      onClick={props.onClick}
      to={props.to}
      css={[
        tw`inline-flex items-center hover:underline`,
        props.large
          ? tw`mt-4 px-6 py-3 text-lg font-medium leading-8 shadow-lg hover:shadow-md transition hover:no-underline`
          : tw`px-2.5 py-0.5 text-xs font-medium leading-4`,
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
      <svg
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
      </svg>
      {props.children}
    </Link>
  )
}

const PillButton = props => {
  return (
    <button
      onClick={props.onClick}
      css={[
        tw`inline-flex items-center px-2.5 py-0.5 text-xs font-medium leading-4 hover:underline focus:outline-none`,
        props.square ? tw`rounded-sm` : tw`rounded-full`,
        props.color === "gray" &&
          tw`bg-gray-100 hover:bg-gray-200 text-gray-800`,
        props.color === "gray" && props.active && tw`bg-gray-200`,
        props.color === "pink" &&
          tw`bg-pink-100 hover:bg-pink-200 text-pink-800`,
        props.color === "pink" && props.active && tw`bg-pink-200`,
        props.color === "red" && tw`bg-red-100 hover:bg-red-200 text-red-800`,
        props.color === "red" && props.active && tw`bg-red-200`,
        props.color === "orange" &&
          tw`bg-orange-100 hover:bg-orange-200 text-orange-800`,
        props.color === "orange" && props.active && tw`bg-orange-200`,
        props.color === "yellow" &&
          tw`bg-yellow-100 hover:bg-yellow-200 text-yellow-800`,
        props.color === "yellow" && props.active && tw`bg-yellow-200`,
        props.color === "green" &&
          tw`bg-green-100 hover:bg-green-200 text-green-800`,
        props.color === "green" && props.active && tw`bg-green-200`,
        props.color === "teal" &&
          tw`bg-teal-100 hover:bg-teal-200 text-teal-800`,
        props.color === "teal" && props.active && tw`bg-teal-200`,
        props.color === "blue" &&
          tw`bg-blue-100 hover:bg-blue-200 text-blue-800`,
        props.color === "blue" && props.active && tw`bg-blue-200`,
        props.color === "purple" &&
          tw`bg-purple-100 hover:bg-purple-200 text-purple-800`,
        props.color === "purple" && props.active && tw`bg-purple-200`,
        props.color === "indigo" &&
          tw`bg-indigo-100 hover:bg-indigo-200 text-indigo-800`,
        props.color === "indigo" && props.active && tw`bg-indigo-200`,
      ]}
      className={`group ${props.className ? props.className : ``}`}
    >
      <svg
        css={[
          props.active
            ? tw`-ml-0.5 mr-0.5 h-2 w-3 stroke-current stroke-2`
            : tw`-ml-0.5 mr-1.5 h-2 w-2 fill-current`,
          props.color === "gray" && tw`text-gray-600 group-hover:text-gray-800`,
          props.color === "gray" && props.active && tw`text-gray-800`,
          props.color === "pink" && tw`text-pink-600 group-hover:text-pink-800`,
          props.color === "pink" && props.active && tw`text-pink-800`,
          props.color === "red" && tw`text-red-600 group-hover:text-red-800`,
          props.color === "red" && props.active && tw`text-red-800`,
          props.color === "orange" &&
            tw`text-orange-600 group-hover:text-orange-800`,
          props.color === "orange" && props.active && tw`text-orange-800`,
          props.color === "yellow" &&
            tw`text-yellow-600 group-hover:text-yellow-800`,
          props.color === "yellow" && props.active && tw`text-yellow-800`,
          props.color === "green" &&
            tw`text-green-600 group-hover:text-green-800`,
          props.color === "green" && props.active && tw`text-green-800`,
          props.color === "teal" && tw`text-teal-600 group-hover:text-teal-800`,
          props.color === "teal" && props.active && tw`text-teal-800`,
          props.color === "blue" && tw`text-blue-600 group-hover:text-blue-800`,
          props.color === "blue" && props.active && tw`text-blue-800`,
          props.color === "purple" &&
            tw`text-purple-600 group-hover:text-purple-800`,
          props.color === "purple" && props.active && tw`text-purple-800`,
          props.color === "indigo" &&
            tw`text-indigo-600 group-hover:text-indigo-800`,
          props.color === "indigo" && props.active && tw`text-indigo-800`,
        ]}
        viewBox="0 0 8 8"
      >
        {props.active ? <CheckIcon /> : <circle cx="4" cy="4" r="3" />}
      </svg>
      {props.children}
    </button>
  )
}

const TabLink = props => {
  const tabStyles = css`
    ${tw`flex items-center justify-center h-10 w-10 rounded-full`}
    svg {
      ${tw`h-6 w-6 fill-current`}
    }
  `
  return (
    <Link
      onClick={props.onClick}
      to={props.to}
      css={[
        tabStyles,
        props.color === "gray" &&
          tw`bg-gray-400 hover:bg-gray-600 text-white hover:text-gray-100`,
        props.color === "pink" &&
          tw`bg-pink-400 hover:bg-pink-600 text-white hover:text-pink-100`,
        props.color === "red" &&
          tw`bg-red-400 hover:bg-red-600 text-white hover:text-red-100`,
        props.color === "orange" &&
          tw`bg-orange-400 hover:bg-orange-600 text-white hover:text-orange-100`,
        props.color === "yellow" &&
          tw`bg-yellow-400 hover:bg-yellow-600 text-white hover:text-yellow-100`,
        props.color === "green" &&
          tw`bg-green-400 hover:bg-green-600 text-white hover:text-green-100`,
        props.color === "teal" &&
          tw`bg-teal-400 hover:bg-teal-600 text-white hover:text-teal-100`,
        props.color === "blue" &&
          tw`bg-blue-400 hover:bg-blue-600 text-white hover:text-blue-100`,
        props.color === "purple" &&
          tw`bg-purple-400 hover:bg-purple-600 text-white hover:text-purple-100`,
        props.color === "indigo" &&
          tw`bg-indigo-400 hover:bg-indigo-600 text-white hover:text-indigo-100`,
      ]}
      className={props.className}
    >
      {props.svg}
      <span className="sr-only">{props.to}</span>
    </Link>
  )
}

const TabBlock = props => {
  const svgStyles = css`
    ${tw`flex items-center justify-center h-10 w-10 rounded-full text-white mr-2 transition`}
    ${[
      props.color === "gray" &&
        tw`bg-gray-400 group-hover:bg-gray-600 group-hover:text-gray-100`,
      props.color === "gray" &&
        props.active === true &&
        tw`text-gray-100 bg-gray-600`,
      props.color === "pink" &&
        tw`bg-pink-400 group-hover:bg-pink-600 group-hover:text-pink-100`,
      props.color === "pink" &&
        props.active === true &&
        tw`text-pink-100 bg-pink-600`,
      props.color === "red" &&
        tw`bg-red-400 group-hover:bg-red-600 group-hover:text-red-100`,
      props.color === "red" &&
        props.active === true &&
        tw`text-red-100 bg-red-600`,
      props.color === "orange" &&
        tw`bg-orange-400 group-hover:bg-orange-600 group-hover:text-orange-100`,
      props.color === "orange" &&
        props.active === true &&
        tw`text-orange-100 bg-orange-600`,
      props.color === "yellow" &&
        tw`bg-yellow-400 group-hover:bg-yellow-600 group-hover:text-yellow-100`,
      props.color === "yellow" &&
        props.active === true &&
        tw`text-yellow-100 bg-yellow-600`,
      props.color === "green" &&
        tw`bg-green-400 group-hover:bg-green-600 group-hover:text-green-100`,
      props.color === "green" &&
        props.active === true &&
        tw`text-green-100 bg-green-600`,
      props.color === "teal" &&
        tw`bg-teal-400 group-hover:bg-teal-600 group-hover:text-teal-100`,
      props.color === "teal" &&
        props.active === true &&
        tw`text-teal-100 bg-teal-600`,
      props.color === "blue" &&
        tw`bg-blue-400 group-hover:bg-blue-600 group-hover:text-blue-100`,
      props.color === "blue" &&
        props.active === true &&
        tw`text-blue-100 bg-blue-600`,
      props.color === "purple" &&
        tw`bg-purple-400 group-hover:bg-purple-600 group-hover:text-purple-100`,
      props.color === "purple" &&
        props.active === true &&
        tw`text-purple-100 bg-purple-600`,
      props.color === "indigo" &&
        tw`bg-indigo-400 group-hover:bg-indigo-600 group-hover:text-indigo-100`,
      props.color === "indigo" &&
        props.active === true &&
        tw`text-indigo-100 bg-indigo-600`,
    ]}
    svg {
      ${tw`h-6 w-6 fill-current focus:outline-none`}
    }
  `

  const tabStyles = css`
    ${[
      "border-radius:9999px .375rem .375rem 9999px;",
      tw`px-1 py-1 flex items-center justify-start w-auto focus:outline-none transition`,
      props.color === "gray" && tw`bg-gray-50 hover:bg-gray-100`,
      props.color === "gray" && props.active === true && tw`bg-gray-100`,
      props.color === "pink" &&
        tw`bg-pink-50 hover:bg-pink-100 text-pink-800 hover:text-pink-900`,
      props.color === "pink" && props.active === true && tw`bg-pink-100`,
      props.color === "red" &&
        tw`bg-red-50 hover:bg-red-100 text-red-800 hover:text-red-900`,
      props.color === "red" && props.active === true && tw`bg-red-100`,
      props.color === "orange" &&
        tw`bg-orange-50 hover:bg-orange-100 text-orange-800 hover:text-orange-900`,
      props.color === "orange" && props.active === true && tw`bg-orange-100`,
      props.color === "yellow" &&
        tw`bg-yellow-50 hover:bg-yellow-100 text-yellow-800 hover:text-yellow-900`,
      props.color === "yellow" && props.active === true && tw`bg-yellow-100`,
      props.color === "green" &&
        tw`bg-green-50 hover:bg-green-100 text-green-800 hover:text-green-900`,
      props.color === "green" && props.active === true && tw`bg-green-100`,
      props.color === "teal" &&
        tw`bg-teal-50 hover:bg-teal-100 text-teal-800 hover:text-teal-900`,
      props.color === "teal" && props.active === true && tw`bg-teal-100`,
      props.color === "blue" &&
        tw`bg-blue-50 hover:bg-blue-100 text-blue-800 hover:text-blue-900`,
      props.color === "blue" && props.active === true && tw`bg-blue-100`,
      props.color === "purple" &&
        tw`bg-purple-50 hover:bg-purple-100 text-purple-800 hover:text-purple-900`,
      props.color === "purple" && props.active === true && tw`bg-purple-100`,
      props.color === "indigo" &&
        tw`bg-indigo-50 hover:bg-indigo-100 text-indigo-800 hover:text-indigo-900`,
      props.color === "indigo" && props.active === true && tw`bg-indigo-100`,
    ]}
  `

  return (
    <button onClick={props.onClick} className={props.className} css={tabStyles}>
      <span css={svgStyles}>{props.svg}</span>
      <span>{props.children}</span>
    </button>
  )
}

// ********** ==> ProdCTAlink <== **********
const ProdCTAlink = props => {
  const svgStyles = css`
    ${tw`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white mr-2 transition`}
    ${[
      props.color === "gray" &&
        tw`bg-gray-400 group-hover:bg-gray-600 group-hover:text-gray-100`,
      props.color === "gray" &&
        props.active === true &&
        tw`text-gray-100 bg-gray-600`,
      props.color === "pink" &&
        tw`bg-pink-400 group-hover:bg-pink-600 group-hover:text-pink-100`,
      props.color === "pink" &&
        props.active === true &&
        tw`text-pink-100 bg-pink-600`,
      props.color === "red" &&
        tw`bg-red-400 group-hover:bg-red-600 group-hover:text-red-100`,
      props.color === "red" &&
        props.active === true &&
        tw`text-red-100 bg-red-600`,
      props.color === "orange" &&
        tw`bg-orange-400 group-hover:bg-orange-600 group-hover:text-orange-100`,
      props.color === "orange" &&
        props.active === true &&
        tw`text-orange-100 bg-orange-600`,
      props.color === "yellow" &&
        tw`bg-yellow-400 group-hover:bg-yellow-600 group-hover:text-yellow-100`,
      props.color === "yellow" &&
        props.active === true &&
        tw`text-yellow-100 bg-yellow-600`,
      props.color === "green" &&
        tw`bg-green-400 group-hover:bg-green-600 group-hover:text-green-100`,
      props.color === "green" &&
        props.active === true &&
        tw`text-green-100 bg-green-600`,
      props.color === "teal" &&
        tw`bg-teal-400 group-hover:bg-teal-600 group-hover:text-teal-100`,
      props.color === "teal" &&
        props.active === true &&
        tw`text-teal-100 bg-teal-600`,
      props.color === "blue" &&
        tw`bg-blue-400 group-hover:bg-blue-600 group-hover:text-blue-100`,
      props.color === "blue" &&
        props.active === true &&
        tw`text-blue-100 bg-blue-600`,
      props.color === "purple" &&
        tw`bg-purple-400 group-hover:bg-purple-600 group-hover:text-purple-100`,
      props.color === "purple" &&
        props.active === true &&
        tw`text-purple-100 bg-purple-600`,
      props.color === "indigo" &&
        tw`bg-indigo-400 group-hover:bg-indigo-600 group-hover:text-indigo-100`,
      props.color === "indigo" &&
        props.active === true &&
        tw`text-indigo-100 bg-indigo-600`,
    ]}
    svg {
      ${tw`h-6 w-6 fill-current focus:outline-none`}
    }
  `

  const tabStyles = css`
    ${[
      tw`overflow-hidden w-full h-full shadow-md group-hover:shadow-sm pl-1 pr-6 py-1 rounded-md flex items-center justify-start w-auto focus:outline-none transition`,
      props.color === "gray" && tw`bg-gray-100 hover:bg-gray-200`,
      props.color === "pink" &&
        tw`bg-pink-100 hover:bg-pink-200 text-pink-800 hover:text-pink-900`,
      props.color === "red" &&
        tw`bg-red-100 hover:bg-red-200 text-red-800 hover:text-red-900`,
      props.color === "orange" &&
        tw`bg-orange-100 hover:bg-orange-200 text-orange-800 hover:text-orange-900`,
      props.color === "yellow" &&
        tw`bg-yellow-100 hover:bg-yellow-200 text-yellow-800 hover:text-yellow-900`,
      props.color === "green" &&
        tw`bg-green-100 hover:bg-green-200 text-green-800 hover:text-green-900`,
      props.color === "teal" &&
        tw`bg-teal-100 hover:bg-teal-200 text-teal-800 hover:text-teal-900`,
      props.color === "blue" &&
        tw`bg-blue-100 hover:bg-blue-200 text-blue-800 hover:text-blue-900`,
      props.color === "purple" &&
        tw`bg-purple-100 hover:bg-purple-200 text-purple-800 hover:text-purple-900`,
      props.color === "indigo" &&
        tw`bg-indigo-100 hover:bg-indigo-200 text-indigo-800 hover:text-indigo-900`,
    ]}
  `

  return (
    <div className="group" tw="rounded-md shadow-lg hover:shadow-md">
      <Link to={props.to} className={props.className} css={tabStyles}>
        <span css={svgStyles}>
          {props.svg === "FV" && <FvIcon />}
          {props.svg === "OG" && <OgIcon />}
          {props.svg === "UYF" && <UyfIcon />}
          {props.svg === "TC" && <TcIcon />}
          {props.svg === "Plasmid" && <PlasmidIcon />}
          {props.svg === "Airotop" && <AirotopIcon />}
          {props.svg === "WP" && <WpIcon />}
        </span>
        <span>{props.children}</span>
      </Link>
    </div>
  )
}

export {
  PageButton,
  Button,
  LinkButton,
  PillLink,
  PillButton,
  TabLink,
  TabBlock,
  ProdCTAlink,
}
