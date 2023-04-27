import React, { useState, useEffect } from "react"
import tw, { css } from "twin.macro"

// styles
const baseButtonStyles = css`
  ${tw`py-2 text-white px-4 rounded font-light text-xs disabled:bg-gray-400 disabled:hover:bg-gray-300 transition`}
}
`

const VerifyButton = props => {
  const [btnText, setBtnText] = useState()
  const verifyButtonStyles = css`
  ${baseButtonStyles}
  ${
    props.verifyStatus === 0 &&
    tw`bg-yellow-200 hover:bg-yellow-300 text-yellow-800`
  }
  ${
    props.verifyStatus === 1 &&
    tw`bg-green-200 hover:bg-green-300 text-green-800`
  }
  ${props.verifyStatus === 2 && tw`bg-red-200 hover:bg-red-300 text-red-800`}
}
`

  useEffect(() => {
    switch (props.verifyStatus) {
      case 0:
        setBtnText("verify")
        break
      case 1:
        setBtnText("verified")
        break
      case 2:
        setBtnText("failed, try again?")
        break
      default:
        setBtnText("error")
        break
    }
  }, [props.verifyStatus])

  return (
    <button
      type={props.type}
      onClick={props.onClick}
      to={props.to}
      className={props.className}
      css={verifyButtonStyles}
    >
      {btnText}
    </button>
  )
}

const Button = props => {
  const buttonStyle = css`
    ${baseButtonStyles}
    ${tw`bg-blue-600 hover:bg-blue-700`}
  `
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
      css={buttonStyle}
    >
      {props.children}
    </button>
  )
}

const DeleteButton = props => {
  const deleteButtonStyles = css`
  ${baseButtonStyles}
${tw`bg-red-600 hover:bg-red-500`}
}
`
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
      css={deleteButtonStyles}
    >
      {props.children}
    </button>
  )
}

export { VerifyButton, Button, DeleteButton }
