import React from "react"
import tw from "twin.macro"
import PdfIcon from "../../images/svg/icons/pdfIcon.svg"
import LinkIcon from "../../images/svg/icons/linkIcon.svg"
import FvIcon from "../../images/svg/tic/fvIcon.svg"
import OgIcon from "../../images/svg/tic/ogIcon.svg"
import UyfIcon from "../../images/svg/tic/uyfIcon.svg"
import WpIcon from "../../images/svg/tic/wpIcon.svg"
import ColIcon from "../../images/svg/tic/columnIcon.svg"
import { H4, Trunc } from "../el/appnotetypography"
const AppInfoBlock = props => {
  const description = Trunc(props.description, 350)

  return (
    <div tw="bg-white rounded-sm shadow-md mb-8">
      <div css={[tw`shadow-sm h-full rounded-sm pb-6 pt-0`]}>
        <SidebarProductHeader productLine={props.productLine} />
        <div tw="px-4 lg:px-4 h-full">
          <div css={[tw`py-2 h-full`]}>
            <H4>Title</H4>
            <h3
              dangerouslySetInnerHTML={{ __html: props.title }}
              tw="font-normal text-sm text-gray-600 pb-3"
            ></h3>
            <H4>Description</H4>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              tw="text-xs text-gray-500 mb-2"
            ></p>
            {props.type !== "video" && props.type !== "webpage" && (
              <a
                download
                className="group flex items-center px-1.5 py-1.5 rounded bg-gray-50 hover:bg-red-50 transition"
                href={props.link}
              >
                <PdfIcon tw="w-auto h-6 mr-1" />
                <span tw="text-xs text-gray-500 font-light group-hover:text-red-700 text-gray-700 transition">
                  {props.type === "appnote" && "PDF Application"}
                  {props.type === "general" && "PDF Download"}
                  {props.type === "catalog" && "PDF Catalog"}
                  {props.type === "published" && "PDF Download"}
                </span>
              </a>
            )}
            {props.type === "webpage" && (
              <a
                className="group flex items-center px-1.5 py-1.5 rounded bg-gray-50 hover:bg-blue-50 transition"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon tw="w-auto h-6 mr-1" />
                <span tw="text-xs text-gray-500 font-light group-hover:text-blue-700 transition">
                  Visit Page
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const SidebarProductHeader = props => {
  return (
    <div
      css={[
        tw`w-full h-12 pl-3 flex items-center justify-start rounded-t-sm`,
        props.productLine === "FV" &&
          tw`bg-teal-400 text-teal-50 group-hover:bg-teal-600 group-hover:text-teal-100`,
        props.productLine === "OG" &&
          tw`bg-purple-400 text-purple-50 group-hover:bg-purple-600 group-hover:text-purple-100`,
        props.productLine === "UYF" &&
          tw`bg-indigo-400 text-indigo-50 group-hover:bg-indigo-600 group-hover:text-indigo-100`,
        props.productLine === "wellplate" &&
          tw`bg-pink-400 text-pink-50 group-hover:bg-pink-600 group-hover:text-pink-100`,
        props.productLine === "columns" &&
          tw`bg-blue-400 text-blue-50 group-hover:bg-blue-600 group-hover:text-blue-100`,
      ]}
    >
      {props.productLine === "FV" && <FvIcon tw="h-8 w-8 fill-current" />}
      {props.productLine === "OG" && <OgIcon tw="h-8 w-8 fill-current" />}
      {props.productLine === "UYF" && <UyfIcon tw="h-8 w-8 fill-current" />}
      {props.productLine === "wellplate" && (
        <WpIcon tw="h-8 w-8 fill-current" />
      )}
      {props.productLine === "columns" && <ColIcon tw="h-8 w-8 fill-current" />}
    </div>
  )
}

export default AppInfoBlock
