import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

interface CityHeaderProps {
  cityName: string;
  countryName: string;
  flagUrl: string;
}

const CityHeader: React.FC<CityHeaderProps> = (props: CityHeaderProps) => {
  const { cityName, countryName, flagUrl } = props;
  return (
    <Box mb={4}>
      <Heading as="h1" size="xl" mb={2}>
        {cityName}
      </Heading>
      <Flex alignItems="center">
        <Image marginRight={5} src={flagUrl} alt={`${countryName} flag`} boxSize="30px" rounded={100} />
        <Text fontSize="lg" mr={2}>
          {countryName}
        </Text>
      </Flex>
    </Box>
  );
};

export default CityHeader;
