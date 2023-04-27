import React, { useState } from "react"
import useLocalStorage from "../useLocalStorage"
export const StateContext = React.createContext([])

const Provider = props => {
  const [bag, setBag] = useLocalStorage("bag", [])
  const [sort, setSort] = useState("")
  const [category, setCategory] = useState([])
  const [sample, setSample] = useLocalStorage("sample", "Thomson Products")
  const [pageAlert, setPageAlert] = useState({})
  const [siteMessage, setSiteMessage] = useLocalStorage("message", true)
  const [cart, setCart] = useLocalStorage("cart", false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [enterDataStep, setEnterDataStep] = useState(1)
  const [siteUser, setSiteUser] = useState()
  const [logedIn, setLogedIn] = useState(false)
  const [roles, setRoles] = useState([])
  const [isUser, setIsUser] = useLocalStorage("exit", false)
  return (
    <StateContext.Provider
      value={{
        stateBag: [bag, setBag],
        stateSort: [sort, setSort],
        stateCategory: [category, setCategory],
        stateSample: [sample, setSample],
        stateAlert: [pageAlert, setPageAlert],
        stateMessage: [siteMessage, setSiteMessage],
        stateCart: [cart, setCart],
        stateSearch: [searchOpen, setSearchOpen],
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
