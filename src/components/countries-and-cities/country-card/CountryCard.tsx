import {
  Card,
  CardBody,
  Heading,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { ICountry } from "../../../api/service/model/country/ICountry";
import cities from "../../../constants/test-objects/test-cities.json";
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
    >
      <CardBody>
        <Heading as="h3" size="md" mb={4}>
          <Link as={NavLink} to={`/countries/${country.id}`}>
            {country.impact_country}
          </Link>
        </Heading>
        <List spacing={2}>
          {cities.map((city) => (
            <ListItem key={city.id}>
              <Link as={NavLink} to={`/cities/${city.id}`}>
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
