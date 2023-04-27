import React from "react"
import { Disclaimer } from "../../components/el/typography"

const BlockQuote = props => {
  return (
    <section className="py-8 bg-white overflow-hidden md:py-10 lg:py-12 border-b border-gray-200 shadow-inner">
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation"
        >
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="10"
                cy="10"
                r="5"
                className="text-blue-200"
                stroke="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
          />
        </svg>

        <div className="relative">
          {props.logo}
          <blockquote className="mt-8">
            <div className="max-w-3xl mx-auto text-center text-lg md:text-xl  xl:text-2xl leading-9 font-medium text-gray-900">
              <p>&ldquo;{props.children}&rdquo;</p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base leading-6 font-medium text-gray-900">
                    {props.author}
                  </div>

                  <svg
                    className="hidden md:block mx-1 h-5 w-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base leading-6 font-medium text-gray-500">
                    {props.company}
                  </div>
                </div>
              </div>
            </footer>
            <Disclaimer className="text-center">
              Thomson is not affiliated with {props.company} or its subsidiaries
            </Disclaimer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default BlockQuote
