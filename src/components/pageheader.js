import React from "react"
import { Block, Header } from "./ui/mastercard"
import { H2 } from "./el/typography"
const PageHeader = props => {
  return (
    <Block theme="whitefull">
      <Header snug>
        <H2 className="pb-4 px-4">{props.title}</H2>
      </Header>
    </Block>
  )
}

export default PageHeader
