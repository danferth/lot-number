import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const H1 = tw.h1`mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-10 sm:leading-none tracking-tight`
const H2 = tw.h2`mt-4 sm:mt-5 text-3xl sm:text-4xl font-extrabold text-gray-900 leading-9 sm:leading-10 tracking-tight`
const H3 = tw.h3`mt-4 sm:mt-5 text-2xl sm:text-3xl font-extrabold text-gray-900 leading-8 sm:leading-9 tracking-tight`
const H4 = tw.h4`mt-4 sm:mt-5 text-base sm:text-lg leading-6 font-semibold text-gray-900 uppercase`
const H5 = tw.h5`mt-1 sm:mt-2 text-base sm:text-lg font-semibold text-blue-600 leading-6 xl:leading-7 tracking-wide uppercase`
const H6 = tw.h6`mt-1 sm:mt-2 text-sm leading-5 tracking-wider font-semibold uppercase text-blue-600`

// prodhero Components
const BlackTitle = tw(H2)`mt-0! sm:mt-0! text-center lg:text-left`
const BlueSub = tw.span`text-blue-600 text-center lg:text-left block lg:inline-block mt-3`

//Body element basics
const P = styled.p(props => [
  props.hero
    ? tw`mt-4 sm:mt-6 sm:text-lg md:text-xl text-gray-600 leading-6 sm:leading-7`
    : tw`mt-2 sm:mt-3 text-base text-gray-600 leading-6 max-w-4xl`,
  props.notice &&
    tw`mb-8 px-4 py-3 text-sm text-yellow-800 bg-yellow-300 rounded-md border border-yellow-500`,
])
const Disclaimer = tw.p`mt-3 sm:mt-4 text-xs font-extralight leading-normal text-gray-500`
const Caption = tw.p`text-center text-xs font-normal leading-normal text-gray-600`
const A = props => {
  return (
    <Link tw="underline! hover:no-underline!" to={props.to}>
      {props.children}
    </Link>
  )
}
const Ol = tw.ol`list-decimal pl-5 mt-2 sm:mt-3`
const Ul = tw.ul`list-disc mt-2 sm:mt-3 pl-5`
const Li = tw.li`mb-2 last-of-type:mt-0 text-base text-gray-600 leading-6`
export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  BlackTitle,
  BlueSub,
  P,
  Disclaimer,
  Caption,
  A,
  Ol,
  Ul,
  Li,
}
