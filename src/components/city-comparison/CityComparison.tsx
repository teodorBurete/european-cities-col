import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";
import PriceEntryServiceImpl from "../../api/service/PriceEntryService";
import { CityPriceResponseDTO } from "../../api/service/model/price-entry/CityPriceResponseDTO";
import Header from "../commons/Header";
import NavBar from "../commons/NavBar";
import Footer from "../commons/Footer";
import PricesComparisonTable from "./PriceComparisonTable";
import CityComparisonHeader from "./CityComparisonHeader";

const priceEntryService = new PriceEntryServiceImpl();

const CityComparison = () => {
  const { cityId1, cityId2 } = useParams<{
    cityId1: string;
    cityId2: string;
  }>();
  const [cityPriceResponse1, setCityPriceResponse1] =
    useState<CityPriceResponseDTO | null>(null);
  const [cityPriceResponse2, setCityPriceResponse2] =
    useState<CityPriceResponseDTO | null>(null);

  useEffect(() => {
    const fetchCityPrices = async () => {
      const response1 = await priceEntryService.getCityPriceResponse(cityId1);
      const response2 = await priceEntryService.getCityPriceResponse(cityId2);

      if (response1.data) setCityPriceResponse1(response1.data);
      if (response2.data) setCityPriceResponse2(response2.data);
    };

    fetchCityPrices();
  }, [cityId1, cityId2]);

  return (
    <Flex height="100%" direction="column" paddingX={150}>
      <Header />
      <NavBar />
      {cityPriceResponse1 && cityPriceResponse2 ? (
        <>
          <CityComparisonHeader
            cityName1={cityPriceResponse1.city.name}
            cityName2={cityPriceResponse2.city.name}
          />
          <PricesComparisonTable
            cityPrices1={cityPriceResponse1}
            cityPrices2={cityPriceResponse2}
          />
        </>
      ) : (
        <Text>Price Entries for one or both cities not found</Text>
      )}
      <Footer />
    </Flex>
  );
};

export default CityComparison;
