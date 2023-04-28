import { useEffect, useContext } from "react"
import { StateContext } from "./el/provider"
const netlifyIdentity = require("netlify-identity-widget")

const useIdentity = () => {
  const { stateSiteUser, stateLogedIn, stateRoles, stateIsUser } =
    useContext(StateContext)
  const [siteUser, setSiteUser] = stateSiteUser
  const [logedIn, setLogedIn] = stateLogedIn
  const [roles, setRoles] = stateRoles
  const [isUser, setIsUser] = stateIsUser // eslint-disable-line no-unused-vars

  const setUser = user => {
    setSiteUser(user)
    setRoles(user.app_metadata.roles)
    setIsUser(true)
  }
  const unsetUser = () => {
    setSiteUser()
    setRoles([])
    setIsUser(false)
  }

  // login/logout functions
  const logOut = () => {
    netlifyIdentity.logout()
  }
  const logIn = () => {
    netlifyIdentity.open("login")
  }

  useEffect(() => {
    netlifyIdentity.init({ locale: "en" })
  }, [])

  netlifyIdentity.on("init", user => {
    console.log("init")
    if (user) {
      setUser(user)
    }
  })

  netlifyIdentity.on("login", user => {
    setUser(user)
    setLogedIn(true)
    netlifyIdentity.close()
  })

  netlifyIdentity.on("logout", () => {
    setLogedIn(false)
    unsetUser()
  })

  netlifyIdentity.on("error", err => console.error("Error", err))

  return { logedIn, siteUser, roles, logIn, logOut }
}

export default useIdentity
