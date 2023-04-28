import React from "react"

import { P, List, Li } from "../../el/appnotetypography"
import CertFooter from "./certfooter"
import CertProduct from "./certproduct"
import { CertWrap, CertBody, CertTail } from "./certbody"
const Quality = props => {
  return (
    <CertWrap
      title="Certificate of Quality"
      subtitle="Thomson Instrument Company certifies that this Product meets the following criteria:"
    >
      <CertBody>
        <CertProduct
          customModifier={props.customModifier}
          prodData={props.prodData}
          lotData={props.lotData}
        />

        <P>We, the seller, Thomson Instrument Company certify that the,</P>

        <List ol>
          <Li>
            Items furnished on referenced Lot number listed above, were produced
            under controlled conditions and complies to all applicable drawing
            and/or specifications for which test records and/or inspection
            records are on file.
          </Li>

          <Li>
            All process and evaluation operations have been accepted by the
            Quality Control department and verified by Quality Assurance to be
            in compliance with our Quality Management System, certifying to meet
            all general performance specifications stated in our web page
            catalogue at www.htslabs.com.
          </Li>
        </List>
      </CertBody>
      <CertTail>
        All Thomson Instrument Company labware is for lab use and manufacturing.
      </CertTail>
      <CertFooter
        signDate={props.lotData.sign_date}
        signee={props.lotData.signee}
        id="TIC-F-085.2-06"
        revision="A"
        effectiveDate="01/03/2022"
      />
    </CertWrap>
  )
}

export default Quality
