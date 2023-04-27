import React, { useState } from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import TicIconTrans from "../../images/svg/tic/ticIconTrans.svg"
import TicLogo from "../../images/svg/tic/tic.svg"
import MenuOpen from "../../images/svg/icons/menu.svg"
import MenuClose from "../../images/svg/icons/x.svg"
import PopNav from "../el/popnav"
import Search from "./search"
import CartButton from "./cartButton"
import ProductNavButton from "../el/productnavbutton"
const NavBar = () => {
  // const [userOpen, setUserOpen] = useState(false)

  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <nav className="bg-white shadow z-30 print:hidden">
      <div className="main-wrap max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <TicIconTrans tw="block lg:hidden h-8 w-auto text-blue-800 fill-current" />
                <TicLogo
                  className="ticStandard"
                  tw="hidden lg:block h-8 w-auto"
                />
                <span className="sr-only">Thomson Home</span>
              </Link>
            </div>

            {/* Start Products link */}
            <ProductNavButton />
            {/* END products link */}

            <div className="hidden lg:ml-6 lg:flex">
              <NavLink to="/cellculture">Cell Culture Solutions</NavLink>
              <NavLink to="/analytical">Analytical Solutions</NavLink>
              <NavLink to="/an">Technical Resources</NavLink>
              <NavLink to="/legal/careers">Careers</NavLink>
            </div>
          </div>

          <Search />

          <div className="flex items-center lg:hidden">
            <CartButton />
            {/* <!-- Mobile menu button --> */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {/* Icon when menu is closed.  */}
              <MenuOpen
                className={`${
                  mobileMenu ? `hidden` : `block`
                } h-6 w-6 stroke-current`}
              ></MenuOpen>
              {/* //Icon when menu is open.  */}
              <MenuClose
                className={`${
                  !mobileMenu ? `hidden` : `block`
                } h-6 w-6 stroke-current`}
              ></MenuClose>
            </button>
          </div>
          <div className="hidden lg:ml-4 lg:flex lg:items-center">
            <CartButton />

            {/* <!-- Profile dropdown --> */}
            {/* <div className="ml-4 relative flex-shrink-0">
              <div>
                <button
                  className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                  onClick={() => setUserOpen(!userOpen)}
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src={"/mark.jpeg"}
                    alt=""
                  />
                </button>
              </div>
              <Transition
                show={userOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                  <div
                    className="py-1 rounded-md bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
                      role="menuitem"
                    >
                      Your Profile
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
                      role="menuitem"
                    >
                      Orders
                    </Link>
                    <Link
                      to="/form/login"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"
                      role="menuitem"
                    >
                      Sign out
                    </Link>
                  </div>
                </div>
              </Transition>
            </div> */}
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state.
    Menu open: "block", Menu closed: "hidden" */}

      <div className={`${mobileMenu ? `block` : `hidden`} lg:hidden`}>
        <div className="pt-2 pb-3">
          <NavLinkMobile to="/cellculture">
            Cell Culture Solutions
          </NavLinkMobile>
          <NavLinkMobile to="/analytical">Analytical Solutions</NavLinkMobile>
          <NavLinkMobile to="/an">Technical Resources</NavLinkMobile>
          <NavLinkMobile to="/legal/careers">Careers</NavLinkMobile>
        </div>
        <div className="pt-4 pb-3 pl-4 px-2 border-t border-gray-200">
          <PopNav></PopNav>
        </div>
        {/* <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0 ml-4">
              <img
                className="h-10 w-10 rounded-full"
                src={"/mark.jpeg"}
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-6 text-gray-800">
                Mark Rehse
              </div>
              <div className="text-sm font-medium leading-5 text-gray-500">
                mark.rehse.htslabs.com
              </div>
            </div>
          </div>
          <div className="mt-3">
            <Link
              to="/"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition"
            >
              Your Profile
            </Link>
            <Link
              to="/"
              className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition"
            >
              Settings
            </Link>
            <Link
              to="/form/login"
              className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition"
            >
              Sign out
            </Link>
          </div>
        </div> */}
      </div>
    </nav>
  )
}

const NavLink = props => {
  return (
    <Link
      to={props.to}
      tw="ml-8 first-of-type:ml-0 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition"
      activeStyle={tw`border-blue-500 focus:border-blue-700`}
      className={props.className}
    >
      {props.children}
    </Link>
  )
}

const NavLinkMobile = props => {
  return (
    <Link
      to={props.to}
      tw="mt-1 first-of-type:mt-0 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-500 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-500 focus:border-gray-300 transition"
      activeStyle={tw`border-blue-500 text-blue-700 bg-blue-100 focus:text-blue-800 focus:bg-blue-100 focus:border-blue-700`}
      className={props.className}
    >
      {props.children}
    </Link>
  )
}

export default NavBar
