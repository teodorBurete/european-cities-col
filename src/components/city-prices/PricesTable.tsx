import React, { useEffect, useState } from "react";
import { Text,Flex,Table, Thead, Tbody, Tr, Th, Td, Box, Select, Spinner } from "@chakra-ui/react";
import { CityPriceResponseDTO } from "../../api/service/model/price-entry/CityPriceResponseDTO";
import { IPriceEntryCategory } from "../../api/service/model/price-entry/IPriceEntryCategory";
import axios from "axios";

export interface PricesTableProps {
  cityPrices: CityPriceResponseDTO
}

const PricesTable: React.FC<PricesTableProps> = (props:PricesTableProps) => {
  const {cityPrices}=props
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/EUR');
        setExchangeRates(response.data.rates);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  const convertPrice = (price: number, currency: string): number => {
    const rate = exchangeRates[currency];
    return rate ? price * rate : price;
  };
  
  return (
    <Box overflowX="auto" boxShadow="md" borderRadius="md" bg="white" p={4}>
    <Flex mb={4} justifyContent="space-between" alignItems="center">
      <Text fontSize="lg" fontWeight="bold">
        Prices in {selectedCurrency}
      </Text>
      <Select
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
        width="150px"
      >
        {Object.keys(exchangeRates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </Select>
    </Flex>
    {loading ? (
      <Spinner />
    ) : (
      <Table colorScheme="blue">
        {cityPrices.categories.map((categoryData: IPriceEntryCategory) => (
          <React.Fragment key={categoryData.name}>
            <Thead bg="blue.500">
              <Tr>
                <Th colSpan={2} color="white"  fontSize="lg" py={4}>
                  {categoryData.name}
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {categoryData.entries.map((entry) => (
                <Tr key={entry.id} _hover={{ bg: 'blue.100' }}>
                  <Td px={4} py={2}>{entry.name}</Td>
                  <Td isNumeric px={4} py={2}>
                    {convertPrice(entry.price, selectedCurrency).toFixed(2)} {selectedCurrency}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </React.Fragment>
        ))}
      </Table>
    )}
  </Box>
  );
};

export default PricesTable;
