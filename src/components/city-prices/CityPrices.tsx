import { Flex, Heading } from "@chakra-ui/react";
import Header from "../commons/Header";
import NavBar from "../commons/NavBar";
import Footer from "../commons/Footer";
import testObj from "../../constants/test-objects/test-prices.json";
import PricesTable from "./PricesTable";
import CityPricesHeader from "./CityPricesHeader";

const CityPrices = () => {
  return (
    <Flex height="100%" direction="column" paddingX={150}>
      <Header />
      <NavBar />
      <CityPricesHeader cityName={'Bucharest'}/>
      <PricesTable data={testObj as any} />
      <Footer />
    </Flex>
  );
};

export default CityPrices;
