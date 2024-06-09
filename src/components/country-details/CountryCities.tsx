import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ICity } from "../../api/service/model/city/ICity";

interface CountryCitiesProps {
  cities: ICity[];
}

const CountryCities: React.FC<CountryCitiesProps> = (
  props: CountryCitiesProps
) => {
  const { cities } = props;
  return (
    <Box mb={10}>
      <Heading marginBottom={10} marginTop={10}>
        Major Cities
      </Heading>
      <Flex justify={"space-between"}>
        {cities.map((city) => (
          <Box margin={5} as={NavLink} to={`/cities/${city.id}`} flex="1">
            <Button width="100%">{city.name}</Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CountryCities;
