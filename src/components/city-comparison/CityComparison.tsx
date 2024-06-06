import React from "react";
import {
  Box,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import Header from "../commons/Header";
import NavBar from "../commons/NavBar";
import SearchBar from "../cost-of-living/SearchBar";
import Footer from "../commons/Footer";

interface CityData {
  name: string;
  data: CategoryData[];
}

interface CategoryData {
  category: string;
  items: Record<string, number>;
}

interface MergedData {
  [category: string]: {
    [item: string]: {
      city1: number | null;
      city2: number | null;
    };
  };
}

const city1Data: CityData = {
  name: "City 1",
  data: [
    {
      category: "Restaurants",
      items: { "Meal, Inexpensive Restaurant": 10, "Domestic Beer": 5 },
    },
    {
      category: "Markets",
      items: {
        "Milk (regular), (1 liter)": 1,
        "Loaf of Fresh White Bread (500g)": 2,
      },
    },
  ],
};

const city2Data: CityData = {
  name: "City 2",
  data: [
    {
      category: "Restaurants",
      items: { "Meal, Inexpensive Restaurant": 15, "Domestic Beer": 6 },
    },
    {
      category: "Markets",
      items: {
        "Milk (regular), (1 liter)": 1.5,
        "Loaf of Fresh White Bread (500g)": 2.5,
      },
    },
  ],
};

const calculateDifference = (value1: number, value2: number): string => {
  if (value1 === 0) return "N/A";
  return (((value2 - value1) / value1) * 100).toFixed(2) + "%";
};

const mergeData = (city1Data: CityData, city2Data: CityData): MergedData => {
  const merged: MergedData = {};

  city1Data.data.forEach((category) => {
    merged[category.category] = {};
    Object.entries(category.items).forEach(([item, price]) => {
      merged[category.category][item] = { city1: price, city2: null };
    });
  });

  city2Data.data.forEach((category) => {
    if (!merged[category.category]) {
      merged[category.category] = {};
    }
    Object.entries(category.items).forEach(([item, price]) => {
      if (merged[category.category][item]) {
        merged[category.category][item].city2 = price;
      } else {
        merged[category.category][item] = { city1: null, city2: price };
      }
    });
  });

  return merged;
};

const mergedData = mergeData(city1Data, city2Data);

const CityComparison: React.FC = () => {
  return (
    <Flex height="100%" direction="column" paddingX={150}>
      <Header />
      <NavBar />
      <Heading as="h1" size="xl" mb={2}>
        Compare Cities
      </Heading>
      <SearchBar />
      <Box my={4}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>{city1Data.name}</Th>
              <Th>{city2Data.name}</Th>
              <Th>Price Difference</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.entries(mergedData).map(([category, items]) => (
              <React.Fragment key={category}>
                <Tr>
                  <Td colSpan={4} bg="gray.100" fontWeight="bold">
                    {category}
                  </Td>
                </Tr>
                {Object.entries(items).map(([item, prices]) => (
                  <Tr key={item}>
                    <Td>{item}</Td>
                    <Td>{prices.city1 !== null ? prices.city1 : "N/A"}</Td>
                    <Td>{prices.city2 !== null ? prices.city2 : "N/A"}</Td>
                    <Td>
                      {prices.city1 !== null && prices.city2 !== null
                        ? calculateDifference(prices.city1, prices.city2)
                        : "N/A"}
                    </Td>
                  </Tr>
                ))}
              </React.Fragment>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Footer />
    </Flex>
  );
};

export default CityComparison;
