import React from "react"
import "twin.macro"
import { H4, Trunc } from "../el/appnotetypography"
import { PillLink } from "../el/button"
const RelatedAppsBlock = props => {
  const appQuery = props.appQuery
  const relatedApps = props.relatedApps

  //build array of applications
  const mapApps = (apps, list) => {
    const rslt = []
    list.map(item => {
      return rslt.push(apps.edges.find(ap => ap.node.id === item))
    })
    return rslt
  }
  const RelatedApplications = mapApps(appQuery, relatedApps)
  // AppLink Component
  const AppLink = props => {
    const description = Trunc(props.description, 120)
    return (
      <div tw="w-full lg:w-3/4 xl:w-3/5 py-0.5">
        <h3
          tw="text-xs font-semibold text-gray-800"
          dangerouslySetInnerHTML={{ __html: props.title }}
        ></h3>
        <p
          tw="text-xs font-light text-gray-600"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <PillLink color="blue" to={props.url}>
          See Application Note
        </PillLink>
      </div>
    )
  }

  return (
    <div tw="mt-8">
      <H4 tw="border-b border-gray-300">Related Application Notes</H4>
      <div tw="space-y-3 xl:space-y-6">
        {RelatedApplications.map(app => {
          return (
            <AppLink
              key={app.node.id}
              url={`../${app.node.url}`}
              title={app.node.title}
              description={app.node.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default RelatedAppsBlock
