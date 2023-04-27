import React from "react"
import "twin.macro"
import { P } from "../../el/appnotetypography"
import CertFooter from "./certfooter"
import CertProduct from "./certproduct"
import { CertWrap, CertBody } from "./certbody"
const Origin = props => {
  return (
    <CertWrap title="Certificate of Origin">
      <CertBody>
        <P>
          Thomson Instrument Company certifies that the products indicated below
          are being manufactured exclusively in the United States of America.
        </P>

        <CertProduct
          customModifier={props.customModifier}
          prodData={props.prodData}
          lotData={props.lotData}
        />
      </CertBody>
      <CertFooter
        signDate={props.lotData.sign_date}
        signee={props.lotData.signee}
        id="TIC-F-085.2-02"
        revision="A"
        effectiveDate="01/03/2022"
      />
    </CertWrap>
  )
}

export default Origin
