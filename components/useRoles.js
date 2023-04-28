import { useContext } from "react"
import { StateContext } from "./el/provider"
import { useRouter } from "next/router"

const useRoles = role => {
  const { stateLogedIn, stateRoles, stateIsUser } = useContext(StateContext)
  const [roles] = stateRoles
  const [logedIn] = stateLogedIn
  const [isUser] = stateIsUser
  const isBrowser = typeof window !== "undefined"

  const checkPermision = () => {
    const router = useRouter()
    if (isBrowser) {
      if (isUser) {
        if (logedIn) {
          const checkPage = roles.includes(role)
          !checkPage && navigate("/dashboard/dashboardhome")
        }
      } else {
        router.push("/")
      }
    }
  }

  checkPermision()
}

export default useRoles
