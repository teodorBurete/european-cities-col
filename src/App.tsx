import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/commons/NotFound";
import CitiesAndCountriesList from "./components/countries-and-cities/CountriesAndCities";
import CountryDetail from "./components/country-details/CountryDetail";
import CityDetail from "./components/city-details/CityDetail";
import "leaflet/dist/leaflet.css";
import CostOfLiving from "./components/cost-of-living/CostOfLiving";
import CityPrices from "./components/city-prices/CityPrices";
import CityComparison from "./components/city-comparison/CityComparison";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/countries-and-cities"
          element={<CitiesAndCountriesList />}
        />
        <Route path="/cost-of-living" element={<CostOfLiving />} />
        <Route path="/cost-of-living/comparison" element={<CityComparison />} />
        <Route path="/cost-of-living/cities/:cityId" element={<CityPrices />} />
        <Route path="/countries/:countryId" element={<CountryDetail />} />
        <Route path="/cities/:cityId" element={<CityDetail />} />
        <Route path="/compare/:cityId1/:cityId2" element={<CityComparison />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
