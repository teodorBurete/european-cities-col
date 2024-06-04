import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICity } from "../../api/service/model/city/ICity";
import CityServiceImpl, {
  ICityService,
} from "../../api/service/implementation/CityService";
import CityHeader from "./CityHeader";
import { Box, Flex, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import Header from "../commons/Header";
import NavBar from "../commons/NavBar";
import InfoTable from "../country-details/InfoTable";
import fields from "../../constants/city-details-page/table-fields.json";
import MapComponent from "../commons/MapComponent";
import CityAbout from "./CityAbout";
import aboutCity from "../../constants/city-details-page/about.json";
import Footer from "../commons/Footer";

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
          cityName={"Bucuresti"}
          countryName={"Romania"}
          flagUrl={
            "https://www.worldometers.info//img/flags/small/tn_ro-flag.gif"
          }
        />
        <Grid h="350px" templateColumns="repeat(3, 1fr)" gap="14">
          <GridItem colSpan={1} bg="">
            <InfoTable fields={fields} />
          </GridItem>
          <GridItem colSpan={1} bg="">
            <Box ml={4} height="100%">
              <CityAbout aboutText={aboutCity.about} />
            </Box>
          </GridItem>
          <GridItem colSpan={1} bg="">
            <MapComponent />
          </GridItem>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default CityDetail;
