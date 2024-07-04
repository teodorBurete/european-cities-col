import { Text, Flex, Heading, Box } from "@chakra-ui/react";
import Header from "../commons/Header";
import NavBar from "../commons/NavBar";
import Footer from "../commons/Footer";
import SearchBar from "./SearchBar";
import MapComponent from "../commons/MapComponent";
import { useEffect, useState } from "react";
import { ICity } from "../../api/service/model/city/ICity";
import CityServiceImpl, { ICityService } from "../../api/service/CityService";
import formatCitiesToLocations from "../../utilities/functions/formatCitiesToLocations";
import { useNavigate } from "react-router-dom";

const cityService: ICityService = new CityServiceImpl();

const CostOfLiving = () => {
  const [citiesList, setCitiesList] = useState<ICity[]>([]);
  const navigate = useNavigate();


  useEffect(() => {
    let isMounted = true;
    const fetchCity = async () => {
      const response = await cityService.getCities();
      if (!isMounted) return;

      if (response.data) {
        setCitiesList(response.data);
      } else {
        console.error("City not found");
        setCitiesList([]);
      }
      console.log(response);
    };
    fetchCity();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleCitySelect = (selectedCityId: number) => {
    navigate(`/cost-of-living/cities/${selectedCityId}`);
  };

  return (
    <Flex direction="column" paddingX={150} h={"140vh"}>
      <Header />
      <NavBar />
      <Heading as="h1" size="2xl" mb={6} color="blue.700">
        Cost of Living
      </Heading>
      <Text fontSize="lg" mb={6} color="blue.700">
        Discover the cost of living in various cities in the European Union!
        Compare prices for everyday items, find affordable places to live, and
        plan your budget accordingly.
      </Text>
      <Text fontSize="lg" mb={6} color="blue.700">
        Search for your city here:
      </Text>
      <SearchBar onCitySelect={handleCitySelect} />
      <Text fontSize="lg" mt={6} mb={10} color="blue.700">
        ...or find it on the map.
      </Text>
      <MapComponent
        zoom={5}
        cities={formatCitiesToLocations(citiesList)}
        height="700px"
        width="1200px"
        center={[48, 11]}
        markerUrl={`/cost-of-living/cities/`}
      />

      <Footer />
    </Flex>
  );
};

export default CostOfLiving;
