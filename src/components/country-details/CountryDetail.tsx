// components/CountryDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Spinner, Heading, Text, List, ListItem } from "@chakra-ui/react";
import CountryServiceImpl, {
  ICountryService,
} from "../../api/service/CountryService";
import { ICountry } from "../../api/service/model/country/ICountry";
import Header from "../commons/Header";
import NavBar from "../commons/NavBar";
import testCountry from "../../constants/test-objects/test-country-with-economics.json";
import CountryHeader from "./CountryHeader";
import CountryFieldsAccordion from "./CountryFieldsAccordion";
import Footer from "../commons/Footer";
import MapComponent from "../commons/MapComponent";
import CountryCities from "./CountryCities";
import CountryAbout from "./CountryAbout";
import countryAboutText from "../../constants/country-details-page/country-about-test.json";

const countryService: ICountryService = new CountryServiceImpl();

const CountryDetail = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const [loadingItems, setLoadingItems] = useState<boolean>(false); //TODO
  const [country, setCountry] = useState<ICountry>(testCountry);

  // useEffect(() => {
  //   const fetchCountry = async () => {
  //     setLoadingItems(true);
  //     const response = await countryService.getCountryByCode(countryCode);
  //     setCountry(response.data);
  //     setLoadingItems(false);
  //   };

  //   fetchCountry();
  // }, [countryCode]);

  return (
    <Box paddingX={150}>
      <Header />
      <NavBar />
      {loadingItems ? (
        <Spinner />
      ) : country ? (
        <Box paddingY={4}>
          <CountryHeader
            name={country.impact_country}
            flagUrl="https://www.worldometers.info//img/flags/small/tn_ro-flag.gif"
          />
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gap={8}
            paddingY={4}
          >
            <Box>
              <CountryFieldsAccordion country={country} />
            </Box>
            <MapComponent />
          </Box>
          <CountryCities cities={["test1", "test2", "test3"]} />
          <CountryAbout aboutText={countryAboutText.text} />
        </Box>
      ) : (
        <Text>Country not found</Text>
      )}
      <Footer />
    </Box>
  );
};

export default CountryDetail;
