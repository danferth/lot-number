import React from "react"

import { Link } from "next/link"
const FourOhFour = () => {
  return (
    <div className="min-w-full max-h-full min-h-screen flex items-center justify-center">
      <p className=" text-gray-600 font-light text-center">
        Oh No! The page you are looking for does not exist. :(
        <br />
        <Link
          className="mt-6 text-blue-600 hover:text-green-600 hover:underline transition delay-150 ease-in-out"
          href="/"
        >
          Back to Home Base
        </Link>
      </p>
    </div>
  )
}
export default FourOhFour
