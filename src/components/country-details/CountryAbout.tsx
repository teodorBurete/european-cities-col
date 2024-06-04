import { Box, Heading, Text } from "@chakra-ui/react";

interface CountryAboutProps {
  aboutText: string;
}
const CountryAbout: React.FC<CountryAboutProps> = (
  props: CountryAboutProps
) => {
  const { aboutText } = props;
  return (
    <Box>
      <Heading marginBottom={10} marginTop={10}>
        About
      </Heading>
      <Text>{aboutText}</Text>
    </Box>
  );
};
export default CountryAbout;
