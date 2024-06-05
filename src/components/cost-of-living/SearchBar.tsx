import { useEffect, useState } from "react";
import {
  Box,
  Input,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
} from "@chakra-ui/react";
import { ICountry } from "../../api/service/model/country/ICountry";
import CountryServiceImpl from "../../api/service/CountryService";
import { NavLink } from "react-router-dom";

const countryService = new CountryServiceImpl();

const SearchBar = () => {
  const [countriesList, setCountriesList] = useState([] as ICountry[]);
  const [query, setQuery] = useState("" as string);

  useEffect(() => {
    const fetchCountries = async () => {
      if (query.length >= 3) {
        try {
          const response = await countryService.searchCountryByName(query);
          setCountriesList(response.data);
        } catch (error) {
          console.error("Error fetching countries:", error);
        }
      } else {
        setCountriesList([]);
      }
    };

    fetchCountries();
  }, [query]);

  return (
    <>
      <Box position="relative">
        <Input
          placeholder="Search for a country"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>
      <Box zIndex={1}>
        {countriesList.length > 0 && (
          <List
            mt={2}
            position="absolute"
            width="100%"
            maxHeight="200px"
            overflowY="auto"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            bg="white"
            zIndex={1}
          >
            {countriesList.map((country) => (
              <LinkBox
                as="article"
                key={country.id}
                _hover={{ bg: "gray.100" }}
              >
                <ListItem
                  padding={2}
                  borderBottom="1px solid"
                  borderColor="gray.200"
                >
                  <LinkOverlay as={NavLink} to={`/cost-of-living/cities/1`}>
                    {country.impact_country}
                  </LinkOverlay>
                </ListItem>
              </LinkBox>
            ))}
          </List>
        )}
      </Box>
    </>
  );
};

export default SearchBar;
