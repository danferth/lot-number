import React, { useState } from "react"
import useLocalStorage from "../useLocalStorage"
export const StateContext = React.createContext([])

const Provider = props => {
  const [pageAlert, setPageAlert] = useState({})
  const [enterDataStep, setEnterDataStep] = useState(1)
  const [siteUser, setSiteUser] = useState()
  const [logedIn, setLogedIn] = useState(false)
  const [roles, setRoles] = useState([])
  const [isUser, setIsUser] = useLocalStorage("exit", false)
  return (
    <StateContext.Provider
      value={{
        stateAlert: [pageAlert, setPageAlert],
        stateEnterDataStep: [enterDataStep, setEnterDataStep],
        stateSiteUser: [siteUser, setSiteUser],
        stateLogedIn: [logedIn, setLogedIn],
        stateRoles: [roles, setRoles],
        stateIsUser: [isUser, setIsUser],
      }}
    >
      {props.children}
    </StateContext.Provider>
  )
}
const ProviderExport = ({ element }) => <Provider>{element}</Provider>
export default ProviderExport
