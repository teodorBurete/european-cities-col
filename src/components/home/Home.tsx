import {
  Box,
  Divider,
  Image,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Link,
  Icon,
  HStack,
} from "@chakra-ui/react";
import NavBar from "../commons/NavBar";
import Header from "../commons/Header";
import Footer from "../commons/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import homeTextObj from "./home-text-obj.json";
import popularCities from "./popular-cities.json";

interface PopCity {
  name: string;
  description: string;
  cityId: number;
}

const Home = () => {
  const popCities: PopCity[] = popularCities.cities;
  const navigate = useNavigate();

  return (
    <Box>
      <Box paddingX={150}>
        <Header />
        <NavBar />
        <Box mt={10}>
          <Heading as="h1" size="2xl" mb={6} color="blue.700">
            {homeTextObj.heading}
          </Heading>
          <Text fontSize="lg" mb={6}>
            {homeTextObj.text1}
          </Text>
          <Text fontSize="lg" mb={6}>
            {homeTextObj.text2}
          </Text>
          <Divider mb={10} />
          <VStack spacing={8} align="start">
            <Heading as="h2" size="xl" color="blue.700">
              General Information about the European Union
            </Heading>
            <HStack>
              <Text fontSize="md" maxW="800px">
                {homeTextObj.generalInf}
              </Text>
            </HStack>
          </VStack>
          <Divider mt={10} mb={10} />
          {/* Popular Cities Section */}
          <VStack spacing={8} mb={10} align="start">
            <Heading as="h2" size="xl" color="blue.700">
              Popular Cities
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {popCities.map((city, index) => (
                <Box
                  key={index}
                  p={5}
                  shadow="md"
                  borderWidth="1px"
                  borderRadius="lg"
                  _hover={{
                    shadow: "lg",
                    transform: "scale(1.05)",
                    transition: "0.3s",
                  }}
                >
                  <Image
                    src={`${process.env.PUBLIC_URL}/popular-cities/${city.name}.png`}
                    alt={city.name}
                    boxSize="200px"
                    objectFit="cover"
                    mb={4}
                    borderRadius="md"
                  />
                  <Heading as="h3" size="md" mb={2}>
                    <Link
                      onClick={() =>
                        navigate(`cities/${city.cityId}`)
                      }
                      fontWeight="bold"
                      color="blue.700"
                    >
                      {city.name}
                    </Link>
                  </Heading>
                  <Text>{city.description}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
          <Divider mt={10} mb={10} />
          {/* Quick Links Section */}
          <VStack spacing={8} mb={10} align="start">
            <Heading as="h2" size="xl" color="blue.700">
              Quick Links
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="lg"
                _hover={{
                  shadow: "lg",
                  transform: "scale(1.05)",
                  transition: "0.3s",
                }}
              >
                <Link
                  as={NavLink}
                  to="/cost-of-living"
                  fontSize="lg"
                  fontWeight="bold"
                >
                  Explore Cost of Living
                  <Icon as={FaArrowRight} ml={2} />
                </Link>
              </Box>
              <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="lg"
                _hover={{
                  shadow: "lg",
                  transform: "scale(1.05)",
                  transition: "0.3s",
                }}
              >
                <Link
                  as={NavLink}
                  to="/countries-and-cities"
                  fontSize="lg"
                  fontWeight="bold"
                >
                  Explore the E.U. Countries and Cities
                  <Icon as={FaArrowRight} ml={2} />
                </Link>
              </Box>
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
