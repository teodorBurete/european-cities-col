import { Box } from "@chakra-ui/react";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const NotFound = () => {
  return (
    <Box paddingX={150}>
      <Header />
      <NavBar />
      404: Page is missing!
    </Box>
  );
};

export default NotFound;
