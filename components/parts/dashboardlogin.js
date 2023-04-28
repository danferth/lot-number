import React from "react"
import useIdentity from "../useIdentity"

const DashboardLogin = () => {
  // import netlifyIdentity
  const { logedIn, siteUser, logIn, logOut } = useIdentity()

  return (
    <div className="flex-shrink-0 flex bg-gray-700 p-4">
      <div className="flex items-center">
        <div className="ml-3">
          <p className="text-base font-medium text-white">
            {logedIn
              ? `Hello ${siteUser.user_metadata.full_name}`
              : `Please Log in`}
          </p>
          <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
            {!logedIn && (
              <button type="button" onClick={() => logIn()}>
                Login
              </button>
            )}
            {logedIn && (
              <button type="button" onClick={() => logOut()}>
                Log out
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DashboardLogin
