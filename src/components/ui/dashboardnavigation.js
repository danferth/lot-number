import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import useIdentity from "../useIdentity"
import {
  FolderAddIcon,
  ArchiveIcon,
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline"
import TICicon from "../../images/svg/tic/tic.svg"
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const DashboardNav = props => {
  const { roles } = useIdentity()
  const navigation = [
    {
      name: "Dashboard Home",
      to: "../dashboardhome",
      access: "user",
      icon: HomeIcon,
    },
    {
      name: "Enter Manufacturing Data",
      to: "../enterdata",
      access: "editor",
      icon: FolderAddIcon,
    },
    {
      name: "View/Edit Data",
      to: "../viewedit",
      access: "editor",
      icon: CollectionIcon,
    },
    {
      name: "Parts Registry",
      to: "../parts",
      access: "user",
      icon: ArchiveIcon,
    },
    {
      name: "Certificate Retrieval",
      to: "../retrieval",
      access: "distributor",
      icon: BadgeCheckIcon,
    },
    { name: "htslabs.com", to: "/", access: "user", icon: GlobeAltIcon },
  ]

  return (
    <div
      className={classNames(
        props.mobile === "mobile" ? "h-0" : "flex flex-col",
        "flex-1 pb-4 pt-5 overflow-y-auto"
      )}
    >
      <div className="flex items-center flex-shrink-0 px-4">
        <TICicon className="h-12 w-auto text-gray-300 fill-current" />
      </div>
      <nav
        className={classNames(
          props.mobile === "mobile" ? "" : "flex-1",
          "mt-5 px-2 space-y-1"
        )}
      >
        {navigation.map(item => {
          let accessGranted = roles.includes(item.access)
          return (
            <Link
              key={item.name}
              to={item.to}
              activeStyle={tw`bg-gray-900 text-white`}
              className={classNames(
                props.mobile ? "text-base" : "text-sm",
                accessGranted
                  ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                  : "pointer-events-none text-gray-500",
                "group flex items-center px-2 py-2 font-medium rounded-md"
              )}
            >
              <item.icon
                className={classNames(
                  props.mobile ? "mr-4" : "mr-3",
                  "flex-shrink-0 h-6 w-6 text-current"
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default DashboardNav
