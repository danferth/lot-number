import React from "react"
import "twin.macro"
import { Link } from "gatsby"

const LinkBox = props => {
  return (
    <div
      className="group"
      tw="col-span-4 bg-white rounded-lg shadow-lg hover:shadow-md mb-4 lg:mb-0 transition cursor-pointer"
    >
      <Link to={props.link} tw="w-full h-full rounded-lg">
        <Content
          type={props.type}
          title={props.title}
          tag={props.tag[0]}
          description={props.description}
        />
      </Link>
    </div>
  )
}

const Content = props => {
  return (
    <div tw="overflow-hidden shadow-sm w-full p-4">
      <div tw="flex-1 truncate">
        <div tw="flex items-center space-x-3">
          {props.tag === "general" && (
            <span tw="inline-block px-2 py-0.5  text-xs leading-4 font-medium rounded-full text-blue-800 bg-blue-100 group-hover:bg-blue-300 transition">
              General Information
            </span>
          )}
          {props.tag === "catalog" && (
            <span tw="inline-block px-2 py-0.5  text-xs leading-4 font-medium rounded-full text-yellow-800 bg-yellow-300 group-hover:bg-yellow-400 transition">
              Catalog
            </span>
          )}

          <h3
            tw="text-gray-900 text-sm leading-5 font-medium truncate"
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          ></h3>
        </div>
        <p
          tw="mt-1 text-gray-500 text-xs leading-5 truncate"
          dangerouslySetInnerHTML={{
            __html: props.description,
          }}
        ></p>
      </div>
    </div>
  )
}

export default LinkBox
