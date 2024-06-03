import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import InfoTable from "./InfoTable";
import { ICountry } from "../../api/service/model/country/ICountry";

interface CountryFieldsAccordionProps {
  country: ICountry;
}

const CountryFieldsAccordion: React.FC<CountryFieldsAccordionProps> = (
  props: CountryFieldsAccordionProps
) => {
  const { country } = props;
  const density = country.population / country.area;

  const accordionItem = {
    title: "General Information",
    fields: {
      Population: country.population,
      Area: `${country.area} km²`,
      Density: `${density.toFixed(0)} people/km²`,
      "Capital City": country.capital,
      Currency: country.currency_name,
      "Phone Prefix": country.phone,
    },
  };
  
  const accordionItem2 = {
    title: "General Information",
    fields: {
      Population: country.population,
      Area: `${country.area} km²`,
      Density: `${density.toFixed(0)} people/km²`,
      "Capital City": country.capital,
      Currency: country.currency_name,
      "Phone Prefix": country.phone,
    },
  };

  const itemsArray = [accordionItem,accordionItem2];
  return (
    <Accordion defaultIndex={[0]} w="100%" maxW="800px">
      {itemsArray.map((item) => (
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {item.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <InfoTable fields={item.fields} />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CountryFieldsAccordion;
