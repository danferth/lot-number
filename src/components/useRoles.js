import { useContext } from "react"
import { StateContext } from "./el/provider"
import { navigate } from "gatsby"

const useRoles = role => {
  const { stateLogedIn, stateRoles, stateIsUser } = useContext(StateContext)
  const [roles] = stateRoles
  const [logedIn] = stateLogedIn
  const [isUser] = stateIsUser
  const isBrowser = typeof window !== "undefined"

  const checkPermision = () => {
    if (isBrowser) {
      if (isUser) {
        if (logedIn) {
          const checkPage = roles.includes(role)
          !checkPage && navigate("/dashboard/dashboardhome")
        }
      } else {
        navigate("/")
      }
    }
  }

  checkPermision()
}

export default useRoles
