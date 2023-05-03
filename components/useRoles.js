import useQcStore from "./el/store"
import { useRouter } from "next/router"

const useRoles = role => {
  const logedIn = useQcStore(state => state.logedIn)
  const roles = useQcStore(state => state.roles)
  const isUser = useQcStore(state => state.isUser)
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
