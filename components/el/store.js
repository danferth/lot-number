import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
const QcStore = set => ({
  pageAlert: {},
  enterDataStep: 1,
  siteUser: "",
  logedIn: false,
  roles: [],
  isUser: false,
  setPageAlert: newAlert => set({ pageAlert: newAlert }),
  setEnterDataStep: step => set({ enterDataStep: step }),
  setSiteUser: user => set({ siteUser: user }),
  setLogedIn: s => set({ loggedIn: !s }),
  setRoles: role => set({ roles: role }),
  setIsUser: s => set({ isUser: !s }),
})
const useQcStore = create(devtools(persist(QcStore, { name: "QCstore" })))

export default useQcStore
