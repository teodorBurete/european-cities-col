import Header from "../commons/Header";
import NavBar from "../commons/NavBar";
import CountryCard from "./country-card/CountryCard";
import { useEffect, useState } from "react";
import { ICountry } from "../../api/service/model/country/ICountry";
import CountryServiceImpl, {
  ICountryService,
} from "../../api/service/CountryService";
import { Box, SimpleGrid, Spinner, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Footer from "../commons/Footer";
import CountriesAndCitiesHeader from "./CountriesAndCitiesHeader";

const countryService: ICountryService = new CountryServiceImpl();

const CountriesAndCities = () => {
  const [loadingItems, setLoadingItems] = useState<boolean>(true);
  const [countriesList, setCountriesList] = useState<ICountry[]>(
    [] as ICountry[]
  );
  useEffect(() => {
    let isMounted = true;

    const fetchItems = async () => {
      setLoadingItems(true);

      const response = await countryService.getCountries();

      if (!isMounted) return;

      setCountriesList(response.data);

      setLoadingItems(false);
    };
    fetchItems();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Box paddingX={150}>
      <Header />
      <NavBar />
      <CountriesAndCitiesHeader />
      {loadingItems ? (
        <Spinner />
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {countriesList.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </SimpleGrid>
      )}
      <Footer />
    </Box>
  );
};

export default CountriesAndCities;
