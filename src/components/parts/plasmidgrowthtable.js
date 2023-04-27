import React from "react"
import "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import { Table, Thead, Th, Tbody, Tr, Td } from "../el/table"

const PlasmidGrowthTable = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          brand {
            uyf
          }
        }
      }
    }
  `)
  return (
    <Table>
      <Thead>
        <tr>
          <Th></Th>
          <Th>Recommended Volume</Th>
          <Th>Recommended Vessel</Th>
        </tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>MINI Prep</Td>
          <Td>0.5-1mL</Td>
          <Td>Thomson 96 well plate</Td>
        </Tr>
        <Tr>
          <Td>MIDI Prep</Td>
          <Td>4-5mL</Td>
          <Td>Thomson 24 well plate</Td>
        </Tr>
        <Tr>
          <Td>MAXI Prep</Td>
          <Td>35-50mL</Td>
          <Td>125mL {data.site.siteMetadata.brand.uyf} Flask</Td>
        </Tr>

        <Tr>
          <Td rowspan="2">MEGA Prep</Td>
          <Td>75-100mL</Td>
          <Td>250mL {data.site.siteMetadata.brand.uyf} Flask</Td>
        </Tr>

        <Tr>
          <Td tw="bg-gray-50">150-200mL</Td>
          <Td tw="bg-gray-50">
            500mL {data.site.siteMetadata.brand.uyf} Flask
          </Td>
        </Tr>

        <Tr>
          <Td tw="bg-white">GIGA Prep</Td>
          <Td tw="bg-white">500-1000mL</Td>
          <Td tw="bg-white">
            1.5L or 2.5L {data.site.siteMetadata.brand.uyf} Flask
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default PlasmidGrowthTable
