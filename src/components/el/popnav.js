import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NavButton from "./navbutton"
import tw from "twin.macro"

const PopNav = () => {
  const data = useStaticQuery(graphql`
    {
      logo: site {
        siteMetadata {
          brand {
            uyf
            singlestep
            rc
            plasmid
            og
            nano
            extreme
            extractor
            lowevap
            standard
            airotop
          }
        }
      }
    }
  `)
  const { logo } = data
  return (
    <>
      <PopMenuItem>
        <PopText>
          <PopTitle>{logo.siteMetadata.brand.uyf} System</PopTitle>
          <PopDescription>
            Designed for <em>E. coli</em> & microbial cell culture, providing
            superior results when all components are used simultaneously.
          </PopDescription>
          <PopLinks>
            <PopLink color="indigo" to="/uyf">
              Flasks
            </PopLink>
            <PopLink color="indigo" to="/uyf/plasmid">
              {logo.siteMetadata.brand.plasmid} Media
            </PopLink>
            <PopLink color="indigo" to="/uyf/airotop">
              {logo.siteMetadata.brand.airotop} Seals
            </PopLink>
            <PopLink color="indigo" to="/uyf/accessoriesuyf">
              Accessories
            </PopLink>
          </PopLinks>
        </PopText>
      </PopMenuItem>
      <PopMenuItem>
        <PopText>
          <PopTitle>{logo.siteMetadata.brand.og} System</PopTitle>
          <PopDescription>
            Designed for mammalian & insect cell culture supports a 50-60% fill
            volume.
          </PopDescription>
          <PopLinks>
            <PopLink color="purple" to="/og">
              Flasks
            </PopLink>
            <PopLink color="purple" to="/og/special">
              Special Flasks
            </PopLink>
            <PopLink color="purple" to="/og/tc">
              Transfer Caps
            </PopLink>
            <PopLink color="purple" to="/rc">
              {logo.siteMetadata.brand.rc} Caps
            </PopLink>
            <PopLink color="purple" to="/og/accessoriesog">
              Accessories
            </PopLink>
          </PopLinks>
        </PopText>
      </PopMenuItem>
      <PopMenuItem>
        <PopText>
          <PopTitle>Filter Vials</PopTitle>
          <PopDescription>
            15 seconds, to filtered samples in an autosampler-ready vial.
          </PopDescription>
          <PopLinks>
            <PopLink color="teal" to="/fv/extreme">
              {logo.siteMetadata.brand.extreme}
            </PopLink>
            <PopLink color="teal" to="/fv/standard">
              {logo.siteMetadata.brand.standard}
            </PopLink>
            <PopLink color="teal" to="/fv/nano">
              {logo.siteMetadata.brand.nano}
            </PopLink>
            <PopLink color="teal" to="/fv/lowevap">
              {logo.siteMetadata.brand.lowevap}
            </PopLink>
            <PopLink color="teal" to="/fv/extractor">
              {logo.siteMetadata.brand.extractor}
            </PopLink>
            <PopLink color="teal" to="/fv/accessoriesfv">
              Accessories
            </PopLink>
          </PopLinks>
        </PopText>
      </PopMenuItem>
      <PopMenuItem>
        <PopText>
          <PopTitle>Collection & Filter Plates</PopTitle>
          <PopDescription>
            Ideal for biological as well as analytical sample preparation.
          </PopDescription>
          <PopLinks>
            <PopLink color="pink" to="/wp">
              Well Plates
            </PopLink>
            <PopLink color="pink" to="/fp">
              Filter Plates
            </PopLink>
            <PopLink color="pink" to="/seals">
              Capmats, Seals & Lids
            </PopLink>
          </PopLinks>
        </PopText>
      </PopMenuItem>
      <PopMenuItem>
        <PopText>
          <PopTitle>Glassware</PopTitle>
          <PopDescription>Caps, Vials, & Blocks</PopDescription>
          <PopLinks>
            <PopLink color="gray" to="/glassware">
              Glassware
            </PopLink>
          </PopLinks>
        </PopText>
      </PopMenuItem>
      <PopMenuItem>
        <PopText>
          <PopTitle>Empty Columns</PopTitle>
          <PopDescription>
            Different sized columns with wide mouth opening for sorbents &
            resins.
          </PopDescription>
          <PopLinks>
            <PopLink color="blue" to="/columns">
              {logo.siteMetadata.brand.singlestep}
            </PopLink>
          </PopLinks>
        </PopText>
      </PopMenuItem>
    </>
  )
}

const PopMenuItem = tw.div`lg:-m-3 px-0 py-4 lg:px-3 lg:py-1 flex items-start border-b border-gray-50 last:border-b-0 lg:border-0 transition`
const PopText = tw.div`space-y-2`
const PopTitle = tw.p`text-base leading-4 font-medium text-gray-900`
const PopDescription = tw.p`text-sm leading-tight text-gray-400`
const PopLinks = tw.div`text-sm lg:text-xs flex flex-wrap items-center justify-start`
const PopLink = props => {
  return (
    <NavButton
      square
      color={props.color}
      to={props.to}
      tw="mr-4 mb-4 lg:mr-2 lg:mb-2"
    >
      {props.children}
    </NavButton>
  )
}

export default PopNav
