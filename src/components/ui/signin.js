import React from "react"
import "twin.macro"
import { Link } from "gatsby"
import useIdentity from "../useIdentity"

const SignIn = () => {
  const { logedIn, siteUser, logIn, logOut } = useIdentity()

  return (
    <div tw="w-full h-screen bg-gray-700 p-4 flex items-center justify-center">
      <div tw="w-full md:w-2/6 bg-gray-50 rounded-md shadow">
        <div tw="p-4 w-full h-full shadow-sm rounded-md overflow-hidden">
          {logedIn ? (
            <>
              <p tw="text-base font-medium text-blue-700">
                {`Hello ${siteUser.user_metadata.full_name}`}
              </p>
              <p tw="text-sm font-medium text-gray-400 group-hover:text-gray-700">
                <span tw="mr-1.5">Would you like to</span>
                <button
                  tw="text-blue-500 hover:text-blue-600 transition"
                  type="button"
                  onClick={() => logOut()}
                >
                  Log out
                </button>
                <span tw="mx-1.5">or</span>
                <Link
                  tw="text-blue-500 hover:text-blue-600 transition"
                  to="/dashboard/dashboardhome"
                >
                  visit the dashboard
                </Link>
              </p>
            </>
          ) : (
            <>
              <p tw="text-base font-medium text-blue-700">Please Log in</p>
              <p tw="text-sm font-medium text-gray-400 group-hover:text-gray-700">
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

export default SignIn
