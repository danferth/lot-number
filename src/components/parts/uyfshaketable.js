import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Table, Thead, Tbody, Tr, Th, Td } from "../el/table"

const UyfShakeTable = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          brand {
            uyf
            airotop
          }
        }
      }
    }
  `)
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Part #</Th>
          <Th>Description</Th>
          <Th>
            Use {data.site.siteMetadata.brand.airotop} Seal / Vented Screw Cap
          </Th>
          <Th>Media (mL)/Flask</Th>
          <Th>Shaker Speed</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>931147</Td>
          <Td>
            125mL {data.site.siteMetadata.brand.uyf} Flasks 50/case -- Sterile
          </Td>
          <Td>899421 / 899109</Td>
          <Td>40-50mL/flask</Td>
          <Td>300-350 RPM</Td>
        </Tr>
        <Tr>
          <Td>931144</Td>
          <Td>
            250mL {data.site.siteMetadata.brand.uyf} Flasks 50/case -- Sterile
          </Td>
          <Td>899423 / 899110</Td>
          <Td>75-110mL/flask</Td>
          <Td>300-350 RPM</Td>
        </Tr>
        <Tr>
          <Td>931141</Td>
          <Td>
            500mL {data.site.siteMetadata.brand.uyf} Flasks 25/case -- Sterile
          </Td>
          <Td>899424 / 899111</Td>
          <Td>125-200mL/flask</Td>
          <Td>300-350 RPM</Td>
        </Tr>
        <Tr>
          <Td>931138</Td>
          <Td>
            1.5L {data.site.siteMetadata.brand.uyf} Flasks 12/case -- Sterile
          </Td>
          <Td>899425/899566</Td>
          <Td>250-350mL/flask</Td>
          <Td>300-350 RPM</Td>
        </Tr>
        <Tr>
          <Td>931136-B</Td>
          <Td>
            2.5L {data.site.siteMetadata.brand.uyf} Flask 6/case -- Sterile
          </Td>
          <Td>899425 / 899566</Td>
          <Td>500mL (optimal)</Td>
          <Td>300-400 RPM</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default UyfShakeTable
