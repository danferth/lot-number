import React from "react"
import { Block, Section } from "./mastercard"
import { P } from "../el/typography"
import tw from "twin.macro"

const Faq = props => {
  return (
    <Block theme="whitefull">
      <Section general flex noheader normal>
        <div className="border-t-2 border-gray-200">
          <dl>{props.children}</dl>
        </div>
      </Section>
    </Block>
  )
}

const Dt = props => {
  const Question = () => {
    return { __html: props.question }
  }
  return (
    <div tw="mt-8 border-t first-of-type:border-0 border-gray-200 pt-6 first-of-type:pt-0 md:grid md:grid-cols-12 md:gap-8">
      <dt
        className="text-base leading-6 font-medium text-gray-900 md:col-span-5"
        dangerouslySetInnerHTML={Question()}
      ></dt>
      <dd className="mt-2 md:mt-0 md:col-span-7">{props.children}</dd>
    </div>
  )
}
const Dd = tw(P)`first-of-type:mt-0`
const Question = tw.p`mt-6 mb-4 md:w-5/12 text-base leading-6 font-medium text-gray-900`
export { Faq, Dt, Dd, Question }
