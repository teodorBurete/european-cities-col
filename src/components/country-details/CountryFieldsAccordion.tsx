import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import InfoTable from "./InfoTable";
import formatPopulation from '../../utilities/functions/formatPopulation';
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
  const formatedPopulation = formatPopulation(country.population);

  const accordionItem = {
    title: "General Information",
    fields: {
      Population: formatedPopulation,
      Area: `${country.area} km²`,
      Density: `${density.toFixed(0)} people/km²`,
      "Capital City": country.capital,
      Currency: country.currency_name,
      "Phone Prefix": country.phone,
    },
  };

  const accordionItem2 = {
    title: "Economic Indicators",
    fields: {
      GDP: `${ecIndicators.gdp}B €`, // Assuming GDP is in USD
      "Minimum Wage": `${ecIndicators.minimum_wage} €/month`, // Assuming minimum wage is per month
      "Inflation Rate": `${ecIndicators.inflation}%`, // Percentage
      "GDP Growth Rate": `${ecIndicators.gdp_growth_rate}%`, // Percentage
      "Unemployment Rate": `${ecIndicators.unemployment_rate}%`, // Percentage
      CPI: ecIndicators.cpi, // Assuming CPI is a number
      "Home Ownership Rate": `${ecIndicators.home_ownership_rate}%`, // Percentage
    },
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
