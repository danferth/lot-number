import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "../el/table"

const OgClampTable = () => {
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Flask Size</Th>
          <Th>Eppendorf&reg;</Th>
          <Th>INFORS HT&reg;</Th>
          <Th>Kuhner&reg;</Th>
          <Th>Fisher Scientific&reg;</Th>
          <Th>VWR&reg;</Th>
        </tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>125mL</Td>
          <Td>M1190-9001</Td>
          <Td>12202 ATK 100</Td>
          <Td>SM310125</Td>
          <Td>11-676-013</Td>
          <Td>n/a</Td>
        </Tr>
        <Tr>
          <Td>250mL</Td>
          <Td>M1190-9002</Td>
          <Td>12203 ATK 250</Td>
          <Td>SM310250</Td>
          <Td>11-676-014</Td>
          <Td>n/a</Td>
        </Tr>
        <Tr>
          <Td>500mL</Td>
          <Td>M1190-9003</Td>
          <Td>12204 ATK 500</Td>
          <Td>SM310500</Td>
          <Td>11-676-015</Td>
          <Td>n/a</Td>
        </Tr>
        <Tr>
          <Td>1.6L</Td>
          <Td>n/a</Td>
          <Td>12250 ATKF2</Td>
          <Td>SM311600</Td>
          <Td>n/a</Td>
          <Td>n/a</Td>
        </Tr>
        <Tr>
          <Td>2.8L</Td>
          <Td>ACE-2000S</Td>
          <Td>12251 ATKF3</Td>
          <Td>SM312800T</Td>
          <Td>11-676-018</Td>
          <Td>57019-686</Td>
        </Tr>
        <Tr>
          <Td>5L</Td>
          <Td>ACE-5000S</Td>
          <Td>12209 ATK5000</Td>
          <Td>SM313000F</Td>
          <Td>236028</Td>
          <Td>57019-696</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default OgClampTable
