import { Heading, Image, HStack } from "@chakra-ui/react";

interface CountryHeaderProps {
  name: string;
  flagUrl: string;
}
const CountryHeader: React.FC<CountryHeaderProps> = (
  props: CountryHeaderProps
) => {
  const { name, flagUrl } = props;
  return (
    <HStack spacing={4}>
      <Image src={flagUrl} alt={`${name} flag`} boxSize="50px" rounded={100} />
      <Heading as="h1">{name}</Heading>
    </HStack>
  );
};
export default CountryHeader;
