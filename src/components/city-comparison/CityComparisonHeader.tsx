import React from "react";
import { Box, Heading } from "@chakra-ui/react";

interface CityComparisonHeaderProps {
  cityName1: string;
  cityName2: string;
}

const CityComparisonHeader: React.FC<CityComparisonHeaderProps> = ({
  cityName1,
  cityName2,
}) => {
  return (
    <Box mb={4}>
      <Heading as="h1" size="xl" mb={2} color="blue.700">
        Cost of Living Comparison between {cityName1} and {cityName2}
      </Heading>
    </Box>
  );
};

export default CityComparisonHeader;
