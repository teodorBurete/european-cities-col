import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICity } from "../../api/service/model/city/ICity";
import CityServiceImpl, {
  ICityService,
} from "../../api/service/implementation/CityService";
import CityHeader from "./CityHeader";
import { Box,Text } from "@chakra-ui/react";
import Header from "../commons/Header";
import NavBar from "../commons/NavBar";

const cityService: ICityService = new CityServiceImpl();

const CityDetail = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const [loadingItems, setLoadingItems] = useState<boolean>(true);
  const [city, setCity] = useState<ICity>();

  useEffect(() => {
    const fetchCity = async () => {
      setLoadingItems(true);
      const response = await cityService.getCityById(cityId);
      setCity(response.data);
      setLoadingItems(false);
    };

    fetchCity();
  }, [cityId]);

  return (
    <Box paddingX={150}>
    <Header />
    <NavBar />
    <Box p={4}>
      <CityHeader
        cityName={'Bucuresti'}
        countryName={'Romania'}
        flagUrl={"https://www.worldometers.info//img/flags/small/tn_ro-flag.gif"}
      />
      {/* Add more city details here */}
      <Box mt={4}>
        <Text>More information about the city...</Text>
      </Box>
    </Box>
    </Box>
  );
};

export default CityDetail;
