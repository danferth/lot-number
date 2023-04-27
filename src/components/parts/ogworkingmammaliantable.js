import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "../el/table"

const OgWorkingMammalianTable = () => {
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Flask Size</Th>
          <Th>Working Volume</Th>
          <Th>
            Working RPM Range <br tw="hidden sm:inline" />
            1" (2.54cm) <b>|</b> 2" (5.08cm)
          </Th>
        </tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <b>125mL</b>
          </Td>
          <Td>24-75mL</Td>
          <Td>
            120-150 <b>|</b> 90-110
          </Td>
        </Tr>
        <Tr>
          <Td>
            <b>250mL</b>
          </Td>
          <Td>100-150mL</Td>
          <Td>
            120-150 <b>|</b> 90-110
          </Td>
        </Tr>
        <Tr>
          <Td>
            <b>500mL</b>
          </Td>
          <Td>175-250mL</Td>
          <Td>
            120-150 <b>|</b> 90-110
          </Td>
        </Tr>
        <Tr>
          <Td>
            <b>1.6L</b>
          </Td>
          <Td>0.4-1.1L</Td>
          <Td>
            120-150 <b>|</b> 90-110
          </Td>
        </Tr>
        <Tr>
          <Td>
            <b>2.8L</b>
          </Td>
          <Td>0.9-1.6L</Td>
          <Td>
            120-150 <b>|</b> 90-110
          </Td>
        </Tr>
        <Tr>
          <Td>
            <b>5L</b>
          </Td>
          <Td>1.7-3.2L</Td>
          <Td>
            120-140 <b>|</b> 90-110
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default OgWorkingMammalianTable
