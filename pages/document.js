import React, { useState, useEffect, useRef, useContext } from "react"
import { StateContext } from "../../components/el/provider"
import { useRouter } from "next/router"
import data from "../../json/products.json"
import { Button } from "../../components/el/dashboard-button"
import Analysis from "../../components/parts/certificates/analysis"
import AnalysisPlasmid from "../../components/parts/certificates/analysis-plasmid"
import Compliance from "../../components/parts/certificates/compliance"
import Quality from "../../components/parts/certificates/quality"
import Origin from "../../components/parts/certificates/origin"
import ShelfLife from "../../components/parts/certificates/shelflife"
import LatexFree from "../../components/parts/certificates/latexfree"
import NitrosamineFree from "../../components/parts/certificates/nitrosaminefree"
import PolycarbonateFree from "../../components/parts/certificates/polycarbonatefree"
import MaterialComposition from "../../components/parts/certificates/materialcomposition"
import SterilizationProcess from "../../components/parts/certificates/sterilizationprocess"
import { Buffer } from "buffer"
const CertificateRequest = () => {
  const { stateIsUser } = useContext(StateContext)
  const [isUser] = stateIsUser
  const isBrowser = typeof window !== "undefined"
  const router = useRouter()
  useEffect(() => {
    isBrowser && !isUser && router.push("/")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { products } = data
  const customModifier = useRef()
  const productData = useRef()
  const lotData = useRef({
    expiration_date: "",
    lot_number: "",
    manufacture_date: "",
    part_number: "",
    product_rev: "",
    release_date: "",
    sign_date: "",
    signee: "",
  })
  const docType = useRef()
  const [documentReady, setDocumentReady] = useState(false)
  const [documentError, setDocumentError] = useState(false)
  // set product
  const getProductData = pn => {
    const pData = products.edges.filter(p => p.node.part_number === pn)
    return pData[0].node
  }

  // dcrypt
  const dcrypt = data => Buffer.from(data, "base64").toString("utf8")

  useEffect(() => {
    const pageQuery = new URLSearchParams(window.location.search)

    pageQuery.has("ed")
      ? (lotData.current.expiration_date = dcrypt(pageQuery.get("ed")))
      : setDocumentError(true)
    pageQuery.has("ln")
      ? (lotData.current.lot_number = dcrypt(pageQuery.get("ln")))
      : setDocumentError(true)
    pageQuery.has("md")
      ? (lotData.current.manufacture_date = dcrypt(pageQuery.get("md")))
      : setDocumentError(true)
    pageQuery.has("pn")
      ? (lotData.current.part_number = dcrypt(pageQuery.get("pn")))
      : setDocumentError(true)
    pageQuery.has("rd")
      ? (lotData.current.release_date = dcrypt(pageQuery.get("rd")))
      : setDocumentError(true)
    pageQuery.has("sd")
      ? (lotData.current.sign_date = dcrypt(pageQuery.get("sd")))
      : setDocumentError(true)
    pageQuery.has("s")
      ? (lotData.current.signee = dcrypt(pageQuery.get("s")))
      : setDocumentError(true)
    pageQuery.has("dt")
      ? (docType.current = dcrypt(pageQuery.get("dt")))
      : setDocumentError(true)
    pageQuery.has("pn")
      ? (productData.current = getProductData(dcrypt(pageQuery.get("pn"))))
      : setDocumentError(true)
    pageQuery.has("cm")
      ? (customModifier.current = dcrypt(pageQuery.get("cm")))
      : setDocumentError(true)

    setDocumentReady(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    documentError && navigate("/")
  }, [documentError])

  return (
    <div className="bg-gray-700 min-h-screen">
      <div className="py-8 print:hidden bg-gray-100">
        <div className="flex items-center justify-start max-w-4xl mx-auto px-4">
          <Button
            type="button"
            onClick={() => {
              window.print()
              return false
            }}
          >
            Print/Save
          </Button>
          <p className="text-gray-500 font-light text-sm ml-8">
            Use the "Print/Save" button to print or save the document as a PDF
            for distribution to customers and vendors. Do not use the URL link
            to send the document as this may cause an error on their end.
          </p>
        </div>
      </div>
      {documentReady && !documentError && (
        <div className="max-w-5xl mx-auto mt-8 mb-4">
          {docType.current === "analysis" &&
            productData.current.unique_document === false && (
              <Analysis
                prodData={productData.current}
                customModifier={customModifier.current}
                lotData={lotData.current}
                sterile={productData.current.sterile}
              />
            )}
          {docType.current === "analysis" &&
            productData.current.unique_document === true && (
              <AnalysisPlasmid
                prodData={productData.current}
                customModifier={customModifier.current}
                lotData={lotData.current}
              />
            )}
          {docType.current === "compliance" && (
            <Compliance
              prodData={productData.current}
              customModifier={customModifier.current}
              lotData={lotData.current}
            />
          )}
          {docType.current === "quality" && (
            <Quality
              prodData={productData.current}
              customModifier={customModifier.current}
              lotData={lotData.current}
            />
          )}
          {docType.current === "origin" && (
            <Origin
              prodData={productData.current}
              customModifier={customModifier.current}
              lotData={lotData.current}
            />
          )}
          {docType.current === "shelflife" && (
            <ShelfLife
              prodData={productData.current}
              customModifier={customModifier.current}
              lotData={lotData.current}
            />
          )}
          {docType.current === "latexfree" && (
            <LatexFree
              prodData={productData.current}
              customModifier={customModifier.current}
              lotData={lotData.current}
            />
          )}
          {docType.current === "nitrosaminefree" && (
            <NitrosamineFree
              prodData={productData.current}
              customModifier={customModifier.current}
              lotData={lotData.current}
            />
          )}
          {docType.current === "materialcomposition" && (
            <MaterialComposition
              prodData={productData.current}
              customModifier={customModifier.current}
              lotData={lotData.current}
            />
          )}
          {docType.current === "polycarbonatefree" && (
            <PolycarbonateFree
              prodData={productData.current}
              customModifier={customModifier.current}
              lotData={lotData.current}
            />
          )}
          {docType.current === "sterilizationprocess" &&
            productData.current.sterile && (
              <SterilizationProcess
                prodData={productData.current}
                customModifier={customModifier.current}
                lotData={lotData.current}
              />
            )}
          {docType.current === "sterilizationprocess" &&
            !productData.current.sterile && (
              <p className="text-white mx-auto text-lg">
                The product is non sterile, so no document was produced
              </p>
            )}
        </div>
      )}
    </div>
  )
}

export default CertificateRequest
