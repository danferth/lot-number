import React from "react"
import "twin.macro"
import { P, List, Li } from "../../el/appnotetypography"
import CertFooter from "./certfooter"
import CertProduct from "./certproduct"
import { CertWrap, CertBody } from "./certbody"
const Compliance = props => {
  return (
    <CertWrap title="Certificate of Compliance">
      <CertBody>
        <CertProduct
          customModifier={props.customModifier}
          prodData={props.prodData}
          lotData={props.lotData}
        />

        <P>
          Thomson Instrument Company certifies that the Product listed above,
          meets the following criteria,
        </P>

        <List ol>
          <Li>
            Items furnished on referenced Lot number were produced under
            controlled conditions and comply to all applicable drawing and/or
            specifications for which test records and/or inspection records are
            on file.
          </Li>

          <Li>
            The manufacturing lot was sampled, tested, and released by Quality
            Assurance for the following characteristics:
            <List ol>
              <Li>Critical Dimensions</Li>
              <Li>Appearance</Li>
              <Li>Cleanliness</Li>
              <Li>Packaging Integrity</Li>
            </List>
          </Li>

          <Li>
            All process and evaluation operations have been accepted by the
            Quality Control department and verified by Quality Assurance to be
            in compliance with our Quality Management System, certifying to meet
            all general performance specifications stated in our web page
            catalogue at www.htslabs.com.
          </Li>
        </List>

        <P tw="text-center mb-12 print:mb-8">
          All Thomson Instrument Company labware is for lab use and
          manufacturing.
        </P>
      </CertBody>
      <CertFooter
        signDate={props.lotData.sign_date}
        signee={props.lotData.signee}
        id="TIC-F-085.2-07"
        revision="A"
        effectiveDate="01/03/2022"
      />
    </CertWrap>
  )
}

export default Compliance
