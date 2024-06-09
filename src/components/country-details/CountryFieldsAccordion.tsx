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
  const ecIndicators = country.economic_indicators;

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
    title: "Economic Indicators",
    // fields: {
    //   GDP: ecIndicators.gdp,
    //   "Minimum Wage": ecIndicators.minimum_wage,
    //   "Inflation Rate": ecIndicators.inflation,
    //   "GDP Growth Rate": ecIndicators.gdp_growth_rate,
    //   "Unemployment Rate": ecIndicators.unemployment_rate,
    //   CPI: ecIndicators.cpi,
    //   "Home Ownership Rate": ecIndicators.home_ownership_rate,
    // }
    fields: ecIndicators,
  };

  const itemsArray = [accordionItem, accordionItem2];
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
