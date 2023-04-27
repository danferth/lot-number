import React from "react"
import tw, { css } from "twin.macro"
import { H1, P } from "../el/appnotetypography"
const VideoNote = props => {
  const videoStyles = css`
    padding-bottom: 56.25%;
    ${tw`relative h-0 w-full rounded-sm overflow-hidden mb-4`}
    iframe {
      ${tw`absolute top-0 left-0 w-full h-full`}
    }
  `

  return (
    <>
      <div css={[videoStyles]}>
        <iframe
          title={props.title}
          src={props.url}
          frameBorder="0"
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <H1
        tw="text-gray-800 text-base leading-5 font-medium break-normal"
        dangerouslySetInnerHTML={{
          __html: props.title,
        }}
      ></H1>
      <P
        tw="mt-3 text-gray-500 text-sm leading-5"
        dangerouslySetInnerHTML={{
          __html: props.description,
        }}
      ></P>
    </>
  )
}

export default VideoNote
