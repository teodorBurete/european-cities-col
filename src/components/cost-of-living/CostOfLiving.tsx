import { Text, Flex, Heading, Box } from "@chakra-ui/react";
import Header from "../commons/Header";
import NavBar from "../commons/NavBar";
import Footer from "../commons/Footer";
import SearchBar from "./SearchBar";
import MapComponent from "../commons/MapComponent";
import testLocations from "../../constants/test-objects/test-locations.json";

const CostOfLiving = () => {
  return (
    <Flex direction="column" paddingX={150} h={"100vh"}>
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
      <SearchBar />
      <Text fontSize="lg" mt={6} mb={10}color="blue.700">
        ...or find it on the map.
      </Text>
      <MapComponent
        zoom={5}
        cities={testLocations}
        height="700px"
        width="1200px"
        center={[48, 11]}
      />

      <Footer />
    </Flex>
  );
};

export default CostOfLiving;
