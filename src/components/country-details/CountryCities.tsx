import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface CountryCitiesProps {
  cities: Array<string>;
}

const CountryCities: React.FC<CountryCitiesProps> = (
  props: CountryCitiesProps
) => {
  const { cities } = props;
  return (
    <Box>
      <Heading marginBottom={10} marginTop={10}>
        Major Cities
      </Heading>
      <Flex justify={"space-between"}>
        {cities.map((city) => (
          <Box margin={5} as={NavLink} to="/cities/1" flex="1">
            <Button width="100%">City 1</Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CountryCities;
