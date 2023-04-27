import React from "react"
import "twin.macro"
import Layout from "../components/layout"
import { H2,  P } from "../components/el/typography"

import {
  Block,
  Section,
  Header,

} from "../components/ui/mastercard"

import useRemoveBackToTop from "../components/useRemoveBackToTop"
const App = () => {

  useRemoveBackToTop()

  

  return (
    <Layout
      noheader
      title="Thomson | Solutions At Work"
      description="Thomson Instrument Company"
      schemaMarkup={schema}
    >

      {/* ===========================================================================
===============SHAKE FLASK WELL PLATE FILTER PLATE SECTION=====================
=========================================================================== */}
      <Block theme="lightbottom">
        <Header center normal>
          <H2>Hello World</H2>
          <P className="max-w-2xl mx-auto">
            Here we go
          </P>
        </Header>
        <Section threecard normal>
          
<h1>Hello from a section</h1>


        </Section>
      </Block>
    </Layout>
  )
}


export default App
