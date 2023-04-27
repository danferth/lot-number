import React from "react"
import "twin.macro"
import { Table, Thead, Tbody, Tr, Th, Td } from "../el/table"

const RcProtocolTable = () => {
  return (
    <Table>
      <Thead>
        <tr>
          <Th tw="border-r-4 border-gray-300">Cell Line Viability</Th>
          <Th tw="text-center border-r-4 border-gray-300" colSpan="2">
            99%-70%
          </Th>
          <Th tw="text-center border-r-4 border-gray-300" colSpan="2">
            69%-50%
          </Th>
          <Th tw="text-center border-r-4 border-gray-300" colSpan="2">
            49%-40%
          </Th>
          <Th tw="text-center" colSpan="2">
            39%-0%
            <br />
            Spin for 7min @ 4000g*
          </Th>
        </tr>
        <tr>
          <Th tw="border-r-4 border-gray-300">
            <b>Cell Type</b>
          </Th>
          <Th tw="text-center">
            Volumn
            <br />
            (L)
          </Th>
          <Th tw="text-center border-r-4 border-gray-300">
            Time
            <br />
            (min)
          </Th>
          <Th tw="text-center ">
            Volumn
            <br />
            (L)
          </Th>
          <Th tw="text-center border-r-4 border-gray-300">
            Time
            <br />
            (min)
          </Th>
          <Th tw="text-center">
            Volumn
            <br />
            (L)
          </Th>
          <Th tw="text-center border-r-4 border-gray-300">
            Time
            <br />
            (min)
          </Th>
          <Th tw="text-center">
            Volumn
            <br />
            (L)
          </Th>
          <Th tw="text-center">
            Time
            <br />
            (min)
          </Th>
        </tr>
      </Thead>

      <Tbody>
        <Tr>
          <Td tw="border-r-4 border-gray-300">
            <b>CHO Stable without Feed</b>
          </Td>
          <Td tw="text-center">3.0</Td>
          <Td tw="text-center border-r-4 border-gray-300">18</Td>
          <Td tw="text-center">2.5</Td>
          <Td tw="text-center border-r-4 border-gray-300">18</Td>
          <Td tw="text-center">2.0</Td>
          <Td tw="text-center border-r-4 border-gray-300">20</Td>
          <Td tw="text-center">3.5****</Td>
          <Td tw="text-center">35****</Td>
        </Tr>

        <Tr>
          <Td tw="border-r-4 border-gray-300">
            <b>CHO Stable, 1 to 2 Feeds</b>
          </Td>
          <Td tw="text-center">2.0</Td>
          <Td tw="text-center border-r-4 border-gray-300">18</Td>
          <Td tw="text-center">2.0</Td>
          <Td tw="text-center border-r-4 border-gray-300">18</Td>
          <Td tw="text-center">1.5</Td>
          <Td tw="text-center border-r-4 border-gray-300">35</Td>
          <Td tw="text-center"></Td>
          <Td tw="text-center"></Td>
        </Tr>

        <Tr>
          <Td tw="border-r-4 border-gray-300">
            <b>CHO Stable, 2+ Feeds</b>
          </Td>
          <Td tw="text-center" colspan="8">
            Spin for 7 min @ 4000g; ≤3L volume ****
          </Td>
        </Tr>

        <Tr>
          <Td tw="border-r-4 border-gray-300">
            <b>HEK293 (FreeStyle&trade; & Expi293)</b>
          </Td>
          <Td tw="text-center">3.0</Td>
          <Td tw="text-center border-r-4 border-gray-300">18</Td>
          <Td tw="text-center">3.0</Td>
          <Td tw="text-center border-r-4 border-gray-300">23</Td>
          <Td tw="text-center">3.0</Td>
          <Td tw="text-center border-r-4 border-gray-300">25</Td>
          <Td tw="text-center">3.5****</Td>
          <Td tw="text-center">35****</Td>
        </Tr>

        <Tr>
          <Td tw="border-r-4 border-gray-300">
            <b>CHO Transient</b>
          </Td>
          <Td tw="text-center">3.0</Td>
          <Td tw="text-center border-r-4 border-gray-300">18</Td>
          <Td tw="text-center">2.5</Td>
          <Td tw="text-center border-r-4 border-gray-300">18</Td>
          <Td tw="text-center">1.5</Td>
          <Td tw="text-center border-r-4 border-gray-300">35</Td>
          <Td tw="text-center"></Td>
          <Td tw="text-center"></Td>
        </Tr>

        <Tr>
          <Td tw="border-r-4 border-gray-300">
            <b>ExpiCHO</b>
          </Td>
          <Td tw="text-center">3.0</Td>
          <Td tw="text-center border-r-4 border-gray-300">18</Td>
          <Td tw="text-center">2.5</Td>
          <Td tw="text-center border-r-4 border-gray-300">18</Td>
          <Td tw="text-center">1.0</Td>
          <Td tw="text-center border-r-4 border-gray-300">18</Td>
          <Td tw="text-center"></Td>
          <Td tw="text-center"></Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default RcProtocolTable
