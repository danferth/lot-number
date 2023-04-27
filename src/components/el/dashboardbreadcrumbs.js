/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useContext, useEffect } from "react"
import { CheckIcon } from "@heroicons/react/solid"
import { StateContext } from "../el/provider"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const DashboardBreadcrumbs = props => {
  // state of form steps
  const { stateEnterDataStep } = useContext(StateContext)
  const [enterDataStep, setEnterDataStep] = stateEnterDataStep

  const [stepStatus, setStepStatus] = useState([
    "current",
    "upcoming",
    "upcoming",
  ])

  useEffect(() => {
    if (enterDataStep === 1) {
      setStepStatus(["current", "upcoming", "upcoming"])
    }
    if (enterDataStep === 2) {
      setStepStatus(["complete", "current", "upcoming"])
    }
    if (enterDataStep === 3) {
      setStepStatus(["complete", "complete", "current"])
    }
  }, [enterDataStep])

  return (
    <div className="lg:border-t lg:border-b lg:border-gray-200">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Progress"
      >
        <ol className="rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none">
          <StepBlock
            id={1}
            status={stepStatus[0]}
            name="Product Information"
            description="Part Number & Lot Information"
            onClick={() => setEnterDataStep(1)}
          />
          <StepBlock
            id={2}
            status={stepStatus[1]}
            name="Manufacturing Information"
            description="Relevant Dates & Signee"
            onClick={() => setEnterDataStep(2)}
            separator
          />
          <StepBlock
            id={3}
            status={stepStatus[2]}
            name="Review & Submit"
            description="Confirm Data & Submit"
            separator
          />
        </ol>
      </nav>
    </div>
  )
}

const StepBlock = props => {
  return (
    <li key={props.id} className="relative overflow-hidden lg:flex-1 bg-white">
      <div
        className={classNames(
          props.id === 1 ? "border-b-0 rounded-t-md" : "",
          props.id === 3 ? "border-t-0 rounded-b-md" : "",
          "border border-gray-200 overflow-hidden lg:border-0"
        )}
      >
        <button onClick={props.onClick} className="group">
          <span
            className={classNames(
              props.status === "complete" || props.status === "upcoming"
                ? "bg-white group-hover:bg-gray-200 "
                : "bg-blue-600",
              "absolute top-0 left-0 w-1 h-full lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
            )}
            aria-hidden="true"
          />
          <span
            className={classNames(
              props.id !== 1 ? "lg:pl-9" : "",
              "px-6 py-5 flex items-start text-sm font-medium"
            )}
          >
            <span className="flex-shrink-0">
              {props.status === "complete" && (
                <span className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full">
                  <CheckIcon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              )}
              {props.status === "current" && (
                <span className="w-10 h-10 flex items-center justify-center border-2 border-blue-600 rounded-full">
                  <span className="text-blue-600">{props.id}</span>
                </span>
              )}
              {props.status === "upcoming" && (
                <span className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                  <span className="text-gray-500">{props.id}</span>
                </span>
              )}
            </span>
            <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
              <span
                className={classNames(
                  props.status === "current"
                    ? "text-blue-600"
                    : props.status === "upcoming"
                    ? "text-gray-500"
                    : "text-gray-800",
                  "text-xs font-semibold tracking-wide uppercase"
                )}
              >
                {props.name}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {props.description}
              </span>
            </span>
          </span>
        </button>
        {props.separator && <Separator />}
      </div>
    </li>
  )
}

const Separator = () => {
  return (
    <div
      className="hidden absolute top-0 left-0 w-3 inset-0 lg:block"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full text-gray-300"
        viewBox="0 0 12 82"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0.5 0V31L10.5 41L0.5 51V82"
          stroke="currentcolor"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}

export default DashboardBreadcrumbs
