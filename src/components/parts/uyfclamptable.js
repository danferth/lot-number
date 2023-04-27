import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "../el/table"

const UyfClampTable = () => {
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
          <Td bold>125mL</Td>
          <Td>M1190-9001</Td>
          <Td>12202 ATK 100</Td>
          <Td>SM310100</Td>
          <Td>11-676-013</Td>
          <Td>57019-676</Td>
        </Tr>
        <Tr>
          <Td bold>250mL</Td>
          <Td>M1190-9002</Td>
          <Td>12203 ATK 250</Td>
          <Td>SM310250</Td>
          <Td>11-676-014</Td>
          <Td>57019-678</Td>
        </Tr>
        <Tr>
          <Td bold>500mL</Td>
          <Td>M1190-9003</Td>
          <Td>12204 ATK 500</Td>
          <Td>SM310500</Td>
          <Td>11-676-015</Td>
          <Td>57019-682</Td>
        </Tr>
        <Tr>
          <Td bold>1.5L</Td>
          <Td>ACE1000S</Td>
          <Td>12205 ATK 1000</Td>
          <Td>SM311000</Td>
          <Td>11-676-016</Td>
          <Td>57019-684</Td>
        </Tr>
        <Tr>
          <Td bold>2.5L</Td>
          <Td>M1190-9005</Td>
          <Td>12206 ATK 2000</Td>
          <Td>SM312500U</Td>
          <Td>11-676-017</Td>
          <Td>57019-686</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default UyfClampTable
