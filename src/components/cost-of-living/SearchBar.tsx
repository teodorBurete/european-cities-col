import { useEffect, useState } from "react";
import { Box, Input, LinkBox, Text, List, ListItem } from "@chakra-ui/react";
import { ICity } from "../../api/service/model/city/ICity";
import CityServiceImpl, { ICityService } from "../../api/service/CityService";

const cityService: ICityService = new CityServiceImpl();

interface SearchBarProps {
  onCitySelect: (cityId: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const { onCitySelect } = props;
  const [citiesList, setCitiesList] = useState([] as ICity[]);
  const [query, setQuery] = useState("" as string);

  useEffect(() => {
    const fetchCities = async () => {
      if (query.length >= 2) {
        try {
          const response = await cityService.searchCityByName(query);
          setCitiesList(response.data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      } else {
        setCitiesList([]);
      }
    };

    fetchCities();
  }, [query]);

  return (
    <Box position="relative">
      <Input
        placeholder="Search for a city"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {citiesList.length > 0 && (
        <Box
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
          <List>
            {citiesList.map((city) => (
              <LinkBox
                as="article"
                key={city.id}
                _hover={{ bg: "gray.100" }}
                onClick={() => onCitySelect(city.id)}
              >
                <ListItem
                  padding={2}
                  borderBottom="1px solid"
                  borderColor="gray.200"
                >
                  <Text>{city.name}</Text>
                </ListItem>
              </LinkBox>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
