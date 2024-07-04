// components/LogoSection.tsx
import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

const LogoSection: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent={"flex-start"}
      padding="1rem"
    >
      <Box mr="30px">
        <Image
          src={`${process.env.PUBLIC_URL}/imgs/logos/ase_logo.png`}
          alt="European Union Flag"
          boxSize="100px"
          objectFit="contain"
        />
      </Box>
      <Box>
        <Image
          src={`${process.env.PUBLIC_URL}/imgs/flags/eu_flag.svg`}
          alt="European Union Flag"
          boxSize="100px"
          objectFit="contain"
        />
      </Box>
      <Box>{/* Space for additional components */}</Box>
    </Flex>
  );
};

export default LogoSection;
