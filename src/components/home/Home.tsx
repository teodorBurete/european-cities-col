import { useEffect, useState } from "react";
import CountryServiceImpl, {
  ICountryService,
} from "../../api/service/CountryService";
import { ICountry } from "../../api/service/model/country/ICountry";
import { Box, Spinner } from "@chakra-ui/react";
import SearchBar from "../commons/SearchBar";
import NavBar from "../commons/NavBar";
import Header from "../commons/Header";

const countryService: ICountryService = new CountryServiceImpl();

const Home = () => {
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

  const handleSearch = (query: string) => {
    // Implement the search logic here
    const filteredCountries = countriesList.filter((country) =>
      country.impact_country.toLowerCase().includes(query.toLowerCase())
    );
    setCountriesList(filteredCountries);
  };

  return loadingItems ? (
    <Spinner></Spinner>
  ) : (
    <Box paddingX={150}>
      <Header />
      <NavBar />
    </Box>
  );
};

export default Home;
