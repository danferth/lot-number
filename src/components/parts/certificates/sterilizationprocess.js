import React from "react"
import "twin.macro"
import { P } from "../../el/appnotetypography"
import CertFooter from "./certfooter"
import CertProduct from "./certproduct"
import { CertWrap, CertBody } from "./certbody"
const SterilizationProcess = props => {
  return (
    <CertWrap title="Product Sterilization Statement">
      <CertBody>
        <P>
          Thomson Instrument Company states that the product indicated below,
          has been irradiated to achieve a sterility assurance level (SAL) of
          10-6. Sterilization of this product has been validated and is
          routinely audited based on ANSI/AAMI/ISO 11137: Sterilization of
          health care products – Radiation.
        </P>

        <CertProduct
          customModifier={props.customModifier}
          prodData={props.prodData}
          lotData={props.lotData}
        />
        <P>
          <b>Release Date:</b> {props.lotData.release_date}
        </P>
      </CertBody>
      <CertFooter
        signDate={props.lotData.sign_date}
        signee={props.lotData.signee}
        id="TIC-F-085.2-03"
        revision="A"
        effectiveDate="01/03/2022"
      />
    </CertWrap>
  )
}

export default SterilizationProcess
