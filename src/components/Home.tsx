import { useEffect, useState } from "react";
import { ICountryService } from "../api/service/ICountryService";
import CountryServiceImpl from "../api/service/implementation/CountryServiceImpl";
import { ICountry } from "../api/service/model/country/ICountry";
import { Box, Spinner } from "@chakra-ui/react";

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

      const response = await countryService.getCountries().data;

      if (!isMounted) return;

      setCountriesList(response.data);

      setLoadingItems(false);
    };
    fetchItems();

    return () => {
      isMounted = false;
    };
  }, []);

  return loadingItems ? (
    <Spinner></Spinner>
  ) : (
    <>{countriesList.map((country) => <Box>{country.id}</Box>)}</>
  );
};

export default Home;
