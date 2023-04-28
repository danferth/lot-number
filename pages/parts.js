import React, { useState } from "react"
import { Hint } from "react-autocomplete-hint"
import data from "../../json/products.json"

import { InputWrap } from "../../components/el/form"
import DashboardLayout from "../../components/dashboardlayout"
import useRoles from "../../components/useRoles"

const Parts = () => {
  useRoles("user")
  const { productData } = data

  // find a part number
  const [foundPartNo, setFoundPartNo] = useState()
  const findPartNo = pn => {
    let rslt = productData.edges.find(p => p.node.part_number === pn)
    rslt !== undefined ? setFoundPartNo(rslt.node) : setFoundPartNo(false)
  }
  // options for autocomplete
  const createAutocompleteOptions = () => {
    let rslt = []
    productData.edges.map(el =>
      rslt.push({ id: el.node.id, label: el.node.part_number })
    )
    return rslt
  }
  const autocompleteOptions = createAutocompleteOptions()

  return (
    <DashboardLayout
      noheader
      title="Parts Registry"
      pageTitle="Quality Assurance Product Database"
      pageMessage="View Products in the quality assurance database. Any product not on this list can not be entered for lot data."
    >
      <div className="mb-32">
        <div className="grid grid-cols-2 gap-x-12 mb-12">
          <InputWrap label="Search for a part number" className="col-span-1">
            <Hint options={autocompleteOptions} allowTabFill>
              <input
                type="text"
                name="searchPartNo"
                onChange={e => findPartNo(e.target.value)}
              />
            </Hint>
          </InputWrap>
          {foundPartNo && (
            <div className="col-span-1 rounded-md shadow-sm bg-white">
              <div className="rounded-md shadow-md overflow-hidden px-4 py-6 h-full">
                <div className="divide-y divide-gray-300">
                  <FoundEntry
                    title="Part Number"
                    data={foundPartNo.part_number}
                  />
                  <FoundEntry title="Revision" data={foundPartNo.revision} />
                  <FoundEntry title="Title" data={foundPartNo.title} />
                  <FoundEntry
                    title="Description"
                    data={foundPartNo.desc_main}
                  />
                  <FoundEntry
                    title="Sub Description"
                    data={foundPartNo.desc_sub}
                  />
                  <FoundEntry
                    boolean
                    title="Sterile"
                    data={foundPartNo.sterile}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Part No./Revision
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Sterile
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {productData &&
                      productData.edges.map(part => {
                        return (
                          <tr className="" key={part.node.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {part.node.title}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {part.node.desc_main}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {part.node.part_number}
                              </div>
                              <div className="text-sm text-gray-500">
                                Rev. {part.node.revision}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {part.node.sterile ? (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  sterile
                                </span>
                              ) : (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                  non-sterile
                                </span>
                              )}
                            </td>
                          </tr>
                        )
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

const FoundEntry = props => {
  return (
    <div className="grid grid-cols-3">
      <span className="py-2.5 px-1.5 col-span-1 text-xs font-normal text-gray-700">
        {props.title}
      </span>
      <span className="py-2.5 px-1.5 col-span-2 text-xs font-light italic text-gray-500">
        {!props.boolean && props.data}
        {props.boolean &&
          (props.data ? (
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              sterile
            </span>
          ) : (
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
              non-sterile
            </span>
          ))}
      </span>
    </div>
  )
}

export default Parts
