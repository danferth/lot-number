import React from "react"
import "twin.macro"
import { P, H3 } from "../../el/appnotetypography"
// icons

const CertProduct = props => {
  return (
    <div>
      <H3>Product</H3>
      <P>
        <span tw="mr-1.5 font-semibold print:text-black print:text-xs">
          PN:
        </span>
        <i>{props.prodData.part_number}</i>
        {!props.norev && (
          <>
            <span tw="ml-2.5 mr-1.5 font-semibold print:text-black print:text-xs">
              Rev:
            </span>
            <i>{props.prodData.revision}</i>
          </>
        )}

        <br />
        <span tw="font-semibold print:text-black print:text-xs mt-3 block">
          Description:
        </span>
        {props.customModifier === "standard"
          ? props.prodData.title
          : props.prodData.modified_description[props.customModifier].title}
        <br />
        {props.customModifier === "standard"
          ? props.prodData.desc_main
          : props.prodData.modified_description[props.customModifier].desc_main}
        <br />
        {props.customModifier === "standard"
          ? props.prodData.desc_sub
          : props.prodData.modified_description[props.customModifier].desc_sub}
        {!props.nolot && (
          <>
            <span tw="font-semibold print:text-black print:text-xs mt-3 block">
              Lot Number:
            </span>
            <span tw="text-sm font-mono text-gray-700 tracking-wide">
              {props.lotData.lot_number}
            </span>
          </>
        )}
      </P>
    </div>
  )
}

export default CertProduct
