import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "../el/table"

const OgWorkingMicrobeTable = () => {
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
          <Td>63mL</Td>
          <Td>
            250 <b>|</b> 150
          </Td>
        </Tr>
        <Tr>
          <Td>
            <b>250mL</b>
          </Td>
          <Td>125mL</Td>
          <Td>
            250 <b>|</b> 150
          </Td>
        </Tr>
        <Tr>
          <Td>
            <b>500mL</b>
          </Td>
          <Td>250mL</Td>
          <Td>
            250 <b>|</b> 150
          </Td>
        </Tr>
        <Tr>
          <Td>
            <b>1.6L</b>
          </Td>
          <Td>900mL</Td>
          <Td>
            250 <b>|</b> 150
          </Td>
        </Tr>
        <Tr>
          <Td>
            <b>2.8L</b>
          </Td>
          <Td>1.4L</Td>
          <Td>
            250 <b>|</b> 150
          </Td>
        </Tr>
        <Tr>
          <Td>
            <b>5L</b>
          </Td>
          <Td>2.5L</Td>
          <Td>
            250 <b>|</b> 150
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default OgWorkingMicrobeTable
