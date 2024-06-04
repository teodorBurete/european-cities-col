import { Box, Flex, Heading } from "@chakra-ui/react";
import Header from "../commons/Header";
import NavBar from "../commons/NavBar";
import Footer from "../commons/Footer";
import SearchBar from "../commons/SearchBar";

const CostOfLiving = () => {
  return (
    <Flex height="100%" direction="column" paddingX={150}>
      <Header />
      <NavBar />
      <Heading as="h1" size="xl" mb={2}>
        Cost of Living
      </Heading>

      <SearchBar />

      <Footer />
    </Flex>
  );
};

export default CostOfLiving;
