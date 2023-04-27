import React from "react"
import tw, { css } from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import { H2, H5, P } from "../el/typography"
import { PageButton, PillLink } from "../el/button"
import Fade from "react-reveal"
import { Block, Section } from "../ui/mastercard"
/*
<SectionCTA
    [[normal, snug, tight], [white, light, dark]]
    pill="New for 2020"
    to="/rc"
    button={`Visit ${logo.siteMetadata.brand.rc}`}
>
  text and what not.....
</SectionCTA>
*/

const SectionCTA = props => {
  return (
    <div
      css={[
        tw`relative mx-auto px-4 sm:px-6 lg:px-8`,
        props.theme === "whitefull" && tw`bg-gray-50`,
        props.theme === "lightfull" && tw`bg-gray-200`,
        props.theme === "darkfull" && tw`bg-gray-900`,
        props.normal && tw`py-5 sm:pt-8 sm:pb-10 xl:pt-10 xl:pb-12`,
        props.snug && tw`py-3 sm:pt-4 sm:pb-6 xl:pt-8 xl:pb-10`,
        props.tight && tw`py-0 sm:py-0 xl:py-0`,
      ]}
    >
      <div className="max-w-md mx-auto lg:max-w-5xl">
        <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div className="flex-1">
            <div>
              <PillLink
                to={props.to}
                color={props.pillcolor}
                tw="px-4 py-1 text-sm font-semibold uppercase"
              >
                {props.pill}
              </PillLink>
            </div>
            <div className="mt-4 text-lg leading-7 text-gray-600">
              {props.children}
            </div>
          </div>
          <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
            <PageButton white to={props.to}>
              {props.button}
            </PageButton>
          </div>
        </div>
      </div>
    </div>
  )
}

const ContactCTA = props => {
  const CTAstyles = css`
    ${tw`w-full h-full`}
  `
  return (
    <Block theme="darkfull">
      <Section theme="darkfull" general noheader grid gap>
        <div className="w-auto -mx-4 sm:-mx-6 lg:mr-0 lg:-ml-8 xl:ml-0 overflow-hidden h-56 bg-blue-600 sm:h-72 md:h-full md:col-span-4">
          <StaticImage
            css={[CTAstyles]}
            src="../../images/page/marketing/scientist-01.jpg"
            alt="Thomson Solutions At Work"
            placeholder="blurred"
            transformOptions={{
              duotone: { highlight: "#2473B3", shadow: "#003959", opacity: 75 },
            }}
          />
        </div>

        <div className="md:col-span-4 pt-2.5 sm:pt-4 pb-8">
          <Fade>
            <H5 tw="text-gray-300">{props.cta}</H5>
            <H2 tw="text-white">{props.title}</H2>
            <P hero tw="text-gray-300">
              {props.children}
            </P>
          </Fade>
          <Fade bottom>
            <div className="mt-8 inline-block">
              <PageButton to="/form/contact" white>
                {props.button}
              </PageButton>
            </div>
          </Fade>
        </div>
      </Section>
    </Block>
  )
}

const SeriesCTA = props => {
  return (
    <div css={[tw`shadow-inner`, props.light ? tw`bg-white` : tw`bg-gray-800`]}>
      <div
        css={[
          tw`max-w-screen-xl mx-auto py-16 px-4  sm:px-6 lg:px-8`,
          props.more ? tw`sm:py-20` : tw`sm:py-24`,
        ]}
      >
        <div
          css={[
            tw``,
            props.more
              ? tw`lg:grid lg:grid-cols-3 lg:gap-8`
              : tw`lg:grid lg:grid-cols-2 lg:gap-8`,
          ]}
        >
          <h2
            css={[
              tw`text-3xl leading-9 font-extrabold max-w-md mx-auto text-center lg:max-w-xl lg:text-left `,
              props.light ? tw`text-gray-800` : tw`text-gray-100`,
              props.more ? tw`col-span-1` : tw``,
            ]}
          >
            {props.title}
          </h2>
          <div
            css={[
              tw`flow-root mt-8 lg:mt-0`,
              props.more ? tw`col-span-2` : tw`self-center`,
            ]}
          >
            <div
              css={[
                props.more
                  ? tw`grid gap-3 md:gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3`
                  : tw`grid gap-3 md:gap-8 grid-cols-1 md:grid-cols-2 `,
              ]}
            >
              <Fade bottom>{props.children}</Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { SectionCTA, ContactCTA, SeriesCTA }
