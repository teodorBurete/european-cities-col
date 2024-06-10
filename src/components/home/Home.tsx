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
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const popularCities = [
    {
      name: "Berlin",
      description:
        "The capital city of Germany, known for its vibrant culture and history.",
      image: `${process.env.PUBLIC_URL}/popular-cities/berlin.png`,
    },
    {
      name: "Paris",
      description:
        "The capital of France, famous for its art, fashion, and landmarks.",
        image: `${process.env.PUBLIC_URL}/popular-cities/paris.png`,
      },
    {
      name: "Madrid",
      description:
        "The central capital of Spain, renowned for its royal palace and museums.",
        image: `${process.env.PUBLIC_URL}/popular-cities/madrid.png`,
      },
  ];

  return (
    <Box>
      <Box paddingX={150}>
        <Header />
        <NavBar />
        <Box mt={10}>
          <Heading as="h1" size="2xl" mb={6} color="blue.700">
            Welcome to the European Cities Information Portal!
          </Heading>
          <Text fontSize="lg" mb={6}>
            The purpose of this web application is to group and showcase
            relevant information about the largest cities in the European Union
            and their countries!
          </Text>
          <Text fontSize="lg" mb={6}>
            Also, you can use the "Cost of living" functionality in order to
            check the prices for a large range of goods, services, or utilities
            in each city, and then compare them.
          </Text>
          <Divider mb={10} />
          <VStack spacing={8} align="start">
            <Heading as="h2" size="xl" color="blue.700">
              General Information about the European Union
            </Heading>
            <HStack>
              <Text fontSize="md" maxW="800px">
                The European Union (EU) is a political and economic union of 27
                member states that are located primarily in Europe. Its members
                have a combined area of 4,233,255.3 km² and an estimated total
                population of about 447 million. The EU has developed an
                internal single market through a standardized system of laws
                that apply in all member states in those matters, and only those
                matters, where members have agreed to act as one.
              </Text>
              <Image
                src={`${process.env.PUBLIC_URL}/imgs/eu_flag.svg`}
                alt="European Union Flag"
                boxSize="400px"
                objectFit="contain"
              />
            </HStack>
          </VStack>
          <Divider mt={10} mb={10} />
          {/* Popular Cities Section */}
          <VStack spacing={8} mb={10} align="start">
            <Heading as="h2" size="xl" color="blue.700">
              Popular Cities
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {popularCities.map((city, index) => (
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
                    src={city.image}
                    alt={city.name}
                    boxSize="200px"
                    objectFit="cover"
                    mb={4}
                    borderRadius="md"
                  />
                  <Heading as="h3" size="md" mb={2}>
                    {city.name}
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
