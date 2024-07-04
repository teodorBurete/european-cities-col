import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Select,
  Spinner,
} from "@chakra-ui/react";
import { IPriceEntryCategory } from "../../api/service/model/price-entry/IPriceEntryCategory";
import { CityPriceResponseDTO } from "../../api/service/model/price-entry/CityPriceResponseDTO";
import { IPriceEntry } from "../../api/service/model/price-entry/IPriceEntry";
import axios from "axios";

export interface PricesTableProps {
  cityPrices1: CityPriceResponseDTO;
  cityPrices2: CityPriceResponseDTO;
}

const PricesComparisonTable: React.FC<PricesTableProps> = ({
  cityPrices1,
  cityPrices2,
}: PricesTableProps) => {
  const { city: city1, categories: categories1 } = cityPrices1;
  const { city: city2, categories: categories2 } = cityPrices2;

  const [selectedCurrency, setSelectedCurrency] = useState("EUR");

  const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number }>(
    {}
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/EUR"
        );
        setExchangeRates(response.data.rates);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
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
        <Thead>
          <Tr bg="blue.500">
            <Th color="white" fontSize="lg" py={4} colSpan={4}>
              Category
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {categories1.map((categoryData: IPriceEntryCategory) => (
            <React.Fragment key={categoryData.name}>
              <Tr>
                <Td  bg="gray.200" fontWeight="bold" py={2}>
                  {categoryData.name}
                </Td>
                <Td bg="gray.200" fontWeight="bold" py={2} textAlign={"end"}>
                  {city1.name}
                </Td>
                <Td bg="gray.200" fontWeight="bold" py={2} textAlign={"end"}>
                  {city2.name}
                </Td>
                <Td bg="gray.200" fontWeight="bold" py={2} textAlign={"end"}>
                  {"Difference"}
                </Td>
              </Tr>
              {categoryData.entries.map((entry: IPriceEntry) => {
                const correspondingEntry = categories2
                  .find((cat: IPriceEntryCategory) => cat.name === categoryData.name)
                  ?.entries.find((e: IPriceEntry) => e.name === entry.name);

                const differencePercentage = correspondingEntry
                  ? ((correspondingEntry.price - entry.price) / entry.price) * 100
                  : NaN;

                const differenceSign = !isNaN(differencePercentage)
                  ? differencePercentage >= 0
                    ? "+"
                    : ""
                  : "";

                return (
                  <Tr key={entry.id} _hover={{ bg: "blue.100" }}>
                    <Td px={4} py={2}>
                      {entry.name}
                    </Td>
                    <Td isNumeric px={4} py={2}>
                      {convertPrice(entry.price, selectedCurrency).toFixed(2)} {selectedCurrency}
                    </Td>
                    <Td isNumeric px={4} py={2}>
                      {correspondingEntry
                        ? convertPrice(correspondingEntry.price, selectedCurrency).toFixed(2)
                        : "N/A"}{" "}
                      {selectedCurrency}
                    </Td>
                    <Td isNumeric px={4} py={2}>
                      {isNaN(differencePercentage)
                        ? "N/A"
                        : `${differenceSign}${differencePercentage.toFixed(2)}%`}
                    </Td>
                  </Tr>
                );
              })}
            </React.Fragment>
          ))}
        </Tbody>
      </Table>
    )}
  </Box>
  );
};
export default PricesComparisonTable;
