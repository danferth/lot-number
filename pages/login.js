import React from "react"

import Link from "next/link"
import useIdentity from "../components/useIdentity"

const LogIn = () => {
  const { logedIn, siteUser, logIn, logOut } = useIdentity()

  return (
    <div className="w-full h-screen bg-gray-700 p-4 flex items-center justify-center">
      <div className="w-full md:w-2/6 bg-gray-50 rounded-md shadow">
        <div className="p-4 w-full h-full shadow-sm rounded-md overflow-hidden">
          {logedIn ? (
            <>
              <p className="text-base font-medium text-blue-700">
                {`Hello ${siteUser.user_metadata.full_name}`}
              </p>
              <p className="text-sm font-medium text-gray-400 group-hover:text-gray-700">
                <span className="mr-1.5">Would you like to</span>
                <button
                  className="text-blue-500 hover:text-blue-600 transition"
                  type="button"
                  onClick={() => logOut()}
                >
                  Log out
                </button>
                <span className="mx-1.5">or</span>
                <Link
                  className="text-blue-500 hover:text-blue-600 transition"
                  href="/"
                >
                  visit the dashboard
                </Link>
              </p>
            </>
          ) : (
            <>
              <p className="text-base font-medium text-blue-700">
                Please Log in
              </p>
              <p className="text-sm font-medium text-gray-400 group-hover:text-gray-700">
                <button type="button" onClick={() => logIn()}>
                  Login
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default LogIn
