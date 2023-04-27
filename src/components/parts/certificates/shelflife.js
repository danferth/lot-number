import React from "react"
import "twin.macro"
import { P } from "../../el/appnotetypography"
import CertFooter from "./certfooter"
import CertProduct from "./certproduct"
import { CertWrap, CertBody } from "./certbody"
const ShelfLife = props => {
  return (
    <CertWrap title="Certificate of Shelf Life">
      <CertBody>
        <P>
          Thomson Instrument Company certifies that the product indicated below,
          has a Shelf Life of 5 years from the date of manufacture or after
          sterilization release.
        </P>

        <CertProduct
          customModifier={props.customModifier}
          prodData={props.prodData}
          lotData={props.lotData}
        />
        <P>
          <b>Expiration Date</b>: {props.lotData.expiration_date}
        </P>
      </CertBody>
      <CertFooter
        signDate={props.lotData.sign_date}
        signee={props.lotData.signee}
        id=" TIC-F-085.2-04"
        revision="A"
        effectiveDate="01/03/2022"
      />
    </CertWrap>
  )
}

export default ShelfLife
