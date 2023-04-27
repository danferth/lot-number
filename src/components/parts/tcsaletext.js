import React from "react"
import { H4, Ol, Li } from "../el/typography"
import tw from "twin.macro"
import { FormAlert } from "../../components/el/alerts"
const TcSaleText = () => {
  return (
    <>
      <H4 tw="text-center">THOMSON TERMS & CONDITIONS OF SALE</H4>
      <FormAlert type="warning" className="mt-4" title="Notice">
        These Terms and Conditions apply to the sale of the Thomson products
        specified in any quote or purchase order (“Products”) by and between
        Thomson Instrument Company (“Thomson”) and the buyer (“Buyer”). These
        Terms and Conditions, any quote provided by Thomson to Buyer, and any
        accepted purchase order will constitute the entire agreement
        (“Agreement” ) between Thomson and Buyer with respect to the purchase,
        sale and delivery of the Products and supersedes all previous written or
        verbal agreements relating on this subject matter between the parties.
      </FormAlert>

      <Ol>
        <TcLi>
          <b>Orders</b>. All orders are subject to acceptance by Thomson. Once
          an order is accepted by Thomson, Buyer’s order cannot be canceled
          without the written consent of Thomson. Thomson will have the right to
          cancel and/or hold any or all orders placed by Buyer and any or all
          shipments of Product, regardless of any prior confirmation or
          acceptance by Thomson. Buyer may use its own purchase order form,
          however, any additional terms or conditions which may be added to the
          purchase order by Buyer, will have no legal force or effect whatsoever
          and are expressly rejected, unless otherwise agreed to in writing and
          no course of dealing, usage of trade, or course of performance will be
          relevant to explain or modify any term expressed in this Agreement.
        </TcLi>
        <TcLi>
          <b>Product Pricing, Shipping and Taxes</b>. For all Products ordered
          by Buyer and shipped or otherwise delivered by Thomson, Buyer agrees
          to pay Thomson the price of Products as set forth in the Quote and
          Order form provided by Thomson. Prices in the Quote and Order form are
          only valid for the sale of the specified quantities of Products listed
          in that particular form. Thomson reserves the right to change the
          prices of its products at any time. The Product prices in the Quote
          and Order form do not include shipping and handling, insurance or any
          applicable sales, use, value-added, excise and/or withholding taxes,
          customs duties, or import fees. All taxes, tariffs, customs and import
          fees (if applicable) and other charges imposed in connection with the
          sale and delivery of the Products, except income taxes imposed upon
          Thomson, will be paid directly by Buyer. In the event Thomson pays any
          such fees, taxes, tariffs or charges, Buyer will promptly reimburse
          Thomson therefor. If any prices for shipping, handling or taxes are
          listed in the quote, such prices shall be estimates only.
        </TcLi>
        <TcLi>
          <b>Payment</b>. Thomson shall invoice Buyer at the time of shipment
          for Products included in said shipment along with any applicable
          taxes, shipping and handling charges. Payment shall be due within
          thirty (30) days after Thomson’s shipment of such Products. If any
          payment under this Agreement is late, interest shall accrue on the
          past due amount at a rate equal to the lesser of (a) a rate of 1½ %
          per month, and (b) the maximum rate permitted by law. Time for any
          payments hereunder shall be of the essence.
        </TcLi>
        <TcLi>
          <b>Security Interest</b>. Buyer hereby grants Thomson, and Thomson
          hereby retains, a purchase money security interest and lien on the
          Products, wherever located, and all replacements or proceeds of the
          Products, until the invoice for the applicable Products is paid in
          full, including any late charges and costs of collection. Buyer
          consents to Thomson’s use of this Agreement, as well as Product
          invoices, as financing statements for protecting this security
          interest and appoints Thomson as Buyer’ s agent for service of
          process.
        </TcLi>
        <TcLi>
          <b>Delivery of Products</b>. Thomson will ship or deliver the Products
          to Buyer to the destination stated on the Quote and Order, in the
          quantities ordered, as soon as reasonably practicable. Thomson
          reserves the right to fill orders on a pro rata basis if inventory
          shortages of Products arise. All delivery dates for the Products are
          best estimates based on prevailing conditions when given and Thomson
          will not be in breach of this Agreement or otherwise liable to Buyer
          if it fails to meet any delivery dates. If Thomson, for any reason
          whatsoever, fails or is unable to deliver any Products ordered by
          Buyer and accepted by Thomson within the estimated delivery dates,
          then Buyer’s sole and exclusive remedy shall be the recovery of the
          purchase price, if any, paid by Buyer to Thomson for such Products.
          Thomson shall not incur any liability whatsoever for any delay in the
          delivery to the designated delivery location of any Products. In no
          event shall Thomson be liable for any punitive, incidental,
          consequential or other damages arising out of any failure to deliver
          any Products to Buyer or any delay in the delivery thereof. Each
          Product or group of Products will be packaged and labeled with
          Thomson’s label(s) and will be accompanied by Thomson’s user manual
          containing instructions with respect to the use, operation, and
          storage of the Product(s) (such packaging, labeling, and manual are
          collectively called the “Supplemental Materials”).
        </TcLi>
        <TcLi>
          <b>Risk of Loss For Delivery of Products to Buyer</b>. Thomson will
          ship all Products on an FOB origin basis (i.e., title to and all risk
          of loss of and damage to the Products will transfer from Thomson to
          Buyer upon Thomson placing the Products in the custody of the shipping
          agent, and shipping and handling costs incurred by Thomson will be
          added to Thomson’s invoice to Buyer for reimbursement).
        </TcLi>
        <TcLi>
          <b>Inspection and Acceptance</b>. Buyer will inspect and reject all
          items of defective Products within thirty (30) days after the date of
          Buyer’s receipt thereof. Buyer shall communicate to Thomson, in
          writing within thirty (30) days of receipt, if Buyer believes that any
          Product is defective or if there is a shortage or other nonconformance
          with the order. If Buyer fails to provide such a written documentation
          within the 30-day period, Buyer will be deemed conclusively to have
          accepted such Product. If the Products are not defective upon
          Thomson’s inspection of the same, Thomson may charge Buyer for any
          shipping, return or restocking fees incurred by Thomson. Thomson
          shall, in its sole and complete discretion, either replace the
          defective Products or issue a credit. Such credit, once issued by
          Thomson, may be applied against any current or future amount owed by
          Buyer to Thomson.
        </TcLi>
        <TcLi>
          <b>Warranties</b>.
          <Ol className="legal-list">
            <TcLi>
              <b>Thomson’s Limited Warranty</b>. Thomson warrants that (i) the
              Products operate in accordance with the descriptions contained in
              and on the Supplemental Materials, and (ii) the Supplemental
              Materials correctly describe and explain the Products and the
              purposes, use, and operation of the Products. The provisions of
              Section 7 above shall be the sole and exclusive remedy available
              to Buyer with respect to any Product that fails to meet the
              warranties in this Section 8.1.
            </TcLi>
            <TcLi>
              <b>Disclaimer of Warranties</b>. THOMSON IS SELLING THE PRODUCTS
              AND SUPPLEMENTAL MATERIAL UNDER THIS AGREEMENT “AS IS.” EXCEPT FOR
              THE LIMITED WARRANTY SET FORTH HEREIN IN SECTION 8.1, THOMSON
              HEREBY SPECIFICALLY DISCLAIMS ANY WARRANTIES, EXPRESS OR IMPLIED,
              INCLUDING, WITHOUT LIMITATION, THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT AND
              NONVIOLATION OF THIRD-PARTY RIGHTS, AND ANY WARRANTIES THAT MAY
              ARISE DUE TO COURSE OF PERFORMANCE, COURSE OF DEALING OR USAGE OF
              TRADE, WHETHER RELATED TO PRODUCTS, OR ANY THOMSON MARKETING
              MATERIAL, AS APPLICABLE, OR OTHERWISE.
            </TcLi>
          </Ol>
        </TcLi>

        <TcLi>
          <b>Limitation of Liability</b>. IN NO EVENT WILL THOMSON BE LIABLE TO
          BUYER FOR ANY INCIDENTAL, CONSEQUENTIAL OR SPECIAL DAMAGES, INCLUDING
          BUT NOT LIMITED TO ANY LOST PROFITS, LOST SAVINGS, OR OTHER INCIDENTAL
          DAMAGES, ARISING OUT OF THE USE OR INABILITY TO USE, DAMAGED
          REPUTATION, OR RECALL EXPENSES WHETHER BASED ON BREACH OF WARRANTY OR
          OTHER CONTRACT, NEGLIGENCE OR OTHER TORT, OR OTHERWISE, OR THE
          DELIVERY OF OR FAILURE TO DELIVER, ANY OF THE PRODUCTS OR COMPONENTS,
          EVEN IF THOMSON HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          THE FOREGOING LIMITATION OF LIABILITY WILL REMAIN IN FULL FORCE AND
          EFFECT REGARDLESS OF WHETHER BUYER’S REMEDIES HEREUNDER ARE DETERMINED
          TO HAVE FAILED OF THEIR ESSENTIAL PURPOSE. THE ENTIRE LIABILITY OF
          THOMSON, AND THE SOLE AND EXCLUSIVE REMEDY OF BUYER, FOR ANY CLAIM OR
          CAUSE OF ACTION ARISING HEREUNDER (WHETHER IN CONTRACT, TORT, OR
          OTHERWISE) WILL NOT EXCEED THE PURCHASE PRICE PAID FOR THE PRODUCT
          WHICH IS THE SUBJECT OF SUCH CLAIM OR CAUSE OF ACTION.
        </TcLi>
        <TcLi>
          <b>Confidentiality</b>.
          <Ol ClassName="legal-list">
            <TcLi>
              <b>Confidential Information</b>. With respect to this Agreement,
              “Confidential Information” means any proprietary, confidential
              information whether or not patentable or copyrightable, and
              whether or not disclosed verbally, visually, in writing, or in
              other tangible form, which is owned or controlled by the
              disclosing party or any parent, subsidiary, affiliate, or a
              division of the disclosing party, including without limitation
              trade secrets, know-how, drawings, designs, products, product
              samples, product plans and formulations, prototypes, data,
              processes, formulas, methods, materials, analyses, technology,
              research, inventions, improvements, unpublished patent
              applications, ideas, engineering, manufacturing techniques,
              software, marketing strategy, business plans, financial
              information (including without limitation costs, pricing, and
              profits), licenses, buyers, strategic partners, suppliers,
              customer lists, and other customer information, without regard to
              the manner of preparation, transmittal, or storage of such
              information. Verbally and visually disclosed Confidential
              Information shall be noted as such at the time of the disclosure.
              Written disclosures of Confidential Information shall be marked as
              “confidential” or “proprietary” or other equivalent designation.
              Notwithstanding the foregoing, information that is disclosed by
              the disclosing party in writing without an appropriate letter,
              stamp or legend, or that is verbally or visually disclosed by the
              disclosing party, shall constitute Confidential Information of
              such party if (a) the disclosing party, within thirty (30) days
              after such disclosure, delivers to the receiving party a written
              document or documents describing the information, indicating that
              such information constitutes Confidential Information, and
              referencing the place and date of such verbal, visual, or written
              disclosure, or (b) information is of the type that is customarily
              or legally considered to be confidential information.
            </TcLi>
            <TcLi>
              <b>Nondisclosure of Confidential Information</b>. During the
              performance of this Agreement, each party may have access to or
              may be exposed to the Confidential Information of the other party.
              Except as provided in Section 10.3 below, that parties shall hold
              all Confidential Information in strict confidence and shall not
              directly or indirectly use, disclose or disseminate Confidential
              Information to any person or entity, except that Confidential
              Information may be used as needed and disclosed to those employees
              who require knowledge, solely for the purpose of performing the
              parties’ obligations in accordance with this Agreement and who are
              obligated to protect the confidentiality thereof consistent with
              the party’s obligations under this Agreement. Each party shall be
              responsible for any breach of this Section 10.2 by any of its
              employees. The parties agree to safeguard and protect all
              Confidential Information with at least the same means, methods,
              and degree of care that each party employs for the protection of
              its own confidential and/or proprietary information, but in no
              case less than a reasonable standard of care. Each party will
              immediately notify the other party upon discovery of any loss or
              unauthorized disclosure of Confidential Information.
            </TcLi>
            <TcLi>
              <b>Exceptions</b>. The provisions of Section 10.2, above, shall
              not apply to information that (i) is or becomes generally
              available to the public other than as a result of a breach of this
              Agreement by the receiving party or its employees or wrongful act
              of any third party; (ii) becomes available to the receiving party
              on a non-confidential basis from a third party source, provided
              such source is not bound by a confidentiality agreement with, or
              other contractual, legal, or fiduciary obligation of
              confidentiality to, the disclosing party, any Affiliate, or any
              other person or entity with respect to such information; (iii) is
              known to the receiving party on a non-confidential basis prior to
              receipt of the Confidential Information, as evidenced by the
              receiving party’s written records existing prior to the disclosure
              of the Confidential Information to the receiving party; (iv) is
              independently developed by the receiving party without reference
              to or reliance upon the Confidential Information, as evidenced by
              the receiving party’s records existing prior to the disclosure of
              the Confidential Information to the receiving party; or (v) is
              required to be disclosed pursuant to a lawful order, subpoena, or
              other process of a court or other governmental body of competent
              jurisdiction, provided that (A) the receiving party gives notice
              of the order, subpoena, or other process to the disclosing party
              as soon as practicable and by the most expedient means available
              (B) cooperates reasonably (at the disclosing party’s cost) with
              the disclosing party’s efforts to prevent disclosure of
              Confidential Information, (C) all reasonable legal means and
              remedies available to the parties to maintain Confidential
              Information in confidence have been exhausted, and (D) if
              disclosure of any Confidential Information is lawfully required,
              supply only that portion of the information which is legally
              necessary and make reasonable efforts to try to obtain
              confidential treatment for any such information required to be
              disclosed. For the purposes of this Section 10.3, Confidential
              Information shall not be deemed to be publicly available or
              already in the possession of the receiving party because
              disclosures concerning the same general subject matter are in the
              public domain or in the prior possession of the receiving party.
            </TcLi>
            <TcLi>
              <b>Return of Confidential Information</b>. The parties acknowledge
              and agree that all Confidential Information is and shall remain
              the property of the disclosing party. Within five (5) business
              days of the disclosing party’s request, the receiving party agrees
              (i) to return all Confidential Information, regardless of the
              form, together with all copies thereof; and (ii) that all
              documents, memoranda, notes, and other writings whatsoever
              prepared based upon, derived from, or pertaining to the
              Confidential Information shall be destroyed, regardless of form,
              and such destruction shall be certified in writing to the
              disclosing party by an authorized officer of the receiving party
              supervising said destruction.
            </TcLi>
          </Ol>
        </TcLi>

        <TcLi>
          <b>Indemnification</b>. Buyer will indemnify, defend, and hold
          harmless Thomson and its affiliates partners, officers, directors,
          agents, employees, subsidiaries, parents, successors and assigns,
          against any and all losses, claims, damages and expenses (including
          attorneys’ fees) arising out of or related to (a) Buyer’s
          modifications of and/or additions to Products; (b) Buyer’s breach of
          this Agreement or (c) Buyer ’ s omissions, misrepresentations, or
          negligence.
        </TcLi>
        <TcLi>
          <b>Relationship of the Parties</b>. No provision of this Agreement
          will or will be deemed to create a partnership, joint venture or other
          combination between Thomson and Buyer. Buyer and Thomson are
          independent contractors. Neither party will make any warranties or
          representations or assume any obligations on the other party’s behalf.
          Neither party is nor will claim to be a legal representative, partner,
          franchisee, agent or employee of the other party.
        </TcLi>
        <TcLi>
          <b>No Licenses Granted; Ownership of Rights</b>. The sale of Products
          to Buyer does not convey to Buyer any license or any other
          intellectual property rights in such Products, including but not
          limited to any rights under any patent, trademark, copyright, or trade
          secret(“Intellectual Property Rights”). Buyer acknowledges that, as
          between the parties, the Thomson is the sole and complete owner of any
          and all Intellectual Property Rights in and to the Products. To the
          extent that any of the Products are customized for Buyer, the parties
          agree that Thomson shall be the sole owner of any and all rights in
          and to any such customized Products, prototypes and tooling and any
          and all Intellectual Property Rights thereto. Distributor agrees that
          any improvements made to the Products, whether generated by Buyer or
          Thomson, and all right, title and interest to any such improvements
          and any and all Intellectual Property Rights thereto, shall inure to
          the benefit of Thomson and shall be assigned and is hereby assigned to
          Thomson for no additional consideration.
        </TcLi>
        <TcLi>
          <b>Restrictions On Use</b>. Buyer will use the Products furnished by
          Thomson solely in accordance with the terms of this Agreement and
          Buyer shall not, directly or indirectly, disassemble, decompile,
          reverse engineer, manufacture or analyze the physical construction of,
          any of the Products for any purpose, nor authorize, assist, or
          encourage others to do so.
        </TcLi>
        <TcLi>
          <b>Use Of Thomson Name</b>. Buyer may not use the Thomson name or
          other Thomson trademarks or refer to Buyer as an authorized seller or
          reseller of Thomson products, implying that Buyer and Thomson are
          partners, creating the impression that Thomson is affiliated with
          Buyer or has sponsored, authorized, approved or endorsed Buyer’s
          business, or any offer or any marketing, advertising or promotion
          thereof. Buyer may not register or use any domain name or business
          name containing or confusingly similar to any name or mark of
          Thomson’s. Buyer will not say or do anything to injure Thomson’s or
          its Product’s name or reputation.
        </TcLi>
        <TcLi>
          <b>Nonexclusive</b>. For the avoidance of all doubt, the sale of the
          Products to Buyer is not exclusive. Thomson reserves the right to sell
          the Products to any person and/or company throughout the world without
          limitation.
        </TcLi>
        <TcLi>
          <b>Assignment</b>. Buyer will not assign this Agreement or any right
          or interest under this Agreement, or delegate any obligation to be
          performed under this Agreement without Thomson’s prior written
          consent. Any attempted assignment without consent will be void.
        </TcLi>
        <TcLi>
          <b>Export; Re-Sale</b>. Buyer agrees that it will not export,
          re-export, resell, ship or divert directly or indirectly any Products
          in any form or technical data furnished hereunder without Thomson’s
          prior written approval.
        </TcLi>
        <TcLi>
          <b>Notices</b>. All notices must be in writing and delivered by
          overnight or express courier, facsimile with confirmation, or email if
          confirmed by the receiving party in writing and addressed to the
          parties at the contact information set forth in the Quote and Order
          above.
        </TcLi>
        <TcLi>
          <b>Applicable Law</b>. The Agreement will be governed by the laws of
          the State of California, without regard to conflict of law principles.
        </TcLi>
        <TcLi>
          <b>Arbitration of Disputes</b>. Any dispute or claim, in law or in
          equity, arising out of or relating to this Agreement or any
          relationship between the parties, no matter how described, pleaded or
          styled, shall be resolved through final, binding arbitration under the
          substantive and procedural requirements of the Federal Arbitration
          Act. The arbitration shall be conducted by a single, neutral
          arbitrator chosen by the parties, conducted under the Commercial
          Arbitration Rules of the American Arbitration Association, and
          conducted in San Diego County. The parties agree that the arbitrator,
          and not a court, shall have exclusive jurisdiction over the
          interpretation, validity, and scope of this arbitration agreement. The
          arbitrator’s decision shall be set forth in writing and shall set
          forth the essential findings and conclusions upon which the decision
          is based. Any remedy available from a court under the law shall be
          available in the arbitration. The award rendered by the arbitrator may
          be entered in any court having jurisdiction. Should either party
          refuse or neglect to choose an arbitrator or otherwise sincerely and
          in good faith participate in the arbitration process, then the
          arbitrator is empowered to proceed with one side alone. Neither party
          shall file or maintain any lawsuit in any court against the other, and
          agree that any suit filed in violation of this Agreement shall be
          dismissed by the court in favor of an arbitration conducted pursuant
          to this Agreement. The costs of the arbitration filing fee,
          arbitrator’s compensation, and facilities fees will be split by the
          parties. Each party shall pay for its own attorneys’ fees and costs.
          However, the arbitrator may award the prevailing party to recover fees
          and costs to the extent permitted by applicable law. If any provision
          of this arbitration agreement is adjudged to be void or otherwise
          unenforceable, in whole or in part, such adjudication shall not affect
          the validity of the remainder of the Agreement. If this arbitration
          agreement is declared unenforceable and cannot be administered,
          interpreted, or modified to be enforceable, the parties agree to waive
          any right to a jury trial with respect to any dispute to which this
          Agreement applies and any such dispute shall be commenced and
          maintained exclusively in the state or federal courts in the County of
          San Diego and the parties each consent to the personal jurisdiction of
          said courts. EACH PARTY UNDERSTANDS THE NATURE OF ARBITRATION, THAT
          ARBITRATION IS FINAL AND BINDING, AND EACH PARTY IS WAIVING CERTAIN
          RIGHTS, INCLUDING, BUT NOT LIMITED TO, THEIR RIGHT TO LITIGATE THEIR
          DISPUTE IN COURT, INCLUDING THEIR RIGHT TO A JURY TRIAL, DISCOVERY AND
          APPEAL.
        </TcLi>
        <TcLi>
          <b>Miscellaneous Provisions</b>. The section headings used herein are
          for convenience of reference only. If any provision of this Agreement
          is void or unenforceable, the remainder of this Agreement will remain
          in full force and will not be terminated. Neither party will be liable
          for any delays resulting from circumstances or causes beyond the
          party’s reasonable control. No addition to or modification of this
          Agreement will be effective unless made in writing and signed by the
          respective representatives of Thomson and Buyer. Any delay or failure
          to enforce at any time any provision of the Agreement will not
          constitute a waiver of the right thereafter to enforce each and every
          provision thereof. The rights and remedies expressly provided to
          Thomson herein are not exclusive, but are cumulative. The parties’
          rights and obligations which by their sense and context are intended
          to survive any termination or expiration of this Agreement will so
          survive.
        </TcLi>
      </Ol>
    </>
  )
}

const TcLi = tw(Li)`text-xs leading-snug`
export default TcSaleText
