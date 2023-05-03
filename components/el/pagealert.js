import React, { useState, useEffect } from "react"
import { globalHistory } from "@reach/router"
import useQcStore from "./store"

import { motion, AnimatePresence } from "framer-motion"
//icons
import CheckIcon from "../../images/svg/icons/checkcircle.svg"
import WarnIcon from "../../images/svg/icons/warning.svg"
import Xicon from "../../images/svg/icons/x.svg"
import AlertIcon from "../../images/svg/icons/alertcircle.svg"
import InfoIcon from "../../images/svg/icons/infocircle.svg"

//popup alert
const PageAlert = () => {
  //all the alerts of alerts

  const [pageAlert, setPageAlert] = useQcStore(state => [
    state.pageAlert,
    state.setPageAlert,
  ])

  const [alertVisible, setAlertVisible] = useState(false)
  const [timerId, setTimerId] = useState()

  //remove alert
  const dismissAlert = () => {
    setAlertVisible(false)
    setPageAlert({})
    clearTimeout(timerId)
  }

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      action === "POP" && dismissAlert()
    })
  })

  useEffect(() => {
    const alertToggle = function () {
      const isVisible = alertVisible
      const isNew = Object.keys(pageAlert).length > 0 ? true : false
      const killAlert = () => {
        setAlertVisible(false)
        setPageAlert({})
      }
      const alertTimer = () => {
        setTimerId(setTimeout(() => killAlert(), 3000))
      }
      if (!isVisible && isNew) {
        setAlertVisible(isNew)
        if (!("halt" in pageAlert)) {
          alertTimer()
          return () => clearTimeout(timerId)
        }
      }
      if (isVisible && isNew) {
        clearTimeout(timerId)
        if (!("halt" in pageAlert)) {
          alertTimer()
        }
      }
    }
    alertToggle()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageAlert])

  //animation
  const alertVariants = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        mass: 1,
        damping: 12,
        duration: 2,
      },
    },
    hide: {
      x: "100vw",
      opacity: 0,
    },
    exit: {
      x: ["-5vw", "100vw"],
      transition: { type: "tween", ease: "easeInOut", duration: 0.25 },
    },
  }

  return (
    <div className="z-50 fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:flex-col sm:items-end sm:justify-start space-y-3">
      <AnimatePresence>
        {alertVisible && (
          <motion.div
            variants={alertVariants}
            initial="hide"
            animate="show"
            exit="exit"
            className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto"
          >
            <div className="rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-3">
                <div className="flex items-start items-center">
                  <div className="flex-shrink-0">
                    {pageAlert.type === "warning" ? (
                      <WarnIcon className="h-6 w-6 text-yellow-400" />
                    ) : (
                      ``
                    )}
                    {pageAlert.type === "error" ? (
                      <AlertIcon className="h-6 w-6 text-red-400 fill-current" />
                    ) : (
                      ``
                    )}
                    {pageAlert.type === "success" ? (
                      <CheckIcon className="h-6 w-6 fill-current text-green-400" />
                    ) : (
                      ``
                    )}
                    {pageAlert.type === "info" ? (
                      <InfoIcon className="h-6 w-6 fill-current text-blue-400" />
                    ) : (
                      ``
                    )}
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-xs leading-5 font-normal text-gray-900">
                      {pageAlert.title}
                    </p>
                    <p className="text-xs leading-5 text-gray-500">
                      {pageAlert.message}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition"
                      onClick={() => dismissAlert()}
                    >
                      <Xicon className="h-5 w-5 stroke-current" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PageAlert
