import React from "react"

import ChevUp from "../../images/svg/icons/chevron-up.svg"

const BackToTop = () => {
  return (
    <div id="backtotop" className="bg-transparent -mt-12 flex z-50">
      <div
        className="group"
        className="text-gray-500 hover:text-gray-600 text-center mb-4 mx-auto flex flex-col items-center justify-center transition"
      >
        <ChevUp className="h-3 w-3 stroke-current animate-bounce" />
        <button
          className="text-xs font-extralight"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          back to top
        </button>
      </div>
    </div>
  )
}

export default BackToTop
