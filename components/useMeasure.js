import { useState, useRef, useEffect } from "react"

export const useMeasure = () => {
  const [values, setValues] = useState({})
  const targetRef = useRef()
  useEffect(() => {
    setValues(targetRef.current.getBoundingClientRect())
  }, [])

  return [values, targetRef]
}
