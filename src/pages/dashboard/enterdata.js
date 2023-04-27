import React, { useState, useContext, useEffect, useRef } from "react"
import { Hint } from "react-autocomplete-hint"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { graphql } from "gatsby"
import { StateContext } from "../../components/el/provider"
import axios from "axios"
import tw, { css } from "twin.macro"
import { Button, VerifyButton } from "../../components/el/dashboard-button"
import { InputWrap, Error, CheckBox } from "../../components/el/dashboard-form"

import useRemoveBackTotop from "../../components/useRemoveBackToTop"
import DashboardLayout from "../../components/dashboardlayout"
import Xicon from "../../images/svg/icons/x.svg"
import DashboardBreadcrumbs from "../../components/el/dashboardbreadcrumbs"
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid"
import useRoles from "../../components/useRoles"
import useIdentity from "../../components/useIdentity"
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const CertificateDashboard = ({ data }) => {
  const { siteUser } = useIdentity()
  const signature = siteUser ? siteUser.user_metadata.full_name : ""

  useRoles("editor")
  // remove back to top from page
  useRemoveBackTotop()

  //  partnumbers from graphQL
  const { partNumbers } = data

  // options for autocomplete
  const createAutocompleteOptions = () => {
    let rslt = []
    partNumbers.edges.map(el =>
      rslt.push({ id: el.node.id, label: el.node.part_number })
    )
    return rslt
  }
  const autocompleteOptions = createAutocompleteOptions()

  // state of form steps
  const { stateEnterDataStep, stateAlert } = useContext(StateContext)
  const [enterDataStep, setEnterDataStep] = stateEnterDataStep
  const [pageAlert, setPageAlert] = stateAlert // eslint-disable-line no-unused-vars
  const successAlert = (title, message) => {
    const alert = {
      button: false,
      type: "success",
      title: title,
      message: message,
    }
    setPageAlert(alert)
  }
  // date
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, "0")
  const mm = String(today.getMonth() + 1).padStart(2, "0") //January is 0!
  const yyyy = today.getFullYear()
  const currentDate = yyyy + "-" + mm + "-" + dd
  const expirationYear = yyyy + 5
  const expirationDate = expirationYear + "-" + mm

  //useForm
  const {
    register,
    handleSubmit,
    errors,
    formState,
    reset,
    control,
    setValue,
    getValues,
    trigger,
  } = useForm({
    defaultValues: {
      mixed_lot_nums: [{ lotNum: "" }, { lotNum: "" }],
    },
  })
  const { isSubmitSuccessful } = formState

  // field array for mixed lot numbers
  const { fields, append, remove } = useFieldArray({
    control,
    name: "mixed_lot_nums", // unique name for your Field Array
  })

  // mixed lot status
  const [isLotMixed, setIsLotMixed] = useState(false)
  // Validate part number
  const [validProduct, setValidProduct] = useState(false)
  const [validProductWarning, setValidProductWarning] = useState(false)
  // verify lot numbers
  const [verify, setVerify] = useState(0)
  const [verifyResults, setVerifyResults] = useState([])
  const lotDates = useRef([])

  const verifySingleLotNumbers = async () => {
    const values = getValues()
    const lotsToVerify = values.mixed_lot_nums
    if (verify === 2) {
      setVerifyResults([])
    }
    if (lotsToVerify.length > 0) {
      for (let i = 0; i < lotsToVerify.length; i++) {
        await axios({
          method: "GET",
          url: `/api/verifylot?lot=${lotsToVerify[i].lotNum}`,
        })
          .then(responce => {
            setVerifyResults(old => [...old, responce.data.length])
            if (responce.data.length > 0) {
              let datesToPush = [
                responce.data[0]._id,
                responce.data[0].manufacture_date,
                responce.data[0].release_date,
                responce.data[0].expiration_date,
                responce.data[0].sign_date,
              ]
              if (lotDates.current.length === 0) {
                lotDates.current = datesToPush
              }
              if (lotDates.current.length > 0) {
                let holding = lotDates.current[0]
                let current = responce.data[0]._id
                if (current < holding) {
                  lotDates.current = datesToPush
                }
              }
            }
          })
          .then(() => {
            setValue("manufacture_date", lotDates.current[1], {
              shouldDirty: true,
            })
            setValue("release_date", lotDates.current[2], { shouldDirty: true })
            setValue("expiration_date", lotDates.current[3], {
              shouldDirty: true,
            })
            setValue("sign_date", lotDates.current[4], { shouldDirty: true })
          })
      }
    }
  }

  useEffect(() => {
    let test = true
    if (verifyResults.length > 0) {
      verifyResults.forEach(result => {
        if (result === 0) {
          test = false
        }
      })
      if (test) {
        setVerify(1)
        setUnverifiedLot(false)
      } else {
        setVerify(2)
        setUnverifiedLot(true)
      }
    }
  }, [verifyResults])

  const verifyPartNumber = pn => {
    const verify = partNumbers.edges.find(p => p.node.part_number === pn)
    if (verify !== undefined) {
      setValidProduct(true)
      setValue("product_rev", verify.node.revision, {
        shouldValidate: true,
        shouldDirty: true,
      })
      setFormData(oldData => ({
        ...oldData,
        product_sterile: verify.node.sterile,
      }))
      setFormData(oldData => ({
        ...oldData,
        unique_document: verify.node.unique_document,
      }))
      setValidProductWarning(false)
    } else {
      setValidProduct(false)
    }
  }

  // initialize a step
  const initializeStep = (step, arr) => {
    trigger(arr).then(result => {
      if (result) {
        if (!validProduct) {
          setValidProductWarning(true)
        }
        if (validProduct) {
          setEnterDataStep(step)
        }
      }
    })
  }

  // form warnings and errors

  const [unverifiedLot, setUnverifiedLot] = useState(false)
  //form data
  const [formData, setFormData] = useState({})

  //form submit to review
  const onSubmit = data => {
    console.log(data)
    if (data.mixed_lot === "true") {
      data.mixed_lot = true
    }
    setFormData(oldData => ({ ...oldData, ...data }))
    setEnterDataStep(3)
  }

  // submit to database
  const submitToDatabase = data => {
    //add to database
    axios({
      method: "POST",
      url: "/api/pushdata",
      data: {
        expiration_date: data.expiration_date,
        lot_number: data.lot_number,
        manufacture_date: data.manufacture_date,
        mixed_lot: data.mixed_lot,
        mixed_lot_nums: data.mixed_lot_nums,
        part_number: data.part_number,
        product_rev: data.product_rev,
        product_sterile: data.product_sterile,
        release_date: data.release_date,
        sign_date: data.sign_date,
        signee: data.signee,
        unique_document: data.unique_document,
      },
    })
      .then(responce => {
        if (responce.status === 201) {
          reset()
          setFormData()
          setIsLotMixed(false)
          setEnterDataStep(1)
        }
        return responce.data.lot_number
      })
      .then(rslt => {
        successAlert(`${rslt} UPLOADED`, `Lot # ${rslt} successfully UPLOADED`)
      })
      .catch(error => {
        console.error(error)
      })
  }

  useEffect(() => {
    isLotMixed ? setUnverifiedLot(true) : setUnverifiedLot(false)
  }, [isLotMixed])

  return (
    <DashboardLayout
      noheader
      title="Enter Lot data"
      pageTitle="Enter Manufacturing Data"
      pageMessage="Use the form to enter lot data and test display of documents"
    >
      <div className="form-input">
        <div className="breadcrumbs mb-12">
          <DashboardBreadcrumbs />
        </div>
        <form id="certDataForm" onSubmit={handleSubmit(onSubmit)}>
          {/* enterData */}
          <div className="max-w-3xl mx-auto">
            <div
              className={classNames(
                enterDataStep === 1 ? "block" : "hidden",
                "space-y-8"
              )}
            >
              <FieldSet title="Product Information">
                {/* part number */}
                <InputWrap
                  className="col-span-1 md:col-span-7"
                  id="part_number"
                  label="Part Number"
                  message="scanner friendly"
                >
                  <Hint allowTabFill options={autocompleteOptions}>
                    <input
                      className="relative pr-12"
                      type="text"
                      id="part_number"
                      name="part_number"
                      onChange={e => {
                        verifyPartNumber(e.target.value)
                      }}
                      ref={register({ required: true })}
                    />
                  </Hint>
                  {errors.part_number?.type === "required" && (
                    <Error>Part Number is required</Error>
                  )}
                  {validProductWarning && (
                    <Error>Part # needs to be a valid product</Error>
                  )}
                  <div className="absolute top-0 right-0 flex items-center justify-center h-7 px-3">
                    {validProduct && (
                      <CheckCircleIcon className="h-5 w-5 text-green-500 fill-current" />
                    )}
                  </div>
                </InputWrap>
                {/* product rev */}
                <InputWrap
                  className="col-span-2"
                  id="product_rev"
                  label="Revision"
                >
                  <input
                    type="text"
                    id="product_rev"
                    name="product_rev"
                    ref={register({ required: true })}
                  />
                  {errors.product_rev?.type === "required" && (
                    <Error>Product Revision is required</Error>
                  )}
                </InputWrap>
              </FieldSet>
              <FieldSet title="Lot information">
                {/* lot number */}
                <InputWrap
                  className="col-span-1 md:col-span-6"
                  id="lot_number"
                  label={isLotMixed ? `Mixed Lot Number` : `Lot Number`}
                  message="scanner friendly"
                >
                  <input
                    id="lot_number"
                    type="text"
                    name="lot_number"
                    ref={register({
                      required: true,
                    })}
                  />
                  {errors.lot_number?.type === "required" && (
                    <Error>Lot Number is required</Error>
                  )}
                </InputWrap>
                {/* Mixed Lot? */}
                <CheckBox
                  wrapClassName="col-span-3 items-end justify-center"
                  className=""
                  label="Mixed Lot"
                  id="mixed_lot"
                  name="mixed_lot"
                  ref={register()}
                  onClick={() => setIsLotMixed(!isLotMixed)}
                  value="true"
                />

                {isLotMixed && (
                  <div tw="col-span-8">
                    {verifyResults.length > 0 && unverifiedLot && (
                      <span tw="inline-block mb-2 pb-1.5 pr-8 bg-red-50 rounded">
                        <Error>
                          NOTE: Ensure containing lots have been entered first.
                        </Error>
                      </span>
                    )}
                    <ol>
                      {fields.map((field, index) => {
                        return (
                          <li
                            key={field.id}
                            tw="flex items-center justify-between space-x-4 mb-2"
                          >
                            <div tw="relative w-full">
                              <Controller
                                as={<input />}
                                tw="py-1 border-0 ring-1 ring-gray-300 focus:ring focus:ring-blue-200 block w-full transition sm:text-xs sm:leading-5 rounded-md shadow-sm"
                                type="text"
                                id={`mixed-lot-${field.id}`}
                                control={control}
                                name={`mixed_lot_nums[${index}].lotNum`}
                                defaultValue={field.lotNum}
                              />
                              <div className="absolute top-0 right-0 flex items-center justify-center h-7 px-3">
                                {verifyResults.length > 0 &&
                                  (verifyResults[index] ? (
                                    <CheckCircleIcon className="h-5 w-5 text-green-500 fill-current" />
                                  ) : (
                                    <XCircleIcon className="h-5 w-5 text-red-500 fill-current" />
                                  ))}
                              </div>
                            </div>
                            <button
                              tw="p-1.5 bg-red-100 rounded font-bold"
                              onClick={() => {
                                remove(index)
                                setVerify(0)
                                setVerifyResults([])
                              }}
                            >
                              <Xicon tw="text-red-700 h-3 w-auto" />
                            </button>
                          </li>
                        )
                      })}
                    </ol>
                    <div tw="flex items-center justify-start space-x-4">
                      <Button
                        type="button"
                        onClick={() => {
                          append({ lotNum: "" })
                          setVerify(0)
                          setVerifyResults([])
                        }}
                      >
                        Add Lot Number
                      </Button>
                      <VerifyButton
                        type="button"
                        verifyStatus={verify}
                        onClick={() => verifySingleLotNumbers()}
                      />
                    </div>
                  </div>
                )}
              </FieldSet>
              <div className="text-right">
                <span className="flex justify-center lg:justify-end space-x-8">
                  <Button
                    type="button"
                    disabled={unverifiedLot}
                    onClick={() =>
                      initializeStep(2, [
                        "part_number",
                        "product_rev",
                        "lot_number",
                      ])
                    }
                  >
                    Next
                  </Button>
                </span>
              </div>
            </div>

            <div
              className={classNames(
                enterDataStep === 2 ? "block" : "hidden",
                "space-y-8"
              )}
            >
              <FieldSet title="Manufacturing Date Information">
                {/* Manufacure Date */}
                <InputWrap
                  className="col-span-3"
                  id="manufacture_date"
                  label="Manufacture Date"
                >
                  <input
                    id="manufacture_date"
                    type="date"
                    name="manufacture_date"
                    min="2019-01-01"
                    max="2035-12-31"
                    defaultValue={currentDate}
                    ref={register({
                      required: true,
                      valueAsDate: false,
                    })}
                    // onChange={e => setReleaseDate(e.target.value)}
                  />
                  {errors.manufacture_date?.type === "required" && (
                    <Error>Expiration Date is required</Error>
                  )}
                </InputWrap>

                {/* Release Date */}
                <InputWrap
                  className="col-span-3"
                  id="release_date"
                  label="Release Date"
                >
                  <input
                    id="release_date"
                    type="date"
                    name="release_date"
                    min="2019-01-01"
                    max="2035-12-31"
                    defaultValue={currentDate}
                    ref={register({
                      required: true,
                      valueAsDate: false,
                    })}
                  />
                  {errors.release_date?.type === "required" && (
                    <Error>Expiration Date is required</Error>
                  )}
                </InputWrap>
                {/* Expiration Date */}
                <InputWrap
                  className="col-span-3"
                  id="expiration_date"
                  label="Expiration Date"
                >
                  <input
                    id="expiration_date"
                    type="month"
                    name="expiration_date"
                    min="2021-01"
                    max="2035-12"
                    defaultValue={expirationDate}
                    ref={register({
                      required: true,
                      valueAsDate: false,
                    })}
                  />
                  {errors.expiration_date?.type === "required" && (
                    <Error>Expiration Date is required</Error>
                  )}
                </InputWrap>
              </FieldSet>
              <FieldSet title="Sign Date/Signee">
                {/* Signature Date */}
                <InputWrap
                  className="col-span-3"
                  id="sign_date"
                  label="Signature Date"
                >
                  <input
                    id="sign_date"
                    type="date"
                    name="sign_date"
                    min="2019-01-01"
                    max="2035-12-31"
                    defaultValue={currentDate}
                    ref={register({
                      required: true,
                      valueAsDate: false,
                    })}
                    // onChange={e => setSignDate(e.target.value)}
                  />
                  {errors.sign_date?.type === "required" && (
                    <Error>Signature Date is required</Error>
                  )}
                </InputWrap>
                {/* signee */}
                <InputWrap
                  className="col-span-6"
                  id="signee"
                  label="Signee Entering Data"
                >
                  <input
                    id="signee"
                    type="text"
                    name="signee"
                    readOnly={true}
                    defaultValue={signature}
                    ref={register({
                      required: true,
                    })}
                  />
                  {errors.signee?.type === "required" && (
                    <Error>Signee is required</Error>
                  )}
                </InputWrap>
              </FieldSet>

              <div className="text-right">
                <span className="flex justify-center lg:justify-end space-x-8">
                  <Button type="button" onClick={() => setEnterDataStep(1)}>
                    Back
                  </Button>
                  <Button type="submit">Review</Button>
                </span>
              </div>
            </div>

            {isSubmitSuccessful && (
              <div
                className={classNames(
                  enterDataStep === 3 ? "block" : "hidden",
                  "space-y-8"
                )}
              >
                <div className="">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <ConfirmListItem
                      item="Part Number | Revision"
                      entry={`${formData.part_number} | ${formData.product_rev}`}
                    />
                    <ConfirmListItem
                      item="Mixed Lot"
                      entry={formData.mixed_lot.toString()}
                    />
                    <ConfirmListItem
                      item={`${formData.mixed_lot ? "Mixed" : ""} Lot Number`}
                      entry={formData.lot_number}
                    />

                    {formData.mixed_lot &&
                      formData.mixed_lot_nums &&
                      formData.mixed_lot_nums.map((lot, index) => {
                        return (
                          <ConfirmListItem
                            indent
                            key={index}
                            item="Containing Lot Number"
                            entry={lot.lotNum}
                          />
                        )
                      })}

                    <ConfirmListItem
                      item="Expiration Date"
                      entry={formData.expiration_date}
                    />
                    <ConfirmListItem
                      item="Release Date"
                      entry={formData.release_date}
                    />
                    <ConfirmListItem
                      item="Manufacture Date"
                      entry={formData.manufacture_date}
                    />
                    <ConfirmListItem
                      item="Sign Date"
                      entry={formData.sign_date}
                    />
                    <ConfirmListItem item="Signee" entry={formData.signee} />
                  </dl>
                </div>
                <div className="col-span-1 md:col-span-3 text-right">
                  <span className="flex justify-center lg:justify-end space-x-8">
                    <Button type="button" onClick={() => setEnterDataStep(2)}>
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={() => {
                        submitToDatabase(formData)
                      }}
                    >
                      Submit
                    </Button>
                  </span>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}

const FieldSet = props => {
  return (
    <fieldset className={props.className}>
      <h5 tw="font-medium text-base mb-1.5">{props.title}</h5>
      <div tw="grid grid-cols-1 gap-y-6 md:grid-cols-9 gap-x-4 md:gap-x-6">
        {props.children}
      </div>
    </fieldset>
  )
}

const ConfirmListItem = props => {
  const itemStyle = css`
    ${tw`py-4 sm:py-2.5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6`}
    ${props.indent && tw`bg-gray-50`}
  `
  return (
    <div css={itemStyle}>
      <dt className="text-sm font-medium text-gray-500">{props.item}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <span tw="mr-1.5">:</span>
        {props.entry}
      </dd>
    </div>
  )
}

export const query = graphql`
  {
    partNumbers: allQcProductsJson(filter: {}) {
      edges {
        node {
          id
          part_number
          revision
          sterile
          unique_document
        }
      }
    }
  }
`

export default CertificateDashboard
