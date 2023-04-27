import React from "react"
import "twin.macro"
import { H3, P, AppTable } from "../../el/appnotetypography"
import CertFooter from "./certfooter"
import CertProduct from "./certproduct"
import { CertWrap, BodyColumn, CertBodyColumns, CertTail } from "./certbody"
const Analysis = props => {
  return (
    <CertWrap
      columns
      title="Certificate of Analysis"
      subtitle="Thomson Instrument Company certifies that this Product meets the following criteria:"
    >
      <CertBodyColumns>
        <BodyColumn>
          <CertProduct
            customModifier={props.customModifier}
            prodData={props.prodData}
            lotData={props.lotData}
          />

          <H3>Materials of Construction</H3>
          <P>
            All of the materials used in the construction of this product have
            been tested and met the requirements of the United States Food and
            Drug Administration (FDA) for food and beverage contact in 21 CFR
            177.
          </P>

          <H3>AUDIT CRITERIA</H3>
          <P>
            Audit criteria tests are conducted on a routine basis as appropriate
            for each configuration manufactured.
          </P>

          <H3>LOT CRITERIA</H3>
          <P>
            The manufacturing lot was sampled, tested, and released by Quality
            Assurance for the following characteristics:
          </P>
          <AppTable>
            <tbody>
              <tr>
                <td tw="text-left!">Critical Dimensions</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td tw="text-left!">Appearance</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td tw="text-left!">Cleanliness</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td tw="text-left!">Packaging Integrity</td>
                <td>Pass</td>
              </tr>
            </tbody>
          </AppTable>
        </BodyColumn>
        <BodyColumn>
          <H3>Heavy Metals</H3>
          <P>
            The resins used in the manufacture of Thomson Instrument Company do
            not require reporting under the Superfund Amendment and
            Reauthorization Act (SARA) Title III, Section 313. They would pass
            Toxicity Characteristic Leaching Procedure (TCLP) testing.
          </P>
          <H3>Animal-Origin Free Statement</H3>
          <P>
            This product is manufactured from synthetic or manufactured
            materials and does not contain any raw materials produced from, or
            substances derived from animal origin and is free from Transmissible
            Spongiform Encephalopathy (TSE) and Bovine Spongiform Encephalopathy
            (BSE).
          </P>
          {props.sterile && (
            <>
              <H3>Sterilization</H3>
              <P>
                This lot has been irradiated to achieve a sterility assurance
                level (SAL) of 10-6. Sterilization of this product has been
                validated and is routinely audited based on ANSI/AAMI/ISO 11137:
                Sterilization of health care products – Radiation.
              </P>

              <H3>Pyrogens</H3>
              <P>
                Representative samples of this product have been tested for
                endotoxins in accordance with USP &lt;85&gt; Bacterial
                Endotoxins Lest and have been found to contain less than 0.02
                EU/mL.
              </P>
            </>
          )}
          <H3>Expiration Date</H3>
          <P>{props.lotData.expiration_date}</P>

          <H3>Release Date</H3>
          <P>{props.lotData.release_date}</P>
        </BodyColumn>
      </CertBodyColumns>
      <CertTail>
        All Thomson Instrument Company labware is for lab use and manufacturing.
      </CertTail>
      <CertFooter
        signDate={props.lotData.sign_date}
        signee={props.lotData.signee}
        id="TIC-F-085.2-10"
        revision="A"
        effectiveDate="01/03/2022"
      />
    </CertWrap>
  )
}

export default Analysis
