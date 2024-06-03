import { Box, Heading, Text } from "@chakra-ui/react";
import c from "../../constants/countries-and-cities-page/header-constants.json";

interface CountriesAndCitiesHeaderProps {}
const CountriesAndCitiesHeader: React.FC<CountriesAndCitiesHeaderProps> = (
  props: CountriesAndCitiesHeaderProps
) => {
  return (
    <Box mb={4} >
      <Heading as="h1" size="xl" mb={2}>
        {c.header}
      </Heading>
      <Text fontSize="lg" mr={2} mb={14}>
        {c.details}
      </Text>
    </Box>
  );
};

export default CountriesAndCitiesHeader;
