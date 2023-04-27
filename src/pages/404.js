import React from "react"
import "twin.macro"
import { Link } from "gatsby"
const FourOhFour = () => {
  return (
    <div tw="min-w-full max-h-full min-h-screen flex items-center justify-center">
      <p tw=" text-gray-600 font-light text-center">
        Oh No! The page you are looking for does not exist. :(
        <br />
        <Link
          tw="mt-6 text-blue-600 hover:text-green-600 hover:underline transition delay-150 ease-in-out"
          to="/"
        >
          Back to Home Base
        </Link>
      </p>
    </div>
  )
}
export default FourOhFour
