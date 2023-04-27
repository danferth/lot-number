import React, { useState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { graphql } from "gatsby"
import axios from "axios"
import "twin.macro"
import { Button } from "../../components/el/dashboard-button"
import { InputWrap, Error, CheckBox } from "../../components/el/dashboard-form"
import { FormAlert } from "../../components/el/alerts"
import useRemoveBackTotop from "../../components/useRemoveBackToTop"
import DashboardLayout from "../../components/dashboardlayout"
import { Disclaimer, H4 } from "../../components/el/typography"
import { Buffer } from "buffer"
import useRoles from "../../components/useRoles"
const Retrieval = ({ data }) => {
  useRoles("distributor")
  const { partNumbers } = data
  useRemoveBackTotop()

  //useForm
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      mixed_lot_nums: [],
    },
  })

  // document storage

  const documentData = useRef()
  const mixedLot = useRef(false)
  const mixedLotData = useRef([])
  const mixedLotNumbers = useRef()
  const productData = useRef()
  const customModifier = useRef()
  const [documentReady, setDocumentReady] = useState(false)
  const documentType = useRef([])
  const [containingLotsReady, setContainingLotsReady] = useState(false)
  const [getError, setGetError] = useState(false)
  const [getProdError, setGetProdError] = useState(false)
  const [docTypeError, setDocTypeError] = useState(false)
  const [thereWasAnError, setThereWasAnError] = useState(false)
  // encoding
  const crypt = data => {
    if (data !== null) {
      return Buffer.from(data).toString("base64")
    }
  }

  // retrieve document
  const getDocument = (pn, lot) => {
    const rslt = axios({
      method: "GET",
      url: `/api/retrievelot?pn=${pn}&lot=${lot}`,
    })
    return rslt
  }

  const getProductData = pn => {
    const pData = partNumbers.edges.filter(p => p.node.part_number === pn)
    if (pData.length > 0) {
      return pData[0].node
    } else {
      return "error"
    }
  }

  // get containing lot data
  const getContainingLotData = async lots => {
    const lotsToVerify = lots
    const verifyResults = []
    for (let i = 0; i < lotsToVerify.length; i++) {
      await axios({
        method: "GET",
        url: `/api/verifylot?lot=${lotsToVerify[i].lotNum}`,
      })
        .then(responce => {
          let temp = {
            ed: responce.data[0].expiration_date,
            ln: responce.data[0].lot_number,
            md: responce.data[0].manufacture_date,
            pn: responce.data[0].part_number,
            pr: responce.data[0].product_rev,
            rd: responce.data[0].release_date,
            sd: responce.data[0].sign_date,
            s: responce.data[0].signee,
          }
          return temp
        })
        .then(responce => {
          const docURL = `/dashboard/document?${Object.keys(responce)
            .map(key => {
              return key + "=" + crypt(responce[key])
            })
            .join("&")}&cm=${crypt(customModifier.current)}&dt=`

          let temp = { ...responce, documentURL: docURL }
          return temp
        })
        .then(responce => {
          verifyResults.push(responce)
        })
    }
    return verifyResults
  }

  // lotSubmit
  const lotSubmit = async data => {
    const tempData = getProductData(data.part_num)
    customModifier.current = data.custom_modifier
    if (tempData === "error") {
      setGetProdError(true)
    } else {
      productData.current = tempData
    }

    console.log(data.document_type)
    if (data.document_type.length > 0) {
      documentType.current = data.document_type
    } else {
      setDocTypeError(true)
    }
    if (tempData !== "error" && data.document_type.length > 0) {
      console.log("about to try a get")
      await getDocument(data.part_num, data.lot_num)
        .then(responce => {
          console.log(responce)
          if (responce.request.status === 200 && responce.data.length > 0) {
            documentData.current = {
              ed: responce.data[0].expiration_date,
              ln: responce.data[0].lot_number,
              md: responce.data[0].manufacture_date,
              pn: responce.data[0].part_number,
              pr: responce.data[0].product_rev,
              rd: responce.data[0].release_date,
              sd: responce.data[0].sign_date,
              s: responce.data[0].signee,
            }
            if (responce.data[0].mixed_lot) {
              mixedLot.current = responce.data[0].mixed_lot
              mixedLotNumbers.current = responce.data[0].mixed_lot_nums
            }
            return true
          }
          if (responce.data.length === 0) {
            console.log("the get error")
            setGetError(true)
            return false
          }
        })
        .then(responce => {
          if (!responce) {
            return false
          } else {
            console.log("then ran")
            const docURL = `/dashboard/document?${Object.keys(
              documentData.current
            )
              .map(key => {
                return key + "=" + crypt(documentData.current[key])
              })
              .join("&")}&cm=${crypt(customModifier.current)}&dt=`
            documentData.current = {
              ...documentData.current,
              documentURL: docURL,
            }
            return true
          }
        })
        .then(responce => {
          console.log(`responce from make links: ${responce}`)

          if (!responce) {
            return false
          } else {
            setDocumentReady(true)
          }
        })
    }
  }

  const resetEverything = () => {
    documentData.current = undefined
    mixedLot.current = false
    mixedLotData.current = []
    documentType.current = []
    setContainingLotsReady(false)
    setDocumentReady(false)
    setGetError(false)
    setDocTypeError(false)
    setGetProdError(false)
    setThereWasAnError(false)
    reset()
  }

  const documentName = abv => {
    switch (abv) {
      case "analysis":
        return "Certificate of Analysis"
      case "compliance":
        return "Certificate of Compliance"
      case "quality":
        return "Certificate of Quality"
      case "origin":
        return "Certificate of Origin"
      case "shelflife":
        return "Certificate of Shelf Life"
      case "latexfree":
        return "Latex free Statement"
      case "nitrosaminefree":
        return "Nitrosamine Free Statement"
      case "polycarbonatefree":
        return "Polycarbonate Free Statement"
      case "materialcomposition":
        return "Material Composition Statement"
      case "sterilizationprocess":
        return "Sterilization Process Statement"
      default:
        return abv
    }
  }

  useEffect(() => {
    getError && setThereWasAnError(true)
  }, [getError])
  useEffect(() => {
    getProdError && setThereWasAnError(true)
  }, [getProdError])
  useEffect(() => {
    docTypeError && setThereWasAnError(true)
  }, [docTypeError])
  return (
    <DashboardLayout
      noheader
      pageTitle="Certificate & Statements"
      title="Document Retrieval"
      pageMessage="Retrieve certificate & statements for distribution"
    >
      <div tw="grid grid-cols-12 gap-x-12">
        <div tw="col-span-6">
          <div tw="pb-8">
            <H4>Document Details</H4>
            <Disclaimer>
              Use the form below to retrieve certificates & statements
              (documents). You will need a valid part number and the
              corresponding lot number.
            </Disclaimer>
          </div>
          <form id="retrieval" onSubmit={handleSubmit(lotSubmit)}>
            {thereWasAnError && (
              <div tw="mb-4">
                <FormAlert
                  type="error"
                  className=""
                  title={`There was an Error`}
                >
                  {getError &&
                    "Lot number or part number is incorrect. Reset form to continue."}
                  {getProdError &&
                    "Not a valid product. Reset form to continue."}
                  {docTypeError &&
                    "At least one document type needs to be selected. Reset form to continue."}
                </FormAlert>
              </div>
            )}
            <div className="grid grid-cols-8 gap-x-4">
              <InputWrap
                className="col-span-4"
                id="part_num"
                label="Part Number"
              >
                <input
                  type="text"
                  id="part_num"
                  name="part_num"
                  ref={register({ required: true })}
                />
                {errors.part_num?.type === "required" && (
                  <Error>Part number is required</Error>
                )}
              </InputWrap>
              <InputWrap
                className="col-span-4"
                id="custom_modifier"
                label="Custom Modifier"
                message="rarely needed"
              >
                <select
                  id="custom_modifier"
                  tw="w-full"
                  name="custom_modifier"
                  ref={register()}
                >
                  <option value="standard">Standard (default)</option>
                  <option value="LifeNet">LifeNet</option>
                </select>
              </InputWrap>
              <InputWrap
                className="col-span-8 mt-6"
                id="lot_num"
                label="Lot Number"
              >
                <input
                  type="text"
                  id="lot_num"
                  name="lot_num"
                  ref={register({ required: true })}
                />
                {errors.lot_num?.type === "required" && (
                  <Error>Lot number is required</Error>
                )}
              </InputWrap>

              <div tw="col-span-8 mb-2">
                <H4>Document Type</H4>
                <Disclaimer className="mt-0">
                  Choose as many document types as needed.
                </Disclaimer>
              </div>

              <CheckBox
                wrapClassName="col-span-4"
                className=""
                label="Certificate of Analysis"
                id="document_type-Certificate of Analysis"
                name="document_type[]"
                ref={register()}
                value="analysis"
              />

              <CheckBox
                wrapClassName="col-span-4"
                className=""
                label="Certificate of Compliance"
                id="document_type-Certificate of Compliance"
                name="document_type[]"
                ref={register()}
                value="compliance"
              />

              <CheckBox
                wrapClassName="col-span-4"
                className=""
                label="Certificate of Quality"
                id="document_type-Certificate of Quality"
                name="document_type[]"
                ref={register()}
                value="quality"
              />

              <CheckBox
                wrapClassName="col-span-4"
                className=""
                label="Certificate of Origin"
                id="document_type-Certificate of Origin"
                name="document_type[]"
                ref={register()}
                value="origin"
              />

              <CheckBox
                wrapClassName="col-span-4"
                className=""
                label="Certificate of Shelf Life"
                id="document_type-Certificate of Shelf Life"
                name="document_type[]"
                ref={register()}
                value="shelflife"
              />

              <CheckBox
                wrapClassName="col-span-4"
                className=""
                label="Latex free Statement"
                id="document_type-Latex free Statement"
                name="document_type[]"
                ref={register()}
                value="latexfree"
              />

              <CheckBox
                wrapClassName="col-span-4"
                className=""
                label="Nitrosamine Free Statement"
                id="document_type-Nitrosamine Free Statement"
                name="document_type[]"
                ref={register()}
                value="nitrosaminefree"
              />

              <CheckBox
                wrapClassName="col-span-4"
                className=""
                label="Polycarbonate Free Statement"
                id="document_type-Polycarbonate Free Statement"
                name="document_type[]"
                ref={register()}
                value="polycarbonatefree"
              />

              <CheckBox
                wrapClassName="col-span-4"
                className=""
                label="Material Composition Statement"
                id="document_type-Material Composition Statement"
                name="document_type[]"
                ref={register()}
                value="materialcomposition"
              />

              <CheckBox
                wrapClassName="col-span-4"
                className=""
                label="Sterilization Process Statement"
                id="document_type-Sterilization Process Statement"
                name="document_type[]"
                ref={register()}
                value="sterilizationprocess"
              />
            </div>
            <div className="flex items-center justify-end space-x-8 mt-8 text-right">
              <span className="">
                <Button type="reset" onClick={() => resetEverything()}>
                  Reset
                </Button>
              </span>

              <span className="">
                <Button type="submit">Retrieve Document</Button>
              </span>
            </div>
          </form>
        </div>
        {/* results */}
        <div tw="col-span-6">
          <div tw="pb-8">
            <H4>Document Links</H4>
            <Disclaimer>
              When a valid document is retrieved, links will be generated below.
              Document links will open in a new tab for saving or printing.
            </Disclaimer>
          </div>
          {documentReady ? (
            <div tw="bg-white rounded px-4 pt-3 pb-24">
              <div tw="mb-4 bg-gray-100 px-2 pt-2 pb-1 rounded">
                <p className="pl-4 my-0 text-gray-600 underline text-xs">
                  Lot # {documentData.current.ln}
                </p>
                <div tw="mt-2.5">
                  {documentType.current.map((dt, index) => {
                    let link = crypt(dt)
                    if (
                      dt === "sterilizationprocess" &&
                      !productData.current.sterile
                    ) {
                      return (
                        <Disclaimer key={index} tw="pl-4 text-red-700 mt-1.5">
                          Non-sterile product, no {documentName(dt)} will be
                          produced.
                        </Disclaimer>
                      )
                    } else {
                      return (
                        <LotLink
                          key={index}
                          to={`${documentData.current.documentURL}${link}`}
                        >
                          {documentName(dt)}
                        </LotLink>
                      )
                    }
                  })}
                </div>
              </div>

              {mixedLot.current && (
                <div>
                  {!containingLotsReady && (
                    <div tw="bg-yellow-200 p-2.5 rounded my-4 flex items-center justify-start space-x-4">
                      <p tw="text-xs font-light text-yellow-800">
                        The retrieved lot is a mixed lot. Do you want to
                        retrieve the containing lot documents?
                      </p>

                      <Button
                        onClick={() => {
                          getContainingLotData(mixedLotNumbers.current).then(
                            result => {
                              mixedLotData.current = result
                              setContainingLotsReady(true)
                            }
                          )
                        }}
                      >
                        yes
                      </Button>
                    </div>
                  )}
                  {containingLotsReady &&
                    mixedLotData.current.map((lot, index) => {
                      let docURL = lot.documentURL
                      return (
                        <div
                          tw="mb-4 bg-gray-100 px-2 pt-2 pb-1 rounded"
                          key={index}
                        >
                          <p className="pl-4 my-0 text-gray-600 underline text-xs">
                            Containing Lot # {lot.ln}
                          </p>
                          <div tw="mt-2.5">
                            {documentType.current.map((dt, index) => {
                              let link = crypt(dt)
                              if (
                                dt === "sterilizationprocess" &&
                                !productData.current.sterile
                              ) {
                                return null
                              } else {
                                return (
                                  <LotLink key={index} to={`${docURL}${link}`}>
                                    {documentName(dt)}
                                  </LotLink>
                                )
                              }
                            })}
                          </div>
                        </div>
                      )
                    })}
                </div>
              )}
            </div>
          ) : (
            <div tw="bg-white rounded px-4 pt-3 pb-24">
              <Disclaimer>
                No documents have been retrieved. Use the form to retrieve a
                document set.
              </Disclaimer>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Retrieval

const LotLink = props => {
  return (
    <a
      className="mr-2.5 mb-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-light px-2.5 py-1.5 rounded-full transition inline-flex itens-center justify-start"
      target="_blank"
      rel="noreferrer"
      href={props.to}
    >
      {props.children}
    </a>
  )
}

export const query = graphql`
  {
    partNumbers: allQcProductsJson(filter: {}) {
      edges {
        node {
          id
          part_number
          sterile
        }
      }
    }
  }
`
