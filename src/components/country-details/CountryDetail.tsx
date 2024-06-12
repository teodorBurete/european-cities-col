import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Spinner, Text } from "@chakra-ui/react";
import CountryServiceImpl, {
  ICountryService,
} from "../../api/service/CountryService";
import { ICountry } from "../../api/service/model/country/ICountry";
import Header from "../commons/Header";
import NavBar from "../commons/NavBar";
import CountryHeader from "./CountryHeader";
import CountryFieldsAccordion from "./CountryFieldsAccordion";
import Footer from "../commons/Footer";
import MapComponent from "../commons/MapComponent";
import CountryCities from "./CountryCities";
import CountryAbout from "./CountryAbout";
import countryAboutText from "../../constants/country-details-page/country-about-test.json";
import formatCitiesToLocations from "../../utilities/functions/formatCitiesToLocations";

const countryService: ICountryService = new CountryServiceImpl();

const CountryDetail = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const [loadingItems, setLoadingItems] = useState<boolean>(false); //TODO
  const [country, setCountry] = useState<ICountry | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCountry = async () => {
      setLoadingItems(true);
      const response = await countryService.getCountriesById(countryId);
      if (!isMounted) return;

      if (response.data) {
        setCountry(response.data);
      } else {
        console.error("City not found");
        setCountry(null);
      }
      console.log(response);

      setLoadingItems(false);
    };

    fetchCountry();
    return () => {
      isMounted = false;
    };
  }, [countryId]);

  return (
    <Box paddingX={150}>
      <Header />
      <NavBar />
      {loadingItems ? (
        <Spinner />
      ) : country ? (
        <Box paddingY={4}>
          <CountryHeader
            name={country.impact_country}
            flagUrl="https://www.worldometers.info//img/flags/small/tn_ro-flag.gif"
          />
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gap={8}
            paddingY={4}
          >
            <Box>
              <CountryFieldsAccordion country={country} />
            </Box>
            <MapComponent
              cities={formatCitiesToLocations(country.cities)}
              zoom={6}
              center={[country.cities[0].latitude,country.cities[0].longitude]}
              height="415px"
              markerUrl={`/cities/`}
            />
          </Box>
          <CountryCities cities={country.cities} />
          <CountryAbout aboutText={countryAboutText.text} />
        </Box>
      ) : (
        <Text>Country not found</Text>
      )}
      <Footer />
    </Box>
  );
};

export default CountryDetail;
