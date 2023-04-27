import React, { useContext, useState, useEffect, useRef } from "react"
import { StateContext } from "../../components/el/provider"
import { Hint } from "react-autocomplete-hint"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { graphql } from "gatsby"
import axios from "axios"
import tw, { css } from "twin.macro"
import {
  Button,
  DeleteButton,
  VerifyButton,
} from "../../components/el/dashboard-button"
import { InputWrap, Error } from "../../components/el/dashboard-form"
import { H4, P, Disclaimer } from "../../components/el/typography"
import useRemoveBackTotop from "../../components/useRemoveBackToTop"
import DashboardLayout from "../../components/dashboardlayout"
import Xicon from "../../images/svg/icons/x.svg"
import {
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/solid"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../components/el/dashboard-table"
import useRoles from "../../components/useRoles"
import useIdentity from "../../components/useIdentity"
const ViewEdit = ({ data }) => {
  useRoles("editor")
  const { siteUser } = useIdentity()
  const signature = siteUser ? siteUser.user_metadata.full_name : ""
  // page alert
  const { stateAlert } = useContext(StateContext)
  const [pageAlert, setPageAlert] = stateAlert // eslint-disable-line no-unused-vars

  const errorAlert = (title, message) => {
    const alert = {
      button: false,
      type: "error",
      title: title,
      message: message,
    }
    setPageAlert(alert)
  }

  const successAlert = (title, message) => {
    const alert = {
      button: false,
      type: "success",
      title: title,
      message: message,
    }
    setPageAlert(alert)
  }

  // standard and graphql
  useRemoveBackTotop()
  const { partNumbers } = data

  // mixed lot status
  const [isLotMixed, setIsLotMixed] = useState(false)

  // form warnings and errors successes
  // Delete entry
  const [deleteEntryInitialize, setDeleteEntryInitialize] = useState(false)
  const handleDeleteEntryInitialize = bool => {
    setDeleteEntryInitialize(bool)
  }
  //form data
  const [formData, setFormData] = useState({})

  // state for view edit buttons
  const [viewObj, setViewObj] = useState()
  const [editView, setEditView] = useState(false)
  const handleEditView = bool => {
    setEditView(bool)
  }
  // verification booleans
  const [verificationComplete, setVerificationComplete] = useState(false)
  const [disableSubmit, setDisableSubmit] = useState(true)
  const [updateReady, setUpdateReady] = useState(false)
  const [verifyStatus, setVerifyStatus] = useState(0)
  const verifyType = useRef()
  // verify lot numbers
  const [verifyLotResults, setVerifyLotResults] = useState([])
  const validLots = useRef(false)
  const lotDates = useRef([])
  // Validate part number
  const validProduct = useRef(false)
  const [validProductWarning, setValidProductWarning] = useState(false)

  // for single lot & skip buttons
  const [initSingleDb, setInitSingleDb] = useState()
  const [singleSkip, setSingleSkip] = useState(0)
  const [previousSingleSkipDisabled, setPreviousSingleSkipDisabled] =
    useState(true)

  // for multi lot & skip buttons
  const [initMultiDb, setInitMultiDb] = useState()
  const [multiSkip, setMultiSkip] = useState(0)
  const [previousMultiSkipDisabled, setPreviousMultiSkipDisabled] =
    useState(true)

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
    reset,
    control,
    trigger,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      mixed_lot_nums: [],
    },
  })

  // field array for mixed lot numbers
  const { fields, append, remove } = useFieldArray({
    control,
    name: "mixed_lot_nums", // unique name for your Field Array
  })
  // *********************************
  // **************FUNCTIONS**********
  // *********************************

  // options for autocomplete of part numbers
  const createAutocompleteOptions = () => {
    let rslt = []
    partNumbers.edges.map(el =>
      rslt.push({ id: el.node.id, label: el.node.part_number })
    )
    return rslt
  }
  const autocompleteOptions = createAutocompleteOptions()

  // retrieve single lots & store db in 'initSingleDb'
  const getSingleLots = skp => {
    axios({
      method: "GET",
      url: `/api/get-ten-single-lots?skip=${skp}`,
    }).then(responce => {
      setInitSingleDb(responce.data)
    })
  }

  // retrieve multi lots & store db in 'initMultiDb'
  const getMultiLots = skp => {
    axios({
      method: "GET",
      url: `/api/get-ten-multi-lots?skip=${skp}`,
    }).then(responce => {
      setInitMultiDb(responce.data)
    })
  }

  // increment and decrement single lot skip
  const plusTenSingle = () => {
    setSingleSkip(singleSkip + 10)
  }
  const minusTenSingle = () => {
    setSingleSkip(singleSkip - 10)
  }

  // increment and decrement multi lot skip
  const plusTenMulti = () => {
    setMultiSkip(multiSkip + 10)
  }
  const minusTenMulti = () => {
    setMultiSkip(multiSkip - 10)
  }

  // lot number verification
  const verifySingleLotNumbers = async values => {
    const lotsToVerify = values.mixed_lot_nums
    const verifyResults = []
    if (lotsToVerify.length > 0) {
      for (let i = 0; i < lotsToVerify.length; i++) {
        await axios({
          method: "GET",
          url: `/api/verifylot?lot=${lotsToVerify[i].lotNum}`,
        })
          .then(responce => {
            verifyResults.push(responce.data.length)

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
      if (verifyResults.length > 0) {
        let lotTestResults = true

        verifyResults.forEach(result => {
          if (result === 0) {
            lotTestResults = false
          }
        })
        return [lotTestResults, verifyResults]
      }
    }
  }

  // product verification
  // Verify a Part Number and set in 'formData' product_sterile, product_revision, & unique_document
  const verifyPartNumber = pn => {
    const verify = partNumbers.edges.find(p => p.node.part_number === pn)
    if (verify !== undefined) {
      setValidProductWarning(false)
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
      return true
    } else {
      setValidProductWarning(true)
      return false
    }
  }

  // on submit data from form is merged with 'formData' and set 'updateReady' to true
  const onSubmit = data => {
    if (data.mixed_lot === "true") {
      data.mixed_lot = true
    }
    if (data.mixed_lot === "false") {
      data.mixed_lot = false
    }
    setFormData(oldData => ({ ...oldData, ...data }))
    setUpdateReady(true)
  }

  // ************************************
  // ************** dbFUNCTIONS **********
  // ************************************

  // axios delete data entry by _id Sets timeout on 'entryDeleteSuccess'
  const deleteDataEntry = id => {
    axios({
      method: "GET",
      url: `/api/deleteentry?id=${id}`,
    })
      .then(responce => {
        if (responce.data.deletedCount === 1) {
          errorAlert(
            `${viewObj.lot_number} DELETED`,
            `Lot # ${viewObj.lot_number} successfully deleted`
          )
        }
      })
      .then(() => {
        setDeleteEntryInitialize(false)
        getSingleLots(singleSkip)
        getMultiLots(multiSkip)
        setViewObj()
      })
  }

  // Function to update database with id and object
  const updateDatabase = up => {
    axios({
      method: "POST",
      url: `/api/updatedata?id=${viewObj._id}`,
      data: {
        expiration_date: up.expiration_date,
        lot_number: up.lot_number,
        manufacture_date: up.manufacture_date,
        mixed_lot: up.mixed_lot,
        mixed_lot_nums: up.mixed_lot_nums,
        part_number: up.part_number,
        product_rev: up.product_rev,
        product_sterile: up.product_sterile,
        release_date: up.release_date,
        sign_date: up.sign_date,
        signee: up.signee,
        unique_document: up.unique_document,
      },
    })
      .then(responce => {
        if (responce.status === 201) {
          successAlert(
            `Lot # ${formData.lot_number} UPDATED`,
            `Lot # ${formData.lot_number} Successfully UPDATED`
          )
        }
      })
      .then(() => {
        setUpdateReady(false)
        reset()
        setFormData({})
        setIsLotMixed(false)
        setEditView(false)
        setDeleteEntryInitialize(false)
        setDisableSubmit(true)
        setViewObj()
        clearVerify()
        setVerifyStatus(0)
        getSingleLots(singleSkip)
        getMultiLots(multiSkip)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const setLotData = (db, id) => {
    setViewObj(db.find(lot => lot._id === id))
  }

  // run when verify button clicked
  const verifyUpdate = async () => {
    const values = watch()
    if (values.mixed_lot === "true") {
      verifyType.current = "multi"
      const validateLots = verifySingleLotNumbers(values)
      validateLots
        .then(res => {
          setVerifyLotResults(res[1])
          validLots.current = res[0]
        })
        .then(
          () => (validProduct.current = verifyPartNumber(values.part_number))
        )
        .then(() => runValidateResults())
    }
    if (values.mixed_lot === "false") {
      verifyType.current = "single"
      validProduct.current = verifyPartNumber(values.part_number)
      runValidateResults()
    }
  }
  // run verify results
  const runValidateResults = () => {
    if (verifyType.current === "single") {
      if (validProduct.current) {
        setVerifyStatus(1)
        setDisableSubmit(false)
      }
      if (!validProduct.current) {
        setVerifyStatus(2)
        setDisableSubmit(true)
      }
    }
    if (verifyType.current === "multi") {
      if (validProduct.current && validLots.current) {
        setVerifyStatus(1)
        setDisableSubmit(false)
      }
      if (!validProduct.current || !validLots.current) {
        setVerifyStatus(2)
        setDisableSubmit(true)
      }
    }
    setVerificationComplete(true)
  }
  // clear verify
  const clearVerify = () => {
    setVerificationComplete(false)
    setVerifyStatus(0)
    setVerifyLotResults([])
    setDisableSubmit(true)
    setValidProductWarning(false)
    validProduct.current = false
    validLots.current = false
  }
  // ************************************
  // ************** USE EFFECT **********
  // ************************************

  useEffect(() => {
    if (editView) {
      setValue("part_number", viewObj.part_number)
      setValue("product_rev", viewObj.product_rev)
      setValue("lot_number", viewObj.lot_number)
      setValue("mixed_lot", viewObj.mixed_lot)
      if (viewObj.mixed_lot) {
        remove()
        setIsLotMixed(true)
        append(viewObj.mixed_lot_nums)
      } else {
        setIsLotMixed(false)
        remove()
      }
      setValue("manufacture_date", viewObj.manufacture_date)
      setValue("release_date", viewObj.release_date)
      setValue("expiration_date", viewObj.expiration_date)
      setValue("sign_date", viewObj.sign_date)
    } else {
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editView, viewObj])

  useEffect(() => {
    clearVerify()
  }, [viewObj])

  // when 'updateReady' is true run updateDatabase with 'formData'
  useEffect(() => {
    updateReady && updateDatabase(formData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateReady])

  useEffect(() => {
    getSingleLots(singleSkip)
    singleSkip > 0
      ? setPreviousSingleSkipDisabled(false)
      : setPreviousSingleSkipDisabled(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleSkip])

  useEffect(() => {
    getMultiLots(multiSkip)
    multiSkip > 0
      ? setPreviousMultiSkipDisabled(false)
      : setPreviousMultiSkipDisabled(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [multiSkip])

  useEffect(() => {
    // check if verification is done
    if (verificationComplete) {
      // trigger validation
      trigger()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verificationComplete])

  return (
    <DashboardLayout
      noheader
      title="Edit Lot Data"
      pageTitle="View, Edit, & Delete Lot Data"
    >
      <div tw="grid grid-cols-12 gap-x-4">
        <div tw="col-span-12">
          <P>
            Use the{" "}
            <PencilIcon tw="inline-block w-auto h-4 text-yellow-500 fill-current" />{" "}
            <TrashIcon tw="inline-block w-auto h-4 text-red-600 fill-current" />{" "}
            <InformationCircleIcon tw="inline-block w-auto h-4 text-blue-500 fill-current" />{" "}
            icons to edit, delete, & view lot data from the tables below.
          </P>
        </div>
        {/* single lots */}
        <div tw="col-span-6">
          <H4>Single Lot Data</H4>
          <Table>
            <Thead>
              <tr>
                <Th>Part No.</Th>
                <Th>Lot number</Th>
                <Th>Created</Th>
                <Th></Th>
              </tr>
            </Thead>
            <Tbody>
              {initSingleDb &&
                initSingleDb.map((data, index) => {
                  return (
                    <LotDataTable
                      key={index}
                      data={data}
                      db={initSingleDb}
                      setData={setLotData}
                      onEdit={handleEditView}
                      onDelete={handleDeleteEntryInitialize}
                    />
                  )
                })}
              <Tr>
                <Td colspan="4">
                  <div tw="flex items-center justify-center w-full space-x-8">
                    <button
                      tw="text-blue-600 underline hover:text-blue-800 hover:no-underline disabled:text-blue-400"
                      disabled={previousSingleSkipDisabled}
                      onClick={() => minusTenSingle()}
                    >
                      prev 10
                    </button>
                    <button
                      tw="text-blue-600 underline hover:text-blue-800 hover:no-underline disabled:text-blue-400"
                      onClick={() => plusTenSingle()}
                    >
                      next 10
                    </button>
                  </div>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
        {/* multi lots */}
        <div tw="col-span-6">
          <H4>Mixed Lot Data</H4>
          <Table>
            <Thead>
              <tr>
                <Th>Part No.</Th>
                <Th>Lot number</Th>
                <Th>Created</Th>
                <Th></Th>
              </tr>
            </Thead>
            <Tbody>
              {initMultiDb &&
                initMultiDb.map((data, index) => {
                  return (
                    <LotDataTable
                      key={index}
                      data={data}
                      db={initMultiDb}
                      setData={setLotData}
                      onEdit={handleEditView}
                      onDelete={handleDeleteEntryInitialize}
                    />
                  )
                })}
              <Tr>
                <Td colspan="4">
                  <div tw="flex items-center justify-center w-full space-x-8">
                    <button
                      tw="text-blue-600 underline hover:text-blue-800 hover:no-underline disabled:text-blue-400"
                      disabled={previousMultiSkipDisabled}
                      onClick={() => minusTenMulti()}
                    >
                      prev 10
                    </button>
                    <button
                      tw="text-blue-600 underline hover:text-blue-800 hover:no-underline disabled:text-blue-400"
                      onClick={() => plusTenMulti()}
                    >
                      next 10
                    </button>
                  </div>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>

        {viewObj && deleteEntryInitialize && (
          <div tw="col-span-12">
            <Disclaimer tw="text-red-700">
              Delete Lot # {viewObj.lot_number}, this action can not be undone!
            </Disclaimer>
            <div tw="flex items-center justify-start space-x-2.5 mt-4">
              <Button
                type="button"
                onClick={() => {
                  setDeleteEntryInitialize(false)
                }}
              >
                cancel
              </Button>
              <DeleteButton
                type="button"
                onClick={() => deleteDataEntry(viewObj._id)}
              >
                {`Delete lot # ${viewObj.lot_number}`}
              </DeleteButton>
            </div>
          </div>
        )}

        {/* edit section */}
        {viewObj && editView && (
          <div tw="col-span-12">
            <H4>Edit Lot # {viewObj.lot_number}</H4>
            <Disclaimer tw="mt-0! mb-1.5">
              Use the form bellow to edit lot data
            </Disclaimer>
            <form
              id="certDataForm"
              tw="space-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div tw="grid grid-cols-12 gap-x-4 gap-y-8">
                {/* enterData */}

                <FieldSet className="col-span-6" title="Product Information">
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
                        onChange={() => clearVerify()}
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
                      {verificationComplete &&
                        (validProduct.current ? (
                          <CheckCircleIcon className="h-5 w-5 text-green-500 fill-current" />
                        ) : (
                          <XCircleIcon className="h-5 w-5 text-red-500 fill-current" />
                        ))}
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
                <FieldSet
                  className="col-span-6 row-start-2"
                  title="Lot information"
                >
                  {/* lot number */}
                  <InputWrap
                    className="col-span-1 md:col-span-8"
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
                  <input
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    type="hidden"
                    id="mixed_lot"
                    name="mixed_lot"
                    value={isLotMixed}
                    ref={register()}
                  />

                  {isLotMixed && (
                    <div tw="col-span-8">
                      <ol>
                        {fields.map((field, index) => {
                          return (
                            <li
                              key={field.id}
                              tw="flex items-center justify-between space-x-4 mb-2"
                            >
                              <div tw="relative w-full">
                                <Controller
                                  as={<input onChange={() => clearVerify()} />}
                                  tw="pr-12 py-1 border-0 ring-1 ring-gray-300 focus:ring focus:ring-blue-200 block w-full transition sm:text-xs sm:leading-5 rounded-md shadow-sm"
                                  type="text"
                                  id={`mixed-lot-${field.id}`}
                                  control={control}
                                  name={`mixed_lot_nums[${index}].lotNum`}
                                  defaultValue={field.lotNum}
                                />
                                <div className="absolute top-0 right-0 flex items-center justify-center h-7 px-3">
                                  {verificationComplete &&
                                    (verifyLotResults[index] ? (
                                      <CheckCircleIcon className="h-5 w-5 text-green-500 fill-current" />
                                    ) : (
                                      <XCircleIcon className="h-5 w-5 text-red-500 fill-current" />
                                    ))}
                                </div>
                              </div>
                              <button
                                type="button"
                                tw="p-1.5 bg-red-100 rounded-full font-bold"
                                onClick={() => {
                                  remove(index)
                                  clearVerify()
                                }}
                              >
                                <Xicon tw="text-red-700 h-3.5 w-auto" />
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
                            clearVerify()
                          }}
                        >
                          Add Lot Number
                        </Button>
                      </div>
                    </div>
                  )}
                </FieldSet>

                <FieldSet
                  className="col-span-6"
                  title="Manufacturing Date Information"
                >
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
                      min="2017-01-01"
                      max="2035-12-31"
                      defaultValue={currentDate}
                      ref={register({
                        required: true,
                        valueAsDate: false,
                      })}
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
                      min="2017-01-01"
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
                <FieldSet className="col-span-6" title="Sign Date/Signee">
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
                      min="2017-01-01"
                      max="2035-12-31"
                      defaultValue={currentDate}
                      ref={register({
                        required: true,
                        valueAsDate: false,
                      })}
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

                <div className="border-t border-gray-300 pt-4 col-span-6 col-start-7 space-x-3 text-right">
                  {/* cancel button */}
                  <Button
                    type="button"
                    onClick={() => {
                      setEditView(false)
                      clearVerify()
                    }}
                  >
                    Cancel
                  </Button>

                  {/* verify button */}
                  <VerifyButton
                    verifyStatus={verifyStatus}
                    type="button"
                    onClick={() => verifyUpdate()}
                  />
                  {/* submit button */}
                  <Button type="submit" disabled={disableSubmit}>
                    Update Entry
                  </Button>
                </div>
              </div>
            </form>
          </div>
        )}
        {/* end edit section */}
      </div>
    </DashboardLayout>
  )
}

const FieldSet = props => {
  return (
    <fieldset className={props.className}>
      <h5 tw="font-medium text-sm mb-1.5">{props.title}</h5>
      <div tw="grid grid-cols-1 gap-y-6 md:grid-cols-9 gap-x-4 md:gap-x-6 bg-white pt-2.5 pb-3 px-4 rounded-md">
        {props.children}
      </div>
    </fieldset>
  )
}

const ConfirmListItem = props => {
  const itemStyle = css`
    ${tw`py-0.5 sm:py-1.5 sm:grid sm:grid-cols-8 sm:gap-4 sm:px-6`}
    ${props.indent && tw`bg-gray-500`}
  `
  return (
    <div css={itemStyle}>
      <dt className="text-xs text-gray-50 col-span-3">{props.item}</dt>
      <dd className="mt-1 text-xs font-light text-white sm:mt-0 sm:col-span-5">
        <span tw="mr-1.5">:</span>
        {props.entry}
      </dd>
    </div>
  )
}

const LotDataRow = props => {
  return (
    <dl className="sm:divide-y sm:divide-gray-200 bg-gray-700">
      <ConfirmListItem item="Part Number" entry={props.data.part_number} />
      <ConfirmListItem item="Revision" entry={props.data.product_rev} />
      <ConfirmListItem
        item="Mixed Lot"
        entry={props.data.mixed_lot.toString()}
      />
      <ConfirmListItem
        item={`${props.data.mixed_lot ? "Mixed" : ""} Lot Number`}
        entry={props.data.lot_number}
      />

      {props.data.mixed_lot &&
        props.data.mixed_lot_nums &&
        props.data.mixed_lot_nums.map((lot, index) => {
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
        entry={props.data.expiration_date}
      />
      <ConfirmListItem item="Release Date" entry={props.data.release_date} />
      <ConfirmListItem
        item="Manufacture Date"
        entry={props.data.manufacture_date}
      />
      <ConfirmListItem item="Sign Date" entry={props.data.sign_date} />
      <ConfirmListItem item="Signee" entry={props.data.signee} />
    </dl>
  )
}

const LotDataTable = props => {
  const [open, setOpen] = useState(false)
  const handleSetLotdata = (db, id) => {
    props.setData(db, id)
  }
  const handleEditView = args => {
    props.onEdit(args)
  }
  const handleDeleteEntryInitialize = args => {
    props.onDelete(args)
  }
  return (
    <>
      <Tr key={props.data._id}>
        <Td>{props.data.part_number}</Td>
        <Td>{props.data.lot_number}</Td>
        <Td>{props.data.sign_date}</Td>
        <Td className="flex items-center justify-start space-x-1.5 pr-1.5 pl-0">
          {/* edit */}
          <button
            tw="text-yellow-400 hover:text-yellow-600 transition"
            onClick={() => {
              handleSetLotdata(props.db, props.data._id)
              handleEditView(true)
              handleDeleteEntryInitialize(false)
            }}
          >
            <PencilIcon tw="w-4 h-4 fill-current" />
          </button>
          {/* delete */}
          <button
            tw="text-red-400 hover:text-red-600 transition"
            onClick={() => {
              handleSetLotdata(props.db, props.data._id)
              handleDeleteEntryInitialize(true)
              handleEditView(false)
            }}
          >
            <TrashIcon tw="w-4 h-4 fill-current" />
          </button>
          {/* view */}
          <button
            tw="text-blue-400 hover:text-blue-600 transition"
            onClick={() => setOpen(!open)}
          >
            <InformationCircleIcon tw="w-4 h-4 fill-current" />
          </button>
        </Td>
      </Tr>
      {open && (
        <Tr>
          <Td colspan="4">
            <LotDataRow data={props.data} />
          </Td>
        </Tr>
      )}
    </>
  )
}

export const query = graphql`
  {
    partNumbers: allQcProductsJson(filter: {}) {
      edges {
        node {
          id
          title
          desc_main
          desc_sub
          image
          slug
          part_number
          revision
          quantity
          sterile
          unique_document
          line
          series
        }
      }
    }
  }
`

export default ViewEdit
