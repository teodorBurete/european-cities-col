import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import SearchBar from "../cost-of-living/SearchBar";

interface CityPricesHeaderProps {
  cityName: string;
  onCitySelect: (cityId: number) => void;

}

const CityPricesHeader: React.FC<CityPricesHeaderProps> = (
  props: CityPricesHeaderProps
) => {
  const { cityName,onCitySelect } = props;
  return (
    <Box mb={4}>
      <Heading as="h1" size="xl" mb={2} color="blue.700">
        Cost of Living in {cityName}
      </Heading>
      <Flex align="center" mt={5}>
        <Text fontSize="lg" mr={2}>
          Compare {cityName} with:
        </Text>
        <SearchBar onCitySelect={onCitySelect} />
      </Flex>
    </Box>
  );
};

export default CityPricesHeader;
