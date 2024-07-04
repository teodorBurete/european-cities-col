import { Box, Table, Tbody, Td, Text, Tr, propNames } from "@chakra-ui/react";

interface InfoTableProps {
  fields: Record<string, any>;
}

const InfoTable: React.FC<InfoTableProps> = (props: InfoTableProps) => {
  const { fields } = props;
  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Tbody>
          {Object.entries(fields)
            .filter(([key]) => key !== "country_id") // Exclude countryId
            .map(([key, value]) => (
              <Tr key={key}>
                <Td>
                  <Text fontWeight="bold">{formatFieldName(key)}</Text>
                </Td>
                <Td>
                  {value}
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};

const formatFieldName = (name: string) => {
  return name
    .replace(/_/g, " ") // Inlocuieste "underscore" cu "space."
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Inlocuieste prima litera a fiecarui cuvant cu litera mare
};

export default InfoTable;
