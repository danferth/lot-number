import React from "react"

import { H1, P } from "../../el/appnotetypography"
import TicIcon from "../../../images/svg/tic/ticWide.svg"
const CertWrap = props => {
  const contentStyle = css`
    min-height: 850px;
    ${tw`flex flex-col justify-between`}
  `
  return (
    <div className="bg-white rounded-md shadow-md pt-16 pb-16 px-10 print:p-0 print:rounded-none print:shadow-none">
      <div className="mb-8 print:mb-4">
        <div>
          <TicIcon className="h-8 w-auto text-blue-800 fill-current print:h-6" />
        </div>
        <div className="mt-12 print:mt-8">
          <H1 className="text-center">{props.title}</H1>
          {props.subtitle && <P className="text-center">{props.subtitle}</P>}
        </div>
      </div>
      <div css={contentStyle}>{props.children}</div>
    </div>
  )
}

const CertBody = props => {
  return (
    <div className="mb-8 w-2/3 print:w-10/12 print:mb-0 print:block">
      {props.children}
    </div>
  )
}
const CertBodyColumns = props => {
  return (
    <div className="grid gap-y-4 md:gap-y-0 md:gap-x-6 grid-cols-1 md:grid-cols-2 mb-8 print:mb-0 print:block">
      {props.children}
    </div>
  )
}
const BodyColumn = props => {
  return (
    <div className="col-span-1 print:w-1/2 print:pr-4 print:inline-block">
      {props.children}
    </div>
  )
}
const CertTail = props => {
  return <P className="text-center mb-8 print:mb-4">{props.children}</P>
}
export { CertWrap, CertBody, BodyColumn, CertBodyColumns, CertTail }
