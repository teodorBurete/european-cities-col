import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

export interface PricesTableProps {
  data: {
    category: string;
    items: { [key: string]: number };
  }[];
}

const PricesTable: React.FC<PricesTableProps> = ({ data }) => {
  return (
    <Box overflowX="auto">
      <Table variant="simple">
        {data.map((categoryData) => (
          <>
            <Thead>
              <Tr>
                <Th colSpan={2}>{categoryData.category}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.entries(categoryData.items).map(([item, price], idx) => (
                <Tr key={idx}>
                  <Td>{item}</Td>
                  <Td isNumeric>{price}</Td>
                </Tr>
              ))}
            </Tbody>
          </>
        ))}
      </Table>
    </Box>
  );
};

export default PricesTable;
