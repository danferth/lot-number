import React, { useState } from "react"

const Label = props => {
  return (
    <label
      htmlFor={props.for}
      css={[
        tw`text-sm font-medium leading-5 text-gray-700`,
        props.inline ? tw`inline-block` : tw`block`,
      ]}
    >
      {props.children}
    </label>
  )
}

const InputFile = props => {
  const [ready, setReady] = useState(false)
  const styles = css`
    ${tw`mt-1 relative w-full py-2.5 rounded bg-blue-300 block flex items-center justify-center cursor-pointer hover:bg-blue-200 disabled:bg-gray-100 text-gray-500 text-blue-600 hover:text-blue-500`}
    input {
      ${tw`hidden`}
    }
  `
  return (
    <div className={props.className}>
      {props.message ? (
        <div className="flex justify-between">
          <span className="text-sm font-medium leading-5 text-gray-700">
            {props.label}
          </span>
          <span className="text-xs leading-5 text-gray-500">
            {props.message}
          </span>
        </div>
      ) : (
        <span className="text-sm font-medium leading-5 text-gray-700">
          {props.label}
        </span>
      )}
      <label htmlFor={props.id} css={[styles]}>
        <span className="text-xs">{props.inputMessage}</span>
        {props.children}
      </label>
    </div>
  )
}

const InputWrap = props => {
  const styles = css`
    ${tw`mt-1 relative`}
    input {
      ${tw`border-0 ring-1 ring-gray-300 focus:ring focus:ring-blue-200 block w-full transition sm:text-sm sm:leading-5 rounded-md shadow-sm`}
    }
    textarea {
      ${tw`border-0 ring-1 ring-gray-300 focus:ring focus:ring-blue-200 block w-full transition sm:text-sm sm:leading-5 rounded-md shadow-sm`}
    }
    select {
      ${tw`text-sm border-0 ring-1 ring-gray-300 focus:ring focus:ring-blue-200 transition sm:text-sm sm:leading-5 rounded-md shadow-sm`}
    }
  `
  return (
    <div className={props.className}>
      {props.message ? (
        <div className="flex justify-between">
          <Label for={props.id}>{props.label}</Label>
          <span className="text-xs leading-5 text-gray-500">
            {props.message}
          </span>
        </div>
      ) : (
        <Label for={props.id}>{props.label}</Label>
      )}
      <div css={[styles]}>{props.children}</div>
    </div>
  )
}

//for error messages displayed using react-hook-form
const Error = tw.p`text-xs text-red-600 mt-1.5 pl-2`

//for checkboxes
const CheckAlert = props => {
  const styles = css`
    ${tw`bg-blue-100 px-4 py-3 rounded-md shadow-sm`}
    input[type="checkbox"] {
      ${tw`border-gray-300 text-teal-500 ring-teal-500 rounded-sm`}
    }
  `
  return (
    <fieldset className={props.className} css={[styles]}>
      {props.children}
    </fieldset>
  )
}

const CheckBox = React.forwardRef((props, ref) => {
  return (
    <div
      className={`flex items center justify-start space-x-2.5 ${props.wrapClassName} hover:bg-blue-200 rounded px-1.5 py-2`}
    >
      <input
        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.value}
        onClick={props.onClick}
        ref={ref}
      />
      <label htmlFor={props.id} className="font-light text-xs text-gray-700">
        {props.label}
      </label>
    </div>
  )
})

//white box to wrap a form in
const FormBox = props => {
  return (
    <div
      className={props.className}
      className="bg-white shadow-sm md:shadow-lg rounded-lg"
    >
      <div className="w-full h-full px-3 md:px-6 py-6 mt-12 lg:mt-0 rounded-lg overflow-hidden shadow-sm">
        {props.children}
      </div>
    </div>
  )
}

// form table components
//simple table elements for quote and order forms
const TableWrap = props => {
  return (
    <div className={props.className} className="bg-white rounded-md shadow-lg">
      <div className="rounded-md shadow-sm overflow-hidden">
        {props.children}
      </div>
    </div>
  )
}

const Th = tw.th`font-semibold text-sm text-gray-800 bg-gray-200 px-3 py-2 border-r border-gray-300 last-of-type:border-none`
const Tr = tw.tr`border-b last-of-type:border-none`
const Td = tw.td`px-3 py-2 border-r last-of-type:border-none`

export {
  InputWrap,
  InputFile,
  Label,
  Error,
  CheckAlert,
  FormBox,
  TableWrap,
  Th,
  Tr,
  Td,
}
