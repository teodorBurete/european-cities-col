import { useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { ICountry } from "../../api/service/model/country/ICountry";
import CountryServiceImpl from "../../api/service/CountryService";

const countryService = new CountryServiceImpl();

const SearchBar = () => {
  const [countriesList, setCountriesList] = useState([] as ICountry[]);
  const [query, setQuery] = useState("" as string);

  const handleSearch = async () => {
    if (query.length > 3) {
      const response = await countryService.searchCountryByName(query);
      setCountriesList(response.data);
    } else {
      setCountriesList([] as ICountry[]);
    }
  };

  return (
    <Box mb={4}>
      <InputGroup>
        <Input
          placeholder={"Search for a country"}
          onChange={(e) => {
            setQuery(e.target.value);
            handleSearch();
          }}
        />
      </InputGroup>
      {countriesList ? (
        <UnorderedList>
          {countriesList.map((value, key) => {
            return (
              <ListItem key={key}>
                {" "}
                <Link href={`/cities/${value.id}`}>{value.impact_country}</Link>
              </ListItem>
            );
          })}
        </UnorderedList>
      ) : null}
    </Box>
  );
};

export default SearchBar;
