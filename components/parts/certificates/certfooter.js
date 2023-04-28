import React from "react"

// icons
import PhoneIcon from "../../../images/svg/icons/phone.svg"
import FaxIcon from "../../../images/svg/icons/fax.svg"
import MarkIcon from "../../../images/svg/icons/mark.svg"
import GlobeIcon from "../../../images/svg/icons/globe.svg"

const CertFooter = props => {
  const iconStyles = css`
    ${tw`h-4 w-auto stroke-current mr-1.5 inline-block`}
  `
  return (
    <div className="mt-8">
      <div className="grid gap-y-4 md:gap-y-0 md:gap-x-6 grid-cols-1 md:grid-cols-2 print:block">
        <div className="col-span-1 mb-8 md:mb-0 print:w-1/2 print:pr-4 print:inline-block">
          <p className="handwritten italic text-base text-gray-600 text-center">
            {props.signee}
          </p>
          <p className="text-xs text-gray-600 text-center border-t border-gray-300 pt-1.5">
            Quality Assurance
          </p>
        </div>
        <div className="col-span-1 flex flex-col place-content-end print:w-1/2 print:pl-4 print:inline-block">
          <p className="italic text-sm text-gray-600 text-center">
            {props.signDate}
          </p>
          <p className=" text-xs text-gray-600 text-center border-t border-gray-300 pt-1.5">
            Date
          </p>
        </div>
      </div>
      <footer>
        <div className="pt-8">
          <div className="text-xs text-center space-x-8 text-gray-600">
            <span>
              <GlobeIcon css={iconStyles} />
              htslabs.com
            </span>
            <span>
              <MarkIcon css={iconStyles} />
              1121 South Cleveland Street • Oceanside, CA 92054
            </span>
            <span>
              <PhoneIcon css={iconStyles} />
              760 757.8080
            </span>
            <span>
              <FaxIcon css={iconStyles} />
              760 757.9367
            </span>
          </div>
        </div>
        <div className="mt-1.5 text-xs text-gray-600 text-center space-x-8">
          <span>{props.id}</span>
          <span>Revision: {props.revision}</span>
          <span>Effective Date: {props.effectiveDate}</span>
        </div>
      </footer>
    </div>
  )
}

export default CertFooter
