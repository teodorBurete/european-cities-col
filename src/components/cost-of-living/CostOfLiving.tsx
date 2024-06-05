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
      <Heading as="h1" size="xl" mb={2}>
        Cost of Living
      </Heading>
      <SearchBar />
      <MapComponent cities={testLocations} height="400px" width="400px"/>

      <Footer />
    </Flex>
  );
};

export default CostOfLiving;
