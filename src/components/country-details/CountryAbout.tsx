import { Box, Heading, Text } from "@chakra-ui/react";
import countriesAboutData  from "../../constants/about-text/countries/countries-about.json";

interface CountriesAbout {
  [key: string]: string;
}

// Cast the imported JSON data to the defined interface
const countriesAbout = countriesAboutData as CountriesAbout;

interface CountryAboutProps {
  countryCode: string;
}
const CountryAbout: React.FC<CountryAboutProps> = (
  props: CountryAboutProps
) => {
  const { countryCode } = props;
  const text = countriesAbout[countryCode];
  return (
    <Box>
      <Heading marginBottom={10} marginTop={10}>
        About
      </Heading>
      <Text>{text}</Text>
    </Box>
  );
};
export default CountryAbout;
