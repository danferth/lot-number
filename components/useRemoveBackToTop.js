import { useEffect } from "react"

//remove BackToTop button
const useRemoveBackToTop = () => {
  useEffect(() => {
    const btt = document.getElementById("backtotop")
    btt.style.display = "none"

    return () => {}
  }, [])
}

export default useRemoveBackToTop
