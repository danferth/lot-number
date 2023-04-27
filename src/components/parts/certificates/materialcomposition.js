import React from "react"
import "twin.macro"
import { P } from "../../el/appnotetypography"
import CertFooter from "./certfooter"
import CertProduct from "./certproduct"
import { CertWrap, CertBody } from "./certbody"
const MaterialComposition = props => {
  return (
    <CertWrap title="Material Composition Statement">
      <CertBody>
        <P>
          Thomson Instrument Company states that the product indicated below, is
          manufactured with a polymer material.
        </P>

        <CertProduct
          customModifier={props.customModifier}
          prodData={props.prodData}
          lotData={props.lotData}
          norev
          nolot
        />
      </CertBody>
      <CertFooter
        signDate={props.lotData.sign_date}
        signee={props.lotData.signee}
        id="TIC-F-085.2-15"
        revision="A"
        effectiveDate="01/03/2022"
      />
    </CertWrap>
  )
}

export default MaterialComposition
