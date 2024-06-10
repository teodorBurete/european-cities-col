import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";
import { CityPriceResponseDTO } from "../../api/service/model/price-entry/CityPriceResponseDTO";

export interface PricesTableProps {
  cityPrices: CityPriceResponseDTO
}

const PricesTable: React.FC<PricesTableProps> = (props:PricesTableProps) => {
  const {cityPrices}=props
  return (
    <Box overflowX="auto">
      <Table variant="simple">
        {cityPrices.categories.map((categoryData) => (
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
