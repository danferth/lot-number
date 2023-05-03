import { useEffect } from "react"
import useQcStore from "./el/store"
const netlifyIdentity = require("netlify-identity-widget")

const useIdentity = () => {
  const [siteUser, setSiteUser] = useQcStore(state => [
    state.siteUser,
    state.setSiteUser,
  ])
  const [logedIn, setLogedIn] = useQcStore(state => [
    state.logedIn,
    state.setLogedIn,
  ])
  const [roles, setRoles] = useQcStore(state => [state.roles, state.setRoles])
  const setIsUser = useQcStore(state => state.setIsUser)

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
