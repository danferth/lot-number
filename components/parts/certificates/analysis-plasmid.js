import React from "react"

import { P, List, Li, AppTable } from "../../el/appnotetypography"
import CertFooter from "./certfooter"
import CertProduct from "./certproduct"
import { CertWrap, CertBody } from "./certbody"
const AnalysisPlasmid = props => {
  return (
    <CertWrap title="Certificate of Analysis">
      <CertBody>
        <CertProduct
          customModifier={props.customModifier}
          prodData={props.prodData}
          lotData={props.lotData}
        />

        <P>
          <b>MSDS:</b> Available upon Request
          <br />
          <b>Shipping:</b> Ambient
          <br />
          <b>Storage:</b> Store Ambient at 15-30°C
          <br />
          <b>Application:</b> For use as a Microbiological growth medium in
          higher cell density cultures
          <br />
          <b>Expiration Date:</b> {props.lotData.expiration_date}
        </P>

        <P>We, the seller, Thomson Instrument Company certify that,</P>

        <P>
          This product is manufactured from synthetic or manufactured materials
          and does not contain any raw materials produced from, or substances
          derived from animal origin, this product is animal origin - free, and
          is also free from Transmissible Spongiform Encephalopathy (TSE) and
          Bovine Spongiform Encephalopathy (BSE).
        </P>

        <P>
          Thomson Instrument Company also certifies that this product meets the
          following criteria:
        </P>

        <AppTable>
          <thead>
            <tr>
              <th>TEST PARAMETERS</th>
              <th>SPECIFICATIONS</th>
              <th>RESULTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left!">
                pH<sup>1</sup>
              </td>
              <td colSpan={2}>For Information Only</td>
            </tr>
            <tr>
              <td className="text-left!">
                Sterility<sup>2</sup>
              </td>
              <td>Pass</td>
              <td>Pass</td>
            </tr>
            <tr>
              <td className="text-left!">Appearance</td>
              <td>Record appearances at production</td>
              <td>Clear, amber brown solution</td>
            </tr>
          </tbody>
        </AppTable>
        <List ol>
          <Li>
            Measured with a standard pH meter. Meters are calibrated daily using
            standards traceable to the National Institute of Standards
            Technology.
          </Li>
          <Li>Tested by the membrane filtration techniques.</Li>
        </List>

        <P>
          <b>NOTE:</b> This product is intended for lab use and manufacturing
          Use Only / Not for IVD Use. Utilization of this product apart from the
          labeled intended use may be a violation of Federal Law.
        </P>
      </CertBody>
      <CertFooter
        signDate={props.lotData.sign_date}
        signee={props.lotData.signee}
        id="TIC-F-085.2-08"
        revision="A"
        effectiveDate="01/10/2022"
      />
    </CertWrap>
  )
}

export default AnalysisPlasmid
