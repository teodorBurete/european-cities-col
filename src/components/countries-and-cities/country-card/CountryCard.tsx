import { Card, CardBody, Heading, List, ListItem } from "@chakra-ui/react";
import { ICountry } from "../../../api/service/model/country/ICountry";
import cities from "../../../constants/test-objects/test-cities.json";

interface CountryCardProps {
  country: ICountry;
}
const CountryCard: React.FC<CountryCardProps> = (props: CountryCardProps) => {
  const { country } = props;
  return (
    <Card mb={4} boxShadow="md">
      <CardBody>
        <Heading as="h3" size="md" mb={4}>
          {country.impact_country}
        </Heading>
        <List spacing={2}>
          {cities.map((city) => (
            <ListItem key={city.id}>{city.name}</ListItem>
          ))}
        </List>
      </CardBody>
    </Card>
  );
};
export default CountryCard;
