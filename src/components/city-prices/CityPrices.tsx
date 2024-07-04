import { Flex, Text } from "@chakra-ui/react";
import Header from "../commons/Header";
import NavBar from "../commons/NavBar";
import Footer from "../commons/Footer";
import PricesTable from "./PricesTable";
import CityPricesHeader from "./CityPricesHeader";
import PriceEntryServiceImpl from "../../api/service/PriceEntryService";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CityPriceResponseDTO } from "../../api/service/model/price-entry/CityPriceResponseDTO";

const priceEntryService = new PriceEntryServiceImpl();

const CityPrices = () => {
  const navigate = useNavigate();
  const { cityId } = useParams<{ cityId: string }>();
  const [cityPriceResponse, setCityPriceResponse] =
    useState<CityPriceResponseDTO | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchCityPriceResponse = async () => {
      const response = await priceEntryService.getCityPriceResponse(cityId);
      if (!isMounted) return;

      if (response.data) {
        setCityPriceResponse(response.data);
      } else {
        console.error("City not found");
        setCityPriceResponse(null);
      }
      console.log(response);
    };
    fetchCityPriceResponse();
    return () => {
      isMounted = false;
    };
  }, [cityId]);

  const handleCitySelect = (selectedCityId: number) => {
    navigate(`/compare/${cityId}/${selectedCityId}`);
  };

  return (
    <Flex height="100%" direction="column" paddingX={150}>
      <Header />
      <NavBar />
      {cityPriceResponse ? (
        <>
          <CityPricesHeader
            cityName={cityPriceResponse.city.name}
            onCitySelect={handleCitySelect}
          />
          <PricesTable cityPrices={cityPriceResponse} />
        </>
      ) : (
        <Text>Price Entries for this city not found</Text>
      )}
      <Footer />
    </Flex>
  );
};

export default CityPrices;
