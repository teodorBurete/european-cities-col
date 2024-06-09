import { Box, Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import { ICountryEconomicIndicators } from "../../api/service/model/country/ICountryEconomicIndicators";


const InfoTable = ({ fields }: { fields: { [key: string]: string | number }|ICountryEconomicIndicators }) => (
  <Box overflowX="auto">
    <Table variant="simple">
      <Tbody>
        {Object.entries(fields).map(([key, value]) => (
          <Tr key={key}>
            <Td><Text fontWeight="bold">{formatFieldName(key)}</Text></Td>
            <Td>{value}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Box>
);
const formatFieldName = (name: string) => {
  return name
    .replace(/_/g, ' ')               // Inlocuieste "underscore" cu "space."
    .replace(/\b\w/g, char => char.toUpperCase()); // Inlocuieste prima litera a fiecarui cuvant cu litera mare
}

export default InfoTable;
