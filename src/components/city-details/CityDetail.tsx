import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICity } from "../../api/service/model/city/ICity";
import CityServiceImpl, { ICityService } from "../../api/service/CityService";
import CityHeader from "./CityHeader";
import { Box, Grid, GridItem, Spinner } from "@chakra-ui/react";
import Header from "../commons/Header";
import NavBar from "../commons/NavBar";
import InfoTable from "../country-details/InfoTable";
import MapComponent from "../commons/MapComponent";
import CityAbout from "./CityAbout";
import aboutCity from "../../constants/city-details-page/about.json";
import Footer from "../commons/Footer";
import NotFound from "../commons/NotFound";
import formatCitiesToLocations from "../../utilities/functions/formatCitiesToLocations";

const cityService: ICityService = new CityServiceImpl();

const CityDetail = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const [loadingItems, setLoadingItems] = useState<boolean>(true);
  const [city, setCity] = useState<ICity | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchCity = async () => {
      setLoadingItems(true);

      const response = await cityService.getCityById(cityId);
      if (!isMounted) return;

      if (response.data) {
        setCity(response.data);
      } else {
        console.error("City not found");
        setCity(null);
      }
      console.log(response);

      setLoadingItems(false);
    };
    fetchCity();
    return () => {
      isMounted = false;
    };
  }, [cityId]);

  const infoTableFields = city
    ? {
        Population: city.population,
        "Annual Population Change": `${city.annualPopulationChange} %`,
        Area: `${city.area} km²`,
        GDP: `${city.area}B €`,
        "Rank by Population": city.rankByPopulation,
      }
    : undefined;

  return !city ? (
    <NotFound />
  ) : (
    <Box paddingX={150}>
      <Header />
      <NavBar />
      <Box p={4}>
        {loadingItems ? (
          <Spinner />
        ) : (
          <>
            <CityHeader
              cityName={city.name}
              countryName={city.countryCode}
              flagUrl={`${process.env.PUBLIC_URL}/flags/${city.countryCode}.png`}
            />
            <Grid h="350px" templateColumns="repeat(3, 1fr)" gap="14">
              <GridItem colSpan={1} bg="">
                {infoTableFields && <InfoTable fields={infoTableFields} />}
              </GridItem>
              <GridItem colSpan={1} bg="">
                <Box ml={4} height="100%">
                  <CityAbout aboutText={aboutCity.about} />
                </Box>
              </GridItem>
              <GridItem colSpan={1} bg="">
                <MapComponent
                  cities={formatCitiesToLocations([city])}
                  zoom={11}
                  center={[city.latitude, city.longitude]}
                />
              </GridItem>
            </Grid>
          </>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default CityDetail;
