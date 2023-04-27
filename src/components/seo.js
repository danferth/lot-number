import React from "react"
import { Helmet } from "react-helmet"

const SeO = props => {
  return (
    <Helmet
      bodyAttributes={props.bodyAttributes}
      htmlAttributes={props.htmlAttributes}
    >
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      {props.noIndex && <meta name="robots" content="noindex" />}
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      {props.schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(props.schemaMarkup)}
        </script>
      )}
    </Helmet>
  )
}

export default SeO
