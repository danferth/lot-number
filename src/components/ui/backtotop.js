import React from "react"
import "twin.macro"
import ChevUp from "../../images/svg/icons/chevron-up.svg"

const BackToTop = () => {
  return (
    <div id="backtotop" tw="bg-transparent -mt-12 flex z-50">
      <div
        className="group"
        tw="text-gray-500 hover:text-gray-600 text-center mb-4 mx-auto flex flex-col items-center justify-center transition"
      >
        <ChevUp tw="h-3 w-3 stroke-current animate-bounce" />
        <button
          tw="text-xs font-extralight"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          back to top
        </button>
      </div>
    </div>
  )
}

export default BackToTop
