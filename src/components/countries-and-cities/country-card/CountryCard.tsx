import {
  Card,
  CardBody,
  Heading,
  Link,
  List,
  ListItem,
  Image,
  HStack,
} from "@chakra-ui/react";
import { ICountry } from "../../../api/service/model/country/ICountry";
import { NavLink } from "react-router-dom";

interface CountryCardProps {
  country: ICountry;
}
const CountryCard: React.FC<CountryCardProps> = (props: CountryCardProps) => {
  const { country } = props;
  return (
    <Card
      mb={4}
      boxShadow="md"
      transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
      _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
      borderRadius="lg"
      p={5}
    >
      <CardBody>
        <Heading as="h3" size="md" mb={4} color="blue.600">
          <HStack spacing={4}>
            <Image
              src={`${process.env.PUBLIC_URL}/imgs/flags/${country.iso_a2}.png`}
              alt={`${country.impact_country} flag`}
              boxSize="35px"
              rounded={100}
              borderWidth="5px"
              borderColor="black"
            />
            <Link as={NavLink} to={`/countries/${country.id}`}>
              {country.impact_country}
            </Link>{" "}
          </HStack>
        </Heading>
        <List spacing={2}>
          {country.cities.map((city) => (
            <ListItem key={city.id}>
              <Link
                as={NavLink}
                to={`/cities/${city.id}`}
                fontWeight="bold"
                color="blue.500"
              >
                {city.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </CardBody>
    </Card>
  );
};
export default CountryCard;
