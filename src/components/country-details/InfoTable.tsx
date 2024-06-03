import { Box, HStack, Table, Tbody, Td, Text, Tr, VStack } from "@chakra-ui/react";


const InfoTable = ({ fields }: { fields: { [key: string]: string | number } }) => (
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
  // A simple function to format the field names into a more readable format.
  return name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

export default InfoTable;
