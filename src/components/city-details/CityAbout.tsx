import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

interface CityAboutProps {
  aboutText: string;
}
const CityAbout: React.FC<CityAboutProps> = (props: CityAboutProps) => {
  const { aboutText } = props;
  return (
    <Box flex="1" height="100%">
      <Heading size="md" mb={4}>
        About...
      </Heading>
      <Text>{aboutText}</Text>
    </Box>
  );
};

export default CityAbout;
