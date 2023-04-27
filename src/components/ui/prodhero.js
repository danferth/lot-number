import React, { useContext } from "react"
import { StateContext } from "../el/provider"
import { GatsbyImage } from "gatsby-plugin-image"
import tw from "twin.macro"
import { PillLink, PillButton } from "../el/button"
const ProdHero = props => {
  return (
    <div
      className={props.className}
      tw="content bg-white border-b overflow-hidden z-10"
    >
      <div className="relative max-w-screen-2xl mx-auto ">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:ml-32 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28">
            <div className="text-left sm:text-center lg:text-left">
              {props.children}
            </div>
          </main>
          <svg
            className="z-0 hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>

        <div className="w-full lg:w-1/2 h-full lg:absolute lg:top-0 lg:right-0 bg-white">
          <GatsbyImage
            image={props.gatsbyImageData}
            className="productHeaderImage"
            tw="lg:static!"
            imagestyle="h-56 w-full sm:h-72 md:h-96 lg:w-auto lg:h-full"
            alt={props.alt}
          />
        </div>
      </div>
    </div>
  )
}

const TechStack = props => {
  const { stateSort, stateSample } = useContext(StateContext)
  const [sort, setSort] = stateSort // eslint-disable-line no-unused-vars
  const [sample, setSample] = stateSample // eslint-disable-line no-unused-vars
  return (
    <div className="mt-3 sm:mt-4 flex flex-col md:flex-row items-center md:justify-center lg:justify-start">
      {props.gi && (
        <PillLink
          square
          tw="md:mr-3 inline-flex"
          to={props.gi}
          color={props.color}
        >
          General Info
        </PillLink>
      )}
      {props.sort && (
        <PillLink
          square
          tw="md:mr-3 mt-3 md:mt-0 inline-flex"
          to="/an"
          color={props.color}
          onClick={() => setSort(props.sort)}
        >
          Technical Resources
        </PillLink>
      )}
      <PillLink
        square
        tw="md:mr-3 mt-3 md:mt-0 inline-flex"
        to="/form/samples"
        color={props.color}
        onClick={() => setSample(props.sample)}
      >
        Request A Sample
      </PillLink>
      {props.parts && (
        <PillButton
          square
          tw="mt-3 md:mt-0 inline-flex"
          color={props.color}
          onClick={() =>
            window.scrollTo({ top: props.parts, behavior: "smooth" })
          }
        >
          List of Parts
        </PillButton>
      )}
    </div>
  )
}
const Buttons = tw.div`mt-10 sm:flex sm:justify-center lg:justify-start`
export { ProdHero, TechStack, Buttons }
