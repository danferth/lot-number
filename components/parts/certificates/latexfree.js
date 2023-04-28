import React from "react"

import { P } from "../../el/appnotetypography"
import CertFooter from "./certfooter"
import CertProduct from "./certproduct"
import { CertWrap, CertBody } from "./certbody"
const LatexFree = props => {
  return (
    <CertWrap title="Latex Free Statement">
      <CertBody>
        <P>
          Thomson Instrument Company does not intentionally add or use Latex
          during the manufacturing and packaging of the product indicated below,
        </P>

        <CertProduct
          customModifier={props.customModifier}
          prodData={props.prodData}
          lotData={props.lotData}
          norev
          nolot
        />
        <P>
          Based upon our knowledge of our manufacturing process and information
          provided by our raw material suppliers, we would not expect Latex to
          be present in our final products.
        </P>
      </CertBody>
      <CertFooter
        signDate={props.lotData.sign_date}
        signee={props.lotData.signee}
        id=" TIC-F-085.2-12"
        revision="A"
        effectiveDate="01/03/2022"
      />
    </CertWrap>
  )
}

export default LatexFree
