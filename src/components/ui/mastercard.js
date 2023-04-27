import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import tw, { css } from "twin.macro"
import { H6, Caption } from "../el/typography"
import { PillLink, PageButton } from "../el/button"
import CheckCircle from "../../images/svg/icons/checkcircle.svg"
import Check from "../../images/svg/icons/check.svg"
import ChevronR from "../../images/svg/icons/chevron-right.svg"
/*
BASIC USAGE

<Block [lighttop, lightbottom, darktop, darkbottom, whitefull, lightfull, darkfull]>
  <Header [[normal, snug, tight], [center]]>header items like H2</Header>
  <Section [[lighttop, lightbottom, darktop, darkbottom], 
          (if dark or light full on block then card is blank)
          [normal, snug, tight],
          [[general[flex, [grid[gap]]],onecard, twocad, threecard, iconlist]>
          (Card has grid-cols-8, if gap then gap-8)

    <CardBody className="lg:col-span-?(up to 8)"> 
      text items...
    </CardBody>

    (and/or)

    <CardImage gatsbyImageData={} [cover] className="col-span-?(up to 8)"/>

  </Section>
</Block>
*/

// ============MAIN BLOCK============
const Block = props => {
  return (
    <div
      css={[
        props.theme === "whitefull" && tw`bg-gray-50`,
        props.theme === "lightfull" && tw`bg-gray-200`,
        props.theme === "darkfull" && tw`bg-gray-900`,
        props.theme === "lighttop" && tw`bg-gray-200`,
        props.theme === "darktop" && tw`bg-gray-900`,
        props.theme === "darkbottom" && tw`bg-gray-50`,
        props.theme === "lightbottom" && tw`bg-gray-50`,
      ]}
    >
      {/* {props.children} */}
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, { theme: props.theme })
      })}
    </div>
  )
}
// ============HEADER============
const Header = props => {
  return (
    <div
      className={props.className}
      css={[
        props.center && tw`text-center`,
        props.normal && tw`pt-12 sm:pt-16 xl:pt-20`,
        props.snug && tw`pt-3 sm:pt-6 xl:pt-10`,
        props.tight && tw`pt-0.5 sm:pt-2 xl:pt-4`,
      ]}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {props.children}
      </div>
    </div>
  )
}
// ============SECTION============
const Section = props => {
  return (
    <div
      className={props.className}
      css={[
        props.noheader ? tw`mt-0` : tw`mt-8 sm:mt-12`,
        props.theme === "lighttop" && tw`bg-gray-50`,
        props.theme === "darktop" && tw`bg-gray-50`,
        props.theme === "darkbottom" && tw`bg-gray-900`,
        props.theme === "lightbottom" && tw`bg-gray-200`,
        props.normal && tw`pb-16 sm:pb-20 xl:pb-28`,
        props.snug && tw`pb-8 sm:pb-12 xl:pb-16`,
        props.tight && tw`pb-3 sm:pb-6 xl:pb-8`,
      ]}
    >
      <div className="relative">
        <div
          css={[
            tw`absolute inset-0 h-5/6 lg:h-2/3`,
            props.theme === "lighttop" && tw`bg-gray-200`,
            props.theme === "darktop" && tw`bg-gray-900`,
            props.theme === "darkbottom" && tw`bg-gray-50`,
            props.theme === "lightbottom" && tw`bg-gray-50`,
          ]}
        ></div>
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 print:px-0 print:w-full">
          {props.general && (
            <div
              css={[
                props.flex && tw`lg:flex lg:items-center lg:justify-between`,
                props.grid && tw`lg:grid lg:grid-cols-8`,
                props.grid && props.gap && tw`gap-8`,
              ]}
            >
              {props.children}
            </div>
          )}
          {props.onecard && (
            <div className="max-w-2xl mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:grid lg:grid-cols-8">
              {props.children}
            </div>
          )}
          {props.twocard && (
            <div className="max-w-md mx-auto lg:max-w-5xl grid gap-5 lg:grid-cols-2 ">
              {props.children}
            </div>
          )}
          {props.threecard && (
            <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {props.children}
            </div>
          )}
          {props.fourcard && (
            <div className="max-w-lg mx-auto grid gap-3 lg:grid-cols-4 lg:max-w-none">
              {props.children}
            </div>
          )}
          {props.iconlist && (
            <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {props.children}
            </ul>
          )}
          {props.cardgroup && (
            <div className="relative lg:grid lg:grid-cols-7">
              {props.children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
// ============SINGLE CARD============
const Card = props => {
  const imgStyle = css`
    img {
      ${tw`rounded-t-lg`}
    }
  `
  return (
    <div css={[tw`flex flex-col rounded-lg shadow-lg overflow-hidden`]}>
      <div css={[tw`bg-white flex-shrink-0`, props.pill && tw`relative`]}>
        <GatsbyImage
          alt={props.alt}
          image={props.gatsbyImageData}
          css={[
            imgStyle,
            props.imageHeight
              ? tw`h-full w-auto object-cover`
              : tw`h-64 w-full object-cover`,
            props.twocard && tw`h-64`,
            props.threecard && tw`h-48`,
          ]}
        />
        {props.pill && (
          <PillLink
            color={props.pillcolor}
            className="absolute top-6 left-4 shadow-md"
            to={props.pillto}
          >
            {props.pilltitle}
          </PillLink>
        )}
      </div>
      {props.children}
    </div>
  )
}

// ============CARD COMPONENTS============
const CardWrap = props => {
  return (
    <div
      css={[
        tw`bg-white flex-1 flex flex-col justify-between`,
        props.snug && tw`px-6 pt-6 pb-8 bg-white sm:p-10 sm:pt-6`,
        props.loose && tw`p-6`,
      ]}
    >
      <div className="flex-1">{props.children}</div>
      {props.footer && (
        <div className="mt-6 flex items-center">{props.footer}</div>
      )}
    </div>
  )
}

const CardBody = tw.div`bg-white px-6 py-8 lg:p-12`

const CardImage = props => {
  const imgStyle = css`
    img {
      ${tw`rounded-b-lg lg:rounded-b-none lg:rounded-r-lg`}
    }
  `
  const imgFull = css`
    img {
      ${tw`rounded-lg`}
    }
  `
  return (
    <div
      className={props.className}
      css={[
        tw`relative`,
        props.cover
          ? ``
          : tw` p-6 pb-10 lg:p-8 flex items-center justify-center`,
      ]}
    >
      <GatsbyImage
        alt={props.alt}
        image={props.gatsbyImageData}
        css={[
          props.fullImage ? imgFull : imgStyle,
          tw`object-cover`,
          props.cover ? tw`w-full h-full` : tw`w-full h-auto`,
        ]}
      />
      {props.caption ? (
        <Caption className="absolute bottom-0 inset-x-0 pt-0.5 pb-2 px-6 lg:px-8 bg-white">
          {props.caption}
        </Caption>
      ) : (
        ``
      )}
    </div>
  )
}
// ============CARD BODY SUB COMPONENTS============
const PillRow = props => {
  return (
    <p className="flex flex-wrap items-center justify-start">
      {props.children}
    </p>
  )
}

// ============CARD SUB HEADING---------------
const CardSub = props => {
  return (
    <div tw="mt-8">
      <div className="block sm:flex sm:items-center">
        <H6 tw="mt-0! flex-shrink-0 pr-4 bg-white max-w-md">{props.title}</H6>
        <div className="hidden sm:block flex-1 border-t-2 border-gray-200"></div>
      </div>
      {props.children}
    </div>
  )
}
// ============CARD LIST================
const CardList = props => {
  return (
    <div className="mt-8">
      <div className="flex items-center">
        <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-blue-600">
          {props.title}
        </h4>
        <div className="flex-1 border-t-2 border-gray-200"></div>
      </div>
      <ul className="mt-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
        {props.children}
      </ul>
    </div>
  )
}
const CardLi = props => {
  return (
    <li tw="mb-4 last-of-type:mb-0 flex items-start lg:col-span-1">
      <div className="flex-shrink-0">
        {props.circle && <CheckCircle className="h-5 w-5 text-green-500" />}
        {!props.check && !props.circle && (
          <ChevronR className="h-5 w-5 text-blue-500" />
        )}
        {props.check && <Check className="h-6 w-6 text-green-500" />}
      </div>
      <p className="ml-3 text-sm leading-5 text-gray-500">{props.children}</p>
    </li>
  )
}

// =============ICON LIST===============

const IconList = props => {
  const listIconStyles = css`
    ${tw`flex items-center justify-center h-12 w-12 rounded-md text-white`}
    svg {
      ${tw`h-8 w-8 text-white fill-current`}
    }
  `
  return (
    <li className="mt-6 md:mt-0">
      <div className="flex">
        <div className="flex-shrink-0">
          <div
            css={[
              listIconStyles,
              props.className ? props.className : ``,
              props.color === "gray" && tw`bg-gray-500 text-gray-100`,
              props.color === "pink" && tw`bg-pink-500 text-pink-100`,
              props.color === "red" && tw`bg-red-500 text-red-100`,
              props.color === "orange" && tw`bg-orange-500 text-orange-100`,
              props.color === "yellow" && tw`bg-yellow-500 text-yellow-100`,
              props.color === "green" && tw`bg-green-500 text-green-100`,
              props.color === "teal" && tw`bg-teal-500 text-teal-100`,
              props.color === "blue" && tw`bg-blue-500 text-blue-100`,
              props.color === "purple" && tw`bg-purple-500 text-purple-100`,
              props.color === "indigo" && tw`bg-indigo-500 text-indigo-100`,
            ]}
          >
            {props.svg}
          </div>
        </div>

        <div className="ml-4">{props.children}</div>
      </div>
    </li>
  )
}

// =================CARD GROUP================
const CardGroupLeft = props => {
  const imgStyle = css`
    ${tw`w-full h-auto object-cover`}
    img {
      ${tw`rounded-t-lg lg:rounded-t-none lg:rounded-tl-lg`}
    }
  `
  return (
    <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
      <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
        <div className="flex-1 flex flex-col">
          <div className="bg-white">
            <GatsbyImage
              alt={props.alt}
              image={props.gatsbyImageData}
              css={[imgStyle]}
            />
          </div>

          <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
            {props.children}
            <div className="mt-8">
              <PageButton to={props.to} white>
                {props.linktitle}
              </PageButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CardGroupRight = props => {
  const imgStyle = css`
    ${tw`w-full h-auto object-cover`}
    img {
      ${tw`rounded-t-lg lg:rounded-t-none lg:rounded-tr-lg`}
    }
  `
  return (
    <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
      <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
        <div className="flex-1 flex flex-col">
          <div className="bg-white">
            <GatsbyImage
              alt={props.alt}
              image={props.gatsbyImageData}
              css={[imgStyle]}
            />
          </div>
          <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
            {props.children}
            <div className="mt-8">
              <PageButton to={props.to} white>
                {props.linktitle}
              </PageButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const CardGroupMain = props => {
  const imgStyle = css`
    ${tw`rounded-t-lg w-full h-auto object-cover`}
    img {
      ${tw`rounded-t-lg`}
    }
  `
  return (
    <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
      <div className="relative z-10 rounded-lg shadow-xl">
        <div
          className={`pointer-events-none absolute inset-0 rounded-lg border-2 ${props.bordercolor} z-20`}
        ></div>
        <div className="absolute inset-x-0 top-0 transform translate-y-px z-40">
          <div className="flex justify-center transform -translate-y-1/2">
            <span
              className={`inline-flex rounded-full ${props.pillcolor} px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white`}
            >
              {props.pill}
            </span>
          </div>
        </div>
        <div className="bg-white rounded-t-lg">
          <GatsbyImage
            alt={props.alt}
            image={props.gatsbyImageData}
            css={[imgStyle]}
          />
        </div>
        <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
          {props.children}
          <div className="mt-10">
            <PageButton to={props.to} dark>
              {props.linktitle}
            </PageButton>
          </div>
        </div>
      </div>
    </div>
  )
}
export {
  Block,
  Header,
  Section,
  CardBody,
  CardImage,
  CardSub,
  CardList,
  CardLi,
  IconList,
  Card,
  CardWrap,
  PillRow,
  CardGroupLeft,
  CardGroupRight,
  CardGroupMain,
}
